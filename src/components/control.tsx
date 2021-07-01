import { useEffect, forwardRef, useState } from "react";
import { createPortal } from "react-dom";
import { createElementHook, createControlHook } from "@react-leaflet/core";
import { Control, DomUtil, DomEvent } from "leaflet";

const DumbControl = Control.extend({
  options: {
    className: "",
    onOff: "",
    handleOff: function noop() {},
  },

  onAdd(/* map */) {
    var _controlDiv = DomUtil.create("div", this.options.className);
    DomEvent.disableClickPropagation(_controlDiv);
    return _controlDiv;
  },

  onRemove(map) {
    if (this.options.onOff) {
      map.off(this.options.onOff, this.options.handleOff, this);
    }

    return this;
  },
});

const createControl = (props, context) => {
  const instance = new DumbControl(props);
  return { instance, context: { ...context, overlayContainer: instance } };
};

const useControlElement = createElementHook(createControl);
const useControl = createControlHook(useControlElement);

//create your forceUpdate hook
const useForceUpdate = () => {
  const [value, setValue] = useState(0); // integer state
  return () => setValue((value) => value + 1); // update the state to force render
};

const createLeafletControl = (useElement) => {
  const Component = (props, ref) => {
    const forceUpdate = useForceUpdate();
    const { instance } = useElement(props).current;

    useEffect(() => {
      // Origin: https://github.com/LiveBy/react-leaflet-control/blob/master/lib/control.jsx
      // This is needed because the control is only attached to the map in
      // MapControl's componentDidMount, so the container is not available
      // until this is called. We need to now force a render so that the
      // portal and children are actually rendered.
      forceUpdate();
    }, []);

    const contentNode = instance.getContainer();
    return contentNode ? createPortal(props.children, contentNode) : null;
  };
  return forwardRef(Component);
};

export const LeafletControl = createLeafletControl(useControl);
