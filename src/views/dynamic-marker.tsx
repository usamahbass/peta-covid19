import React, { useEffect, useState } from "react";
import { useDisclosure } from "@chakra-ui/hooks";
import { v4 as uuidv4 } from "uuid";
import { ProvModel } from "~/models";
import { request } from "~/utils";
import DrawerInfo from "./drawer-info";
import MarkerSwitch from "./marker-switch";

export const DynamicMarker = () => {
  const [prov, setProv] = useState<ProvModel>();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    async function getProv() {
      setLoading(true);
      try {
        const { data } = await request.get("/api/prov.json");

        setProv(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getProv();

    return () => setProv(undefined);
  }, []);

  if (loading) {
    return <div>loading..</div>;
  }

  if (error) {
    return <div>error</div>;
  }

  return (
    <>
      {prov?.list_data?.map((el) => {
        if (el.lokasi) {
          return <MarkerSwitch key={uuidv4()} el={el} onOpen={onOpen} />;
        }
      })}
      <DrawerInfo isOpen={isOpen} onClose={onClose} />
    </>
  );
};
