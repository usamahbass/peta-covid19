import React, { useEffect } from "react";
import axios from "axios";

export const DynamicMarker = () => {
  useEffect(() => {
    axios.get("/api/indonesia").then((res) => console.log(res.data, "HERE"));
  }, []);
  return <div>tes</div>;
};
