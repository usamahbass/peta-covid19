/**
 * @info this data is got from @see https://data.covid19.go.id/public/api/prov.json,
 * @info it is static data.
 * @info for updated data you can see at @see https://data.covid19.go.id/public/api/prov.json
 */

import type { ProvModel } from "~/models";

export const PROV_DATA: ProvModel = {
  last_date: "2021-07-22",
  current_data: 100,
  missing_data: 0,
  tanpa_provinsi: 0,
  list_data: [
    {
      key: "DKI JAKARTA",
      doc_count: 25.40176176800564,
      jumlah_kasus: 770487,
      jumlah_sembuh: 673492,
      jumlah_meninggal: 10974,
      jumlah_dirawat: 86021,
      jenis_kelamin: [
        {
          key: "LAKI-LAKI",
          doc_count: 376890,
        },
        {
          key: "PEREMPUAN",
          doc_count: 382956,
        },
      ],
      kelompok_umur: [
        {
          key: "0-5",
          doc_count: 25028,
          usia: {
            value: 5,
          },
        },
        {
          key: "6-18",
          doc_count: 72980,
          usia: {
            value: 18,
          },
        },
        {
          key: "19-30",
          doc_count: 204192,
          usia: {
            value: 30,
          },
        },
        {
          key: "31-45",
          doc_count: 224265,
          usia: {
            value: 45,
          },
        },
        {
          key: "46-59",
          doc_count: 152414,
          usia: {
            value: 59,
          },
        },
        {
          key: "≥ 60",
          doc_count: 77587,
          usia: {
            value: 36583,
          },
        },
      ],
      lokasi: {
        lon: 106.83611829006928,
        lat: -6.204698991169558,
      },
      penambahan: {
        positif: 7058,
        sembuh: 10631,
        meninggal: 195,
      },
    },
    {
      key: "JAWA BARAT",
      doc_count: 18.04211587552828,
      jumlah_kasus: 547254,
      jumlah_sembuh: 414252,
      jumlah_meninggal: 7770,
      jumlah_dirawat: 125232,
      jenis_kelamin: [
        {
          key: "LAKI-LAKI",
          doc_count: 260959,
        },
        {
          key: "PEREMPUAN",
          doc_count: 276234,
        },
      ],
      kelompok_umur: [
        {
          key: "0-5",
          doc_count: 17715,
          usia: {
            value: 5,
          },
        },
        {
          key: "6-18",
          doc_count: 60870,
          usia: {
            value: 18,
          },
        },
        {
          key: "19-30",
          doc_count: 133463,
          usia: {
            value: 30,
          },
        },
        {
          key: "31-45",
          doc_count: 151632,
          usia: {
            value: 45,
          },
        },
        {
          key: "46-59",
          doc_count: 116999,
          usia: {
            value: 59,
          },
        },
        {
          key: "≥ 60",
          doc_count: 53671,
          usia: {
            value: 9783561644,
          },
        },
      ],
      lokasi: {
        lon: 107.60370834146391,
        lat: -6.920432082789247,
      },
      penambahan: {
        positif: 10499,
        sembuh: 7313,
        meninggal: 141,
      },
    },
    {
      key: "JAWA TENGAH",
      doc_count: 11.16680947500052,
      jumlah_kasus: 338712,
      jumlah_sembuh: 263419,
      jumlah_meninggal: 15749,
      jumlah_dirawat: 59544,
      jenis_kelamin: [
        {
          key: "LAKI-LAKI",
          doc_count: 146590,
        },
        {
          key: "PEREMPUAN",
          doc_count: 172525,
        },
      ],
      kelompok_umur: [
        {
          key: "0-5",
          doc_count: 8626,
          usia: {
            value: 5,
          },
        },
        {
          key: "6-18",
          doc_count: 31580,
          usia: {
            value: 18,
          },
        },
        {
          key: "19-30",
          doc_count: 76666,
          usia: {
            value: 30,
          },
        },
        {
          key: "31-45",
          doc_count: 90856,
          usia: {
            value: 45,
          },
        },
        {
          key: "46-59",
          doc_count: 83522,
          usia: {
            value: 59,
          },
        },
        {
          key: "≥ 60",
          doc_count: 47197,
          usia: {
            value: 2216,
          },
        },
      ],
      lokasi: {
        lon: 110.20111493755839,
        lat: -7.259097176704969,
      },
      penambahan: {
        positif: 5371,
        sembuh: 6084,
        meninggal: 402,
      },
    },
    {
      key: "JAWA TIMUR",
      doc_count: 8.56279648938762,
      jumlah_kasus: 259727,
      jumlah_sembuh: 190141,
      jumlah_meninggal: 17166,
      jumlah_dirawat: 52420,
      jenis_kelamin: [
        {
          key: "LAKI-LAKI",
          doc_count: 121377,
        },
        {
          key: "PEREMPUAN",
          doc_count: 134940,
        },
      ],
      kelompok_umur: [
        {
          key: "0-5",
          doc_count: 4869,
          usia: {
            value: 5,
          },
        },
        {
          key: "6-18",
          doc_count: 17992,
          usia: {
            value: 18,
          },
        },
        {
          key: "19-30",
          doc_count: 52222,
          usia: {
            value: 30,
          },
        },
        {
          key: "31-45",
          doc_count: 70422,
          usia: {
            value: 45,
          },
        },
        {
          key: "46-59",
          doc_count: 71210,
          usia: {
            value: 59,
          },
        },
        {
          key: "≥ 60",
          doc_count: 41883,
          usia: {
            value: 2021,
          },
        },
      ],
      lokasi: {
        lon: 112.73294137529294,
        lat: -7.72334557860008,
      },
      penambahan: {
        positif: 6625,
        sembuh: 3173,
        meninggal: 279,
      },
    },
    {},
    {
      key: "DAERAH ISTIMEWA YOGYAKARTA",
      doc_count: 3.282800392852044,
      jumlah_kasus: 99574,
      jumlah_sembuh: 66982,
      jumlah_meninggal: 2681,
      jumlah_dirawat: 29911,
      jenis_kelamin: [
        {
          key: "LAKI-LAKI",
          doc_count: 47328,
        },
        {
          key: "PEREMPUAN",
          doc_count: 52181,
        },
      ],
      kelompok_umur: [
        {
          key: "0-5",
          doc_count: 4124,
          usia: {
            value: 5,
          },
        },
        {
          key: "6-18",
          doc_count: 12385,
          usia: {
            value: 18,
          },
        },
        {
          key: "19-30",
          doc_count: 21858,
          usia: {
            value: 30,
          },
        },
        {
          key: "31-45",
          doc_count: 23799,
          usia: {
            value: 45,
          },
        },
        {
          key: "46-59",
          doc_count: 22229,
          usia: {
            value: 59,
          },
        },
        {
          key: "≥ 60",
          doc_count: 14501,
          usia: {
            value: 2021,
          },
        },
      ],
      lokasi: {
        lon: 110.44487831193419,
        lat: -7.894501850215696,
      },
      penambahan: {
        positif: 1978,
        sembuh: 1034,
        meninggal: 88,
      },
    },
    {
      key: "BANTEN",
      doc_count: 3.2302486843116007,
      jumlah_kasus: 97980,
      jumlah_sembuh: 58348,
      jumlah_meninggal: 1619,
      jumlah_dirawat: 38013,
      jenis_kelamin: [
        {
          key: "LAKI-LAKI",
          doc_count: 48385,
        },
        {
          key: "PEREMPUAN",
          doc_count: 49261,
        },
      ],
      kelompok_umur: [
        {
          key: "0-5",
          doc_count: 2598,
          usia: {
            value: 5,
          },
        },
        {
          key: "6-18",
          doc_count: 9468,
          usia: {
            value: 18,
          },
        },
        {
          key: "19-30",
          doc_count: 25299,
          usia: {
            value: 30,
          },
        },
        {
          key: "31-45",
          doc_count: 29504,
          usia: {
            value: 45,
          },
        },
        {
          key: "46-59",
          doc_count: 22228,
          usia: {
            value: 59,
          },
        },
        {
          key: "≥ 60",
          doc_count: 8534,
          usia: {
            value: 2021,
          },
        },
      ],
      lokasi: {
        lon: 106.10900433346703,
        lat: -6.45673638769843,
      },
      penambahan: {
        positif: 3333,
        sembuh: 775,
        meninggal: 20,
      },
    },
    {
      key: "RIAU",
      doc_count: 2.79737294206817,
      jumlah_kasus: 84850,
      jumlah_sembuh: 74432,
      jumlah_meninggal: 2290,
      jumlah_dirawat: 8128,
      jenis_kelamin: [
        {
          key: "LAKI-LAKI",
          doc_count: 42153,
        },
        {
          key: "PEREMPUAN",
          doc_count: 42682,
        },
      ],
      kelompok_umur: [
        {
          key: "0-5",
          doc_count: 3077,
          usia: {
            value: 5,
          },
        },
        {
          key: "6-18",
          doc_count: 9512,
          usia: {
            value: 18,
          },
        },
        {
          key: "19-30",
          doc_count: 20689,
          usia: {
            value: 30,
          },
        },
        {
          key: "31-45",
          doc_count: 25815,
          usia: {
            value: 45,
          },
        },
        {
          key: "46-59",
          doc_count: 17805,
          usia: {
            value: 59,
          },
        },
        {
          key: "≥ 60",
          doc_count: 7830,
          usia: {
            value: 2217,
          },
        },
      ],
      lokasi: {
        lon: 101.80510917866684,
        lat: 0.5116478513723942,
      },
      penambahan: {
        positif: 769,
        sembuh: 786,
        meninggal: 27,
      },
    },
    {
      key: "SULAWESI SELATAN",
      doc_count: 2.4485008092105938,
      jumlah_kasus: 74268,
      jumlah_sembuh: 66126,
      jumlah_meninggal: 1159,
      jumlah_dirawat: 6983,
      jenis_kelamin: [
        {
          key: "LAKI-LAKI",
          doc_count: 33792,
        },
        {
          key: "PEREMPUAN",
          doc_count: 40290,
        },
      ],
      kelompok_umur: [
        {
          key: "0-5",
          doc_count: 1770,
          usia: {
            value: 5,
          },
        },
        {
          key: "6-18",
          doc_count: 6173,
          usia: {
            value: 18,
          },
        },
        {
          key: "19-30",
          doc_count: 21138,
          usia: {
            value: 30,
          },
        },
        {
          key: "31-45",
          doc_count: 22709,
          usia: {
            value: 45,
          },
        },
        {
          key: "46-59",
          doc_count: 13380,
          usia: {
            value: 59,
          },
        },
        {
          key: "≥ 60",
          doc_count: 6490,
          usia: {
            value: 2020,
          },
        },
      ],
      lokasi: {
        lon: 120.16205590507643,
        lat: -3.7310807143894262,
      },
      penambahan: {
        positif: 954,
        sembuh: 400,
        meninggal: 12,
      },
    },
    {
      key: "BALI",
      doc_count: 2.1514221105544205,
      jumlah_kasus: 65257,
      jumlah_sembuh: 46799,
      jumlah_meninggal: 1726,
      jumlah_dirawat: 16732,
      jenis_kelamin: [
        {
          key: "LAKI-LAKI",
          doc_count: 32915,
        },
        {
          key: "PEREMPUAN",
          doc_count: 31834,
        },
      ],
      kelompok_umur: [
        {
          key: "0-5",
          doc_count: 1908,
          usia: {
            value: 5,
          },
        },
        {
          key: "6-18",
          doc_count: 5770,
          usia: {
            value: 18,
          },
        },
        {
          key: "19-30",
          doc_count: 15822,
          usia: {
            value: 30,
          },
        },
        {
          key: "31-45",
          doc_count: 16854,
          usia: {
            value: 45,
          },
        },
        {
          key: "46-59",
          doc_count: 15958,
          usia: {
            value: 59,
          },
        },
        {
          key: "≥ 60",
          doc_count: 8901,
          usia: {
            value: 145,
          },
        },
      ],
      lokasi: {
        lon: 115.13171361168976,
        lat: -8.369471688211744,
      },
      penambahan: {
        positif: 1250,
        sembuh: 0,
        meninggal: 0,
      },
    },
    {
      key: "SUMATERA BARAT",
      doc_count: 2.1024309945625137,
      jumlah_kasus: 63771,
      jumlah_sembuh: 52838,
      jumlah_meninggal: 1365,
      jumlah_dirawat: 9568,
      jenis_kelamin: [
        {
          key: "LAKI-LAKI",
          doc_count: 27620,
        },
        {
          key: "PEREMPUAN",
          doc_count: 34788,
        },
      ],
      kelompok_umur: [
        {
          key: "0-5",
          doc_count: 1784,
          usia: {
            value: 5,
          },
        },
        {
          key: "6-18",
          doc_count: 7656,
          usia: {
            value: 18,
          },
        },
        {
          key: "19-30",
          doc_count: 15578,
          usia: {
            value: 30,
          },
        },
        {
          key: "31-45",
          doc_count: 16585,
          usia: {
            value: 45,
          },
        },
        {
          key: "46-59",
          doc_count: 13332,
          usia: {
            value: 59,
          },
        },
        {
          key: "≥ 60",
          doc_count: 7598,
          usia: {
            value: 2018,
          },
        },
      ],
      lokasi: {
        lon: 100.46506235673566,
        lat: -0.850253225078247,
      },
      penambahan: {
        positif: 617,
        sembuh: 350,
        meninggal: 3,
      },
    },
    {
      key: "SUMATERA UTARA",
      doc_count: 1.5903980050131823,
      jumlah_kasus: 48240,
      jumlah_sembuh: 36317,
      jumlah_meninggal: 1360,
      jumlah_dirawat: 10563,
      jenis_kelamin: [
        {
          key: "LAKI-LAKI",
          doc_count: 22573,
        },
        {
          key: "PEREMPUAN",
          doc_count: 25353,
        },
      ],
      kelompok_umur: [
        {
          key: "0-5",
          doc_count: 1118,
          usia: {
            value: 5,
          },
        },
        {
          key: "6-18",
          doc_count: 4601,
          usia: {
            value: 18,
          },
        },
        {
          key: "19-30",
          doc_count: 11067,
          usia: {
            value: 30,
          },
        },
        {
          key: "31-45",
          doc_count: 13931,
          usia: {
            value: 45,
          },
        },
        {
          key: "46-59",
          doc_count: 10833,
          usia: {
            value: 59,
          },
        },
        {
          key: "≥ 60",
          doc_count: 6196,
          usia: {
            value: 2000,
          },
        },
      ],
      lokasi: {
        lon: 99.05196442214273,
        lat: 2.1918944531362854,
      },
      penambahan: {
        positif: 1235,
        sembuh: 323,
        meninggal: 3,
      },
    },
    {
      key: "KALIMANTAN SELATAN",
      doc_count: 1.3731688911029034,
      jumlah_kasus: 41651,
      jumlah_sembuh: 35957,
      jumlah_meninggal: 1168,
      jumlah_dirawat: 4526,
      jenis_kelamin: [
        {
          key: "LAKI-LAKI",
          doc_count: 20842,
        },
        {
          key: "PEREMPUAN",
          doc_count: 20554,
        },
      ],
      kelompok_umur: [
        {
          key: "0-5",
          doc_count: 1087,
          usia: {
            value: 5,
          },
        },
        {
          key: "6-18",
          doc_count: 3832,
          usia: {
            value: 18,
          },
        },
        {
          key: "19-30",
          doc_count: 10962,
          usia: {
            value: 30,
          },
        },
        {
          key: "31-45",
          doc_count: 12236,
          usia: {
            value: 45,
          },
        },
        {
          key: "46-59",
          doc_count: 8902,
          usia: {
            value: 59,
          },
        },
        {
          key: "≥ 60",
          doc_count: 3761,
          usia: {
            value: 1968,
          },
        },
      ],
      lokasi: {
        lon: 115.43857828622947,
        lat: -2.993594978837896,
      },
      penambahan: {
        positif: 650,
        sembuh: 149,
        meninggal: 6,
      },
    },
    {
      key: "KEPULAUAN RIAU",
      doc_count: 1.2925280635684455,
      jumlah_kasus: 39205,
      jumlah_sembuh: 29950,
      jumlah_meninggal: 910,
      jumlah_dirawat: 8345,
      jenis_kelamin: [
        {
          key: "LAKI-LAKI",
          doc_count: 20122,
        },
        {
          key: "PEREMPUAN",
          doc_count: 19054,
        },
      ],
      kelompok_umur: [
        {
          key: "0-5",
          doc_count: 1146,
          usia: {
            value: 5,
          },
        },
        {
          key: "6-18",
          doc_count: 4000,
          usia: {
            value: 18,
          },
        },
        {
          key: "19-30",
          doc_count: 11973,
          usia: {
            value: 30,
          },
        },
        {
          key: "31-45",
          doc_count: 12175,
          usia: {
            value: 45,
          },
        },
        {
          key: "46-59",
          doc_count: 6927,
          usia: {
            value: 59,
          },
        },
        {
          key: "≥ 60",
          doc_count: 2787,
          usia: {
            value: 5988767123,
          },
        },
      ],
      lokasi: {
        lat: 3.916346,
        lon: 108.261746,
      },
      penambahan: {
        positif: 690,
        sembuh: 697,
        meninggal: 17,
      },
    },
    {
      key: "SUMATERA SELATAN",
      doc_count: 1.2914730731836939,
      jumlah_kasus: 39173,
      jumlah_sembuh: 30376,
      jumlah_meninggal: 1776,
      jumlah_dirawat: 7021,
      jenis_kelamin: [
        {
          key: "LAKI-LAKI",
          doc_count: 19540,
        },
        {
          key: "PEREMPUAN",
          doc_count: 19400,
        },
      ],
      kelompok_umur: [
        {
          key: "0-5",
          doc_count: 1061,
          usia: {
            value: 5,
          },
        },
        {
          key: "6-18",
          doc_count: 3154,
          usia: {
            value: 18,
          },
        },
        {
          key: "19-30",
          doc_count: 9001,
          usia: {
            value: 30,
          },
        },
        {
          key: "31-45",
          doc_count: 11700,
          usia: {
            value: 45,
          },
        },
        {
          key: "46-59",
          doc_count: 8356,
          usia: {
            value: 59,
          },
        },
        {
          key: "≥ 60",
          doc_count: 5420,
          usia: {
            value: 28333,
          },
        },
      ],
      lokasi: {
        lon: 104.16946472724611,
        lat: -3.216211808074814,
      },
      penambahan: {
        positif: 806,
        sembuh: 192,
        meninggal: 20,
      },
    },
    {
      key: "NUSA TENGGARA TIMUR",
      doc_count: 1.0507374547631663,
      jumlah_kasus: 31871,
      jumlah_sembuh: 20110,
      jumlah_meninggal: 568,
      jumlah_dirawat: 11193,
      jenis_kelamin: [
        {
          key: "LAKI-LAKI",
          doc_count: 15380,
        },
        {
          key: "PEREMPUAN",
          doc_count: 16299,
        },
      ],
      kelompok_umur: [
        {
          key: "0-5",
          doc_count: 805,
          usia: {
            value: 5,
          },
        },
        {
          key: "6-18",
          doc_count: 4190,
          usia: {
            value: 18,
          },
        },
        {
          key: "19-30",
          doc_count: 8480,
          usia: {
            value: 30,
          },
        },
        {
          key: "31-45",
          doc_count: 8837,
          usia: {
            value: 45,
          },
        },
        {
          key: "46-59",
          doc_count: 5280,
          usia: {
            value: 59,
          },
        },
        {
          key: "≥ 60",
          doc_count: 2702,
          usia: {
            value: 2021,
          },
        },
      ],
      lokasi: {
        lat: -8.682205,
        lon: 121.592271,
      },
      penambahan: {
        positif: 779,
        sembuh: 216,
        meninggal: 9,
      },
    },
    {
      key: "KALIMANTAN TENGAH",
      doc_count: 1.0352422834871258,
      jumlah_kasus: 31401,
      jumlah_sembuh: 23207,
      jumlah_meninggal: 615,
      jumlah_dirawat: 7579,
      jenis_kelamin: [
        {
          key: "LAKI-LAKI",
          doc_count: 15629,
        },
        {
          key: "PEREMPUAN",
          doc_count: 15606,
        },
      ],
      kelompok_umur: [
        {
          key: "0-5",
          doc_count: 985,
          usia: {
            value: 5,
          },
        },
        {
          key: "6-18",
          doc_count: 3459,
          usia: {
            value: 18,
          },
        },
        {
          key: "19-30",
          doc_count: 8141,
          usia: {
            value: 30,
          },
        },
        {
          key: "31-45",
          doc_count: 9566,
          usia: {
            value: 45,
          },
        },
        {
          key: "46-59",
          doc_count: 6409,
          usia: {
            value: 59,
          },
        },
        {
          key: "≥ 60",
          doc_count: 2516,
          usia: {
            value: 2000,
          },
        },
      ],
      lokasi: {
        lon: 113.41765363593119,
        lat: -1.6024846527267131,
      },
      penambahan: {
        positif: 339,
        sembuh: 350,
        meninggal: 8,
      },
    },
    {
      key: "LAMPUNG",
      doc_count: 0.9871742840818765,
      jumlah_kasus: 29943,
      jumlah_sembuh: 21379,
      jumlah_meninggal: 1309,
      jumlah_dirawat: 7255,
      jenis_kelamin: [
        {
          key: "LAKI-LAKI",
          doc_count: 13118,
        },
        {
          key: "PEREMPUAN",
          doc_count: 16772,
        },
      ],
      kelompok_umur: [
        {
          key: "0-5",
          doc_count: 519,
          usia: {
            value: 5,
          },
        },
        {
          key: "6-18",
          doc_count: 2299,
          usia: {
            value: 18,
          },
        },
        {
          key: "19-30",
          doc_count: 6025,
          usia: {
            value: 30,
          },
        },
        {
          key: "31-45",
          doc_count: 8229,
          usia: {
            value: 45,
          },
        },
        {
          key: "46-59",
          doc_count: 7759,
          usia: {
            value: 59,
          },
        },
        {
          key: "≥ 60",
          doc_count: 4644,
          usia: {
            value: 2021,
          },
        },
      ],
      lokasi: {
        lon: 105.0214365998642,
        lat: -4.916792974850312,
      },
      penambahan: {
        positif: 424,
        sembuh: 203,
        meninggal: 28,
      },
    },
    {
      key: "KEPULAUAN BANGKA BELITUNG",
      doc_count: 0.9280948225357815,
      jumlah_kasus: 28151,
      jumlah_sembuh: 23522,
      jumlah_meninggal: 511,
      jumlah_dirawat: 4118,
      jenis_kelamin: [
        {
          key: "LAKI-LAKI",
          doc_count: 13235,
        },
        {
          key: "PEREMPUAN",
          doc_count: 14900,
        },
      ],
      kelompok_umur: [
        {
          key: "0-5",
          doc_count: 1083,
          usia: {
            value: 5,
          },
        },
        {
          key: "6-18",
          doc_count: 4138,
          usia: {
            value: 18,
          },
        },
        {
          key: "19-30",
          doc_count: 6639,
          usia: {
            value: 30,
          },
        },
        {
          key: "31-45",
          doc_count: 8432,
          usia: {
            value: 45,
          },
        },
        {
          key: "46-59",
          doc_count: 5018,
          usia: {
            value: 59,
          },
        },
        {
          key: "≥ 60",
          doc_count: 2800,
          usia: {
            value: 2021,
          },
        },
      ],
      lokasi: {
        lon: 106.54993237860324,
        lat: -2.4474441268980818,
      },
      penambahan: {
        positif: 528,
        sembuh: 294,
        meninggal: 9,
      },
    },
    {
      key: "PAPUA",
      doc_count: 0.8011992603198665,
      jumlah_kasus: 24302,
      jumlah_sembuh: 11800,
      jumlah_meninggal: 217,
      jumlah_dirawat: 12285,
      jenis_kelamin: [
        {
          key: "LAKI-LAKI",
          doc_count: 11766,
        },
        {
          key: "PEREMPUAN",
          doc_count: 10722,
        },
      ],
      kelompok_umur: [
        {
          key: "0-5",
          doc_count: 722,
          usia: {
            value: 5,
          },
        },
        {
          key: "6-18",
          doc_count: 2187,
          usia: {
            value: 18,
          },
        },
        {
          key: "19-30",
          doc_count: 6802,
          usia: {
            value: 30,
          },
        },
        {
          key: "31-45",
          doc_count: 7960,
          usia: {
            value: 45,
          },
        },
        {
          key: "46-59",
          doc_count: 4644,
          usia: {
            value: 59,
          },
        },
        {
          key: "≥ 60",
          doc_count: 1462,
          usia: {
            value: 2019,
          },
        },
      ],
      lokasi: {
        lon: 138.69602998221484,
        lat: -4.666209529820138,
      },
      penambahan: {
        positif: 221,
        sembuh: 0,
        meninggal: 1,
      },
    },
    {
      key: "KALIMANTAN BARAT",
      doc_count: 0.7366140677033486,
      jumlah_kasus: 22343,
      jumlah_sembuh: 16886,
      jumlah_meninggal: 506,
      jumlah_dirawat: 4951,
      jenis_kelamin: [
        {
          key: "LAKI-LAKI",
          doc_count: 10873,
        },
        {
          key: "PEREMPUAN",
          doc_count: 11424,
        },
      ],
      kelompok_umur: [
        {
          key: "0-5",
          doc_count: 511,
          usia: {
            value: 5,
          },
        },
        {
          key: "6-18",
          doc_count: 2420,
          usia: {
            value: 18,
          },
        },
        {
          key: "19-30",
          doc_count: 5585,
          usia: {
            value: 30,
          },
        },
        {
          key: "31-45",
          doc_count: 6322,
          usia: {
            value: 45,
          },
        },
        {
          key: "46-59",
          doc_count: 4756,
          usia: {
            value: 59,
          },
        },
        {
          key: "≥ 60",
          doc_count: 2613,
          usia: {
            value: 44372,
          },
        },
      ],
      lokasi: {
        lon: 111.12117763730221,
        lat: -0.08647457175645347,
      },
      penambahan: {
        positif: 475,
        sembuh: 471,
        meninggal: 10,
      },
    },
    {
      key: "ACEH",
      doc_count: 0.6978102026142002,
      jumlah_kasus: 21166,
      jumlah_sembuh: 16362,
      jumlah_meninggal: 931,
      jumlah_dirawat: 3873,
      jenis_kelamin: [
        {
          key: "LAKI-LAKI",
          doc_count: 10328,
        },
        {
          key: "PEREMPUAN",
          doc_count: 10818,
        },
      ],
      kelompok_umur: [
        {
          key: "0-5",
          doc_count: 340,
          usia: {
            value: 5,
          },
        },
        {
          key: "6-18",
          doc_count: 1196,
          usia: {
            value: 18,
          },
        },
        {
          key: "19-30",
          doc_count: 4746,
          usia: {
            value: 30,
          },
        },
        {
          key: "31-45",
          doc_count: 6820,
          usia: {
            value: 45,
          },
        },
        {
          key: "46-59",
          doc_count: 5026,
          usia: {
            value: 59,
          },
        },
        {
          key: "≥ 60",
          doc_count: 3018,
          usia: {
            value: 2020,
          },
        },
      ],
      lokasi: {
        lon: 96.9105217406655,
        lat: 4.225614627700759,
      },
      penambahan: {
        positif: 103,
        sembuh: 57,
        meninggal: 1,
      },
    },
    {
      key: "SULAWESI UTARA",
      doc_count: 0.6833370532733879,
      jumlah_kasus: 20727,
      jumlah_sembuh: 16461,
      jumlah_meninggal: 621,
      jumlah_dirawat: 3645,
      jenis_kelamin: [
        {
          key: "LAKI-LAKI",
          doc_count: 10096,
        },
        {
          key: "PEREMPUAN",
          doc_count: 10525,
        },
      ],
      kelompok_umur: [
        {
          key: "0-5",
          doc_count: 391,
          usia: {
            value: 5,
          },
        },
        {
          key: "6-18",
          doc_count: 1522,
          usia: {
            value: 18,
          },
        },
        {
          key: "19-30",
          doc_count: 5057,
          usia: {
            value: 30,
          },
        },
        {
          key: "31-45",
          doc_count: 6187,
          usia: {
            value: 45,
          },
        },
        {
          key: "46-59",
          doc_count: 4655,
          usia: {
            value: 59,
          },
        },
        {
          key: "≥ 60",
          doc_count: 2769,
          usia: {
            value: 2020,
          },
        },
      ],
      lokasi: {
        lon: 124.52123964154268,
        lat: 1.25963821247857,
      },
      penambahan: {
        positif: 370,
        sembuh: 83,
        meninggal: 3,
      },
    },
    {
      key: "SULAWESI TENGAH",
      doc_count: 0.5914539844514198,
      jumlah_kasus: 17940,
      jumlah_sembuh: 14085,
      jumlah_meninggal: 505,
      jumlah_dirawat: 3350,
      jenis_kelamin: [
        {
          key: "LAKI-LAKI",
          doc_count: 8051,
        },
        {
          key: "PEREMPUAN",
          doc_count: 9852,
        },
      ],
      kelompok_umur: [
        {
          key: "0-5",
          doc_count: 422,
          usia: {
            value: 5,
          },
        },
        {
          key: "6-18",
          doc_count: 1461,
          usia: {
            value: 18,
          },
        },
        {
          key: "19-30",
          doc_count: 5026,
          usia: {
            value: 30,
          },
        },
        {
          key: "31-45",
          doc_count: 5540,
          usia: {
            value: 45,
          },
        },
        {
          key: "46-59",
          doc_count: 3403,
          usia: {
            value: 59,
          },
        },
        {
          key: "≥ 60",
          doc_count: 1688,
          usia: {
            value: 1947,
          },
        },
      ],
      lokasi: {
        lon: 121.20109267528304,
        lat: -1.0041366797829747,
      },
      penambahan: {
        positif: 379,
        sembuh: 227,
        meninggal: 14,
      },
    },
    {
      key: "NUSA TENGGARA BARAT",
      doc_count: 0.5763874030191847,
      jumlah_kasus: 17483,
      jumlah_sembuh: 14342,
      jumlah_meninggal: 549,
      jumlah_dirawat: 2592,
      jenis_kelamin: [
        {
          key: "LAKI-LAKI",
          doc_count: 8603,
        },
        {
          key: "PEREMPUAN",
          doc_count: 8870,
        },
      ],
      kelompok_umur: [
        {
          key: "0-5",
          doc_count: 506,
          usia: {
            value: 5,
          },
        },
        {
          key: "6-18",
          doc_count: 1172,
          usia: {
            value: 18,
          },
        },
        {
          key: "19-30",
          doc_count: 4641,
          usia: {
            value: 30,
          },
        },
        {
          key: "31-45",
          doc_count: 5566,
          usia: {
            value: 45,
          },
        },
        {
          key: "46-59",
          doc_count: 3505,
          usia: {
            value: 59,
          },
        },
        {
          key: "≥ 60",
          doc_count: 2057,
          usia: {
            value: 1824,
          },
        },
      ],
      lokasi: {
        lon: 117.50862565333749,
        lat: -8.606998865706263,
      },
      penambahan: {
        positif: 379,
        sembuh: 300,
        meninggal: 5,
      },
    },
    {
      key: "KALIMANTAN UTARA",
      doc_count: 0.5724971259754128,
      jumlah_kasus: 17365,
      jumlah_sembuh: 13606,
      jumlah_meninggal: 270,
      jumlah_dirawat: 3489,
      jenis_kelamin: [
        {
          key: "LAKI-LAKI",
          doc_count: 9395,
        },
        {
          key: "PEREMPUAN",
          doc_count: 7655,
        },
      ],
      kelompok_umur: [
        {
          key: "0-5",
          doc_count: 398,
          usia: {
            value: 5,
          },
        },
        {
          key: "6-18",
          doc_count: 1861,
          usia: {
            value: 18,
          },
        },
        {
          key: "19-30",
          doc_count: 4991,
          usia: {
            value: 30,
          },
        },
        {
          key: "31-45",
          doc_count: 5614,
          usia: {
            value: 45,
          },
        },
        {
          key: "46-59",
          doc_count: 3022,
          usia: {
            value: 59,
          },
        },
        {
          key: "≥ 60",
          doc_count: 1141,
          usia: {
            value: 1955,
          },
        },
      ],
      lokasi: {
        lon: 116.2188791390853,
        lat: 2.8910126208140725,
      },
      penambahan: {
        positif: 405,
        sembuh: 227,
        meninggal: 7,
      },
    },
    {
      key: "JAMBI",
      doc_count: 0.5685409120325939,
      jumlah_kasus: 17245,
      jumlah_sembuh: 13226,
      jumlah_meninggal: 338,
      jumlah_dirawat: 3681,
      jenis_kelamin: [
        {
          key: "LAKI-LAKI",
          doc_count: 7432,
        },
        {
          key: "PEREMPUAN",
          doc_count: 8132,
        },
      ],
      kelompok_umur: [
        {
          key: "0-5",
          doc_count: 522,
          usia: {
            value: 5,
          },
        },
        {
          key: "6-18",
          doc_count: 2211,
          usia: {
            value: 18,
          },
        },
        {
          key: "19-30",
          doc_count: 4258,
          usia: {
            value: 30,
          },
        },
        {
          key: "31-45",
          doc_count: 5045,
          usia: {
            value: 45,
          },
        },
        {
          key: "46-59",
          doc_count: 3546,
          usia: {
            value: 59,
          },
        },
        {
          key: "≥ 60",
          doc_count: 1601,
          usia: {
            value: 2016,
          },
        },
      ],
      lokasi: {
        lon: 102.72364042732815,
        lat: -1.6976976604117253,
      },
      penambahan: {
        positif: 359,
        sembuh: 21,
        meninggal: 10,
      },
    },
    {
      key: "PAPUA BARAT",
      doc_count: 0.5501774856480097,
      jumlah_kasus: 16688,
      jumlah_sembuh: 12437,
      jumlah_meninggal: 234,
      jumlah_dirawat: 4017,
      jenis_kelamin: [
        {
          key: "LAKI-LAKI",
          doc_count: 8745,
        },
        {
          key: "PEREMPUAN",
          doc_count: 7909,
        },
      ],
      kelompok_umur: [
        {
          key: "0-5",
          doc_count: 555,
          usia: {
            value: 5,
          },
        },
        {
          key: "6-18",
          doc_count: 1715,
          usia: {
            value: 18,
          },
        },
        {
          key: "19-30",
          doc_count: 5133,
          usia: {
            value: 30,
          },
        },
        {
          key: "31-45",
          doc_count: 5469,
          usia: {
            value: 45,
          },
        },
        {
          key: "46-59",
          doc_count: 2636,
          usia: {
            value: 59,
          },
        },
        {
          key: "≥ 60",
          doc_count: 1097,
          usia: {
            value: 2109,
          },
        },
      ],
      lokasi: {
        lon: 132.9762624116817,
        lat: -2.045160182312363,
      },
      penambahan: {
        positif: 153,
        sembuh: 170,
        meninggal: 5,
      },
    },
    {
      key: "BENGKULU",
      doc_count: 0.4823613849781897,
      jumlah_kasus: 14631,
      jumlah_sembuh: 11058,
      jumlah_meninggal: 227,
      jumlah_dirawat: 3346,
      jenis_kelamin: [
        {
          key: "LAKI-LAKI",
          doc_count: 6496,
        },
        {
          key: "PEREMPUAN",
          doc_count: 7615,
        },
      ],
      kelompok_umur: [
        {
          key: "0-5",
          doc_count: 295,
          usia: {
            value: 5,
          },
        },
        {
          key: "6-18",
          doc_count: 1430,
          usia: {
            value: 18,
          },
        },
        {
          key: "19-30",
          doc_count: 3630,
          usia: {
            value: 30,
          },
        },
        {
          key: "31-45",
          doc_count: 4572,
          usia: {
            value: 45,
          },
        },
        {
          key: "46-59",
          doc_count: 3062,
          usia: {
            value: 59,
          },
        },
        {
          key: "≥ 60",
          doc_count: 1589,
          usia: {
            value: 2008,
          },
        },
      ],
      lokasi: {
        lon: 102.33842134883429,
        lat: -3.5335836266267204,
      },
      penambahan: {
        positif: 214,
        sembuh: 95,
        meninggal: 1,
      },
    },
    {
      key: "SULAWESI TENGGARA",
      doc_count: 0.47619628491729693,
      jumlah_kasus: 14444,
      jumlah_sembuh: 11683,
      jumlah_meninggal: 298,
      jumlah_dirawat: 2463,
      jenis_kelamin: [
        {
          key: "LAKI-LAKI",
          doc_count: 7043,
        },
        {
          key: "PEREMPUAN",
          doc_count: 7332,
        },
      ],
      kelompok_umur: [
        {
          key: "0-5",
          doc_count: 256,
          usia: {
            value: 5,
          },
        },
        {
          key: "6-18",
          doc_count: 1004,
          usia: {
            value: 18,
          },
        },
        {
          key: "19-30",
          doc_count: 4458,
          usia: {
            value: 30,
          },
        },
        {
          key: "31-45",
          doc_count: 4829,
          usia: {
            value: 45,
          },
        },
        {
          key: "46-59",
          doc_count: 2614,
          usia: {
            value: 59,
          },
        },
        {
          key: "≥ 60",
          doc_count: 1129,
          usia: {
            value: 829,
          },
        },
      ],
      lokasi: {
        lon: 122.07031100195121,
        lat: -4.124688793498832,
      },
      penambahan: {
        positif: 137,
        sembuh: 152,
        meninggal: 7,
      },
    },
    {
      key: "MALUKU",
      doc_count: 0.4177432239121483,
      jumlah_kasus: 12671,
      jumlah_sembuh: 8535,
      jumlah_meninggal: 208,
      jumlah_dirawat: 3928,
      jenis_kelamin: [
        {
          key: "LAKI-LAKI",
          doc_count: 6051,
        },
        {
          key: "PEREMPUAN",
          doc_count: 6482,
        },
      ],
      kelompok_umur: [
        {
          key: "0-5",
          doc_count: 184,
          usia: {
            value: 5,
          },
        },
        {
          key: "6-18",
          doc_count: 1017,
          usia: {
            value: 18,
          },
        },
        {
          key: "19-30",
          doc_count: 3593,
          usia: {
            value: 30,
          },
        },
        {
          key: "31-45",
          doc_count: 4208,
          usia: {
            value: 45,
          },
        },
        {
          key: "46-59",
          doc_count: 2218,
          usia: {
            value: 59,
          },
        },
        {
          key: "≥ 60",
          doc_count: 791,
          usia: {
            value: 44432,
          },
        },
      ],
      lokasi: {
        lat: -3.192572,
        lon: 129.576792,
      },
      penambahan: {
        positif: 75,
        sembuh: 260,
        meninggal: 9,
      },
    },
    {
      key: "MALUKU UTARA",
      doc_count: 0.2871222269000789,
      jumlah_kasus: 8709,
      jumlah_sembuh: 5795,
      jumlah_meninggal: 191,
      jumlah_dirawat: 2723,
      jenis_kelamin: [
        {
          key: "LAKI-LAKI",
          doc_count: 4458,
        },
        {
          key: "PEREMPUAN",
          doc_count: 4020,
        },
      ],
      kelompok_umur: [
        {
          key: "0-5",
          doc_count: 130,
          usia: {
            value: 5,
          },
        },
        {
          key: "6-18",
          doc_count: 530,
          usia: {
            value: 18,
          },
        },
        {
          key: "19-30",
          doc_count: 2643,
          usia: {
            value: 30,
          },
        },
        {
          key: "31-45",
          doc_count: 3175,
          usia: {
            value: 45,
          },
        },
        {
          key: "46-59",
          doc_count: 1417,
          usia: {
            value: 59,
          },
        },
        {
          key: "≥ 60",
          doc_count: 558,
          usia: {
            value: 2020,
          },
        },
      ],
      lokasi: {
        lon: 127.53910724599248,
        lat: 0.21203694908578316,
      },
      penambahan: {
        positif: 155,
        sembuh: 67,
        meninggal: 0,
      },
    },
    {
      key: "SULAWESI BARAT",
      doc_count: 0.24182357725480294,
      jumlah_kasus: 7335,
      jumlah_sembuh: 6090,
      jumlah_meninggal: 147,
      jumlah_dirawat: 1098,
      jenis_kelamin: [
        {
          key: "LAKI-LAKI",
          doc_count: 3324,
        },
        {
          key: "PEREMPUAN",
          doc_count: 4008,
        },
      ],
      kelompok_umur: [
        {
          key: "0-5",
          doc_count: 141,
          usia: {
            value: 5,
          },
        },
        {
          key: "6-18",
          doc_count: 1032,
          usia: {
            value: 18,
          },
        },
        {
          key: "19-30",
          doc_count: 2077,
          usia: {
            value: 30,
          },
        },
        {
          key: "31-45",
          doc_count: 2349,
          usia: {
            value: 45,
          },
        },
        {
          key: "46-59",
          doc_count: 1153,
          usia: {
            value: 59,
          },
        },
        {
          key: "≥ 60",
          doc_count: 541,
          usia: {
            value: 2020,
          },
        },
      ],
      lokasi: {
        lon: 119.34501936431505,
        lat: -2.4617460526098855,
      },
      penambahan: {
        positif: 151,
        sembuh: 68,
        meninggal: 3,
      },
    },
    {
      key: "GORONTALO",
      doc_count: 0.2335155279748833,
      jumlah_kasus: 7083,
      jumlah_sembuh: 6019,
      jumlah_meninggal: 205,
      jumlah_dirawat: 859,
      jenis_kelamin: [
        {
          key: "LAKI-LAKI",
          doc_count: 3507,
        },
        {
          key: "PEREMPUAN",
          doc_count: 3572,
        },
      ],
      kelompok_umur: [
        {
          key: "0-5",
          doc_count: 126,
          usia: {
            value: 5,
          },
        },
        {
          key: "6-18",
          doc_count: 516,
          usia: {
            value: 18,
          },
        },
        {
          key: "19-30",
          doc_count: 2255,
          usia: {
            value: 30,
          },
        },
        {
          key: "31-45",
          doc_count: 2291,
          usia: {
            value: 45,
          },
        },
        {
          key: "46-59",
          doc_count: 1338,
          usia: {
            value: 59,
          },
        },
        {
          key: "≥ 60",
          doc_count: 513,
          usia: {
            value: 2021,
          },
        },
      ],
      lokasi: {
        lon: 122.37605812253207,
        lat: 0.687002604326393,
      },
      penambahan: {
        positif: 76,
        sembuh: 54,
        meninggal: 7,
      },
    },
  ],
};
