import { Button } from "@chakra-ui/button";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import {
  Smile,
  Frown,
  Activity,
  Info,
  ArrowUp,
  ArrowDown,
  User,
} from "react-feather";
import { StatsCard } from "~/components";
import { AppContext } from "~/context";
import type {
  JenisKelaminType,
  KelompokUmurType,
  ListDataType,
  ProvModel,
} from "~/models";
import { request } from "~/utils";

interface StatisticProps {
  user?: boolean;
}

const Statistic = ({ user }: StatisticProps) => {
  const { state } = useContext(AppContext);
  const [loadMore, setLoadMore] = useState<Boolean | undefined>(false);
  const [data, setData] = useState<ListDataType>();

  const loadMoreIcon = loadMore ? <ArrowUp /> : <ArrowDown />;

  useEffect(() => {
    if (user) {
      async function getUserCovidArea() {
        const response = await request.get<ProvModel>("/api/prov.json");
        const result = response.data.list_data.find(
          (el) => el.key === state.userArea.address.state.toUpperCase()
        );

        setData(result);
      }

      getUserCovidArea();
    }
    if (state.dataInfo) {
      setData(state?.dataInfo);
    }
  }, [user, state.dataInfo]);
  return (
    <>
      <StatsCard
        bg="info.500"
        title="Total Kasus"
        stat={data?.jumlah_kasus}
        icon={<Info size="3.5rem" color="white" />}
      />

      <StatsCard
        bg="success.500"
        title="Jumlah Sembuh"
        stat={data?.jumlah_sembuh}
        icon={<Smile size="3.5rem" color="white" />}
      />

      <StatsCard
        bg="danger.500"
        title="Jumlah Meninggal"
        stat={data?.jumlah_meninggal}
        icon={<Frown size="3.5rem" color="white" />}
      />

      <StatsCard
        bg="warning.500"
        title="Jumlah Positif"
        stat={data?.jumlah_dirawat}
        icon={<Activity size="3.5rem" color="white" />}
      />

      {loadMore && (
        <>
          {data?.jenis_kelamin?.map((kelamin: JenisKelaminType) => (
            <StatsCard
              bg={kelamin.key === "LAKI-LAKI" ? "info.500" : "pink.500"}
              title={`Kasus ${kelamin.key}`}
              stat={kelamin.doc_count}
              icon={<User size="3.5rem" color="white" />}
            />
          ))}

          {data?.kelompok_umur?.map((kel_umur: KelompokUmurType) => (
            <StatsCard
              bg="info.500"
              title={`Kasus Umur ${kel_umur.key}`}
              stat={kel_umur.doc_count}
              icon={<Smile size="3.5rem" color="white" />}
            />
          ))}
        </>
      )}

      <Button
        display="flex"
        mx="auto"
        colorScheme="info"
        variant="outline"
        onClick={() => setLoadMore(!loadMore)}
        rightIcon={loadMoreIcon}
      >
        {loadMore ? "Cuitkan" : "Tampilkan lebih banyak statistik"}
      </Button>
    </>
  );
};

export default Statistic;
