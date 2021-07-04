import React, { useContext, useState } from "react";
import { Pie, Tooltip, PieChart, Cell, Bar, BarChart } from "recharts";
import { Box } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { Image } from "@chakra-ui/image";
import { AppContext } from "~/context";
import { newArrayOfObj } from "~/utils";
import ChooseSvg from "~/assets/svg/choose.svg";

const Diagram = () => {
  const { state } = useContext(AppContext);
  const [values, setValues] = useState("");
  const [tipe, setTipe] = useState("pie");

  let datas;

  if (values === "jk") {
    datas = newArrayOfObj(state?.dataInfo?.jenis_kelamin);
  } else {
    datas = newArrayOfObj(state?.dataInfo?.kelompok_umur);
  }
  const COLORS = ["#65BC1E", "#0B69ED", "#FCB605", "#D83439"];

  return (
    <Box>
      <Select mb="3" onChange={(e) => setTipe(e.target.value)}>
        <option value="" selected disabled hidden>
          Pilih Tipe Chart
        </option>
        <option value="pie">Pie</option>
        <option value="bar">Bar</option>
      </Select>
      <Select onChange={(e) => setValues(e.target.value)}>
        <option value="" selected disabled hidden>
          Pilih Data
        </option>
        <option value="jk">Jenis Kelamin</option>
        <option value="usia">Rentang Usia</option>
      </Select>

      {values === "" ? (
        <Image mb="0" src={ChooseSvg} />
      ) : (
        <Box display="flex" justifyContent="center">
          {tipe === "pie" ? (
            <PieChart width={400} height={400}>
              <Pie
                label
                dataKey="value"
                cx="50%"
                cy="50%"
                fill="#8884d8"
                startAngle={180}
                outerRadius={80}
                endAngle={0}
                data={datas}
              >
                {datas?.map((entry, i) => (
                  <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          ) : (
            <BarChart width={150} height={400} data={datas}>
              <Bar dataKey="value" fill="#8884d8" />
              <Tooltip />
            </BarChart>
          )}
        </Box>
      )}
    </Box>
  );
};

export default Diagram;
