import { PropListDataModel } from "~/models";

interface WILAYAHPROPS {
  name: string;
  coordinates: Array<Number>;
}

export const DATA_WILAYAH: Array<WILAYAHPROPS> = [
  {
    name: "DKI Jakarta",
    coordinates: [-6.2146, 106.493576],
  },
  {
    name: "Jawa Barat",
    coordinates: [-6.943097, 107.633545],
  },
  {
    name: "Jawa Tengah",
    coordinates: [-6.9667, 110.4167],
  },
  {
    name: "Jawa Timur",
    coordinates: [-7.2458, 112.7378],
  },
  {
    name: "Kalimantan Timur",
    coordinates: [-0.5022, 117.1536],
  },
  {
    name: "Sulawesi Selatan",
    coordinates: [-5.1331, 119.4136],
  },
  {
    name: "Banten",
    coordinates: [-6.12, 106.1503],
  },
  {
    name: "Bali",
    coordinates: [-8.6667, 115.2167],
  },
  {
    name: "Riau",
    coordinates: [0.5333, 101.45],
  },
  {
    name: "Daerah Istimewa Yogyakarta",
    coordinates: [-7.8014, 110.3644],
  },
  {
    name: "Sumatera Barat",
    coordinates: [-0.9556, 100.3606],
  },
  {
    name: "Kalimantan Selatan",
    coordinates: [-3.3333, 114.5833],
  },
  {
    name: "Sumatera Utara",
    coordinates: [3.6667, 98.6667],
  },
  {
    name: "Papua",
    coordinates: [-2.5333, 140.7167],
  },
  {
    name: "Kalimantan Tengah",
    coordinates: [2.1336, 113.5639],
  },
  {
    name: "Sulawesi Utara",
    coordinates: [1.4931, 124.8413],
  },
  {
    name: "Nusa Tenggara Timur",
    coordinates: [-10.1633, 123.5778],
  },
  {
    name: "Nusa Tenggara Barat",
    coordinates: [-8.5833, 116.1167],
  },
  {
    name: "Bangka Belitung",
    coordinates: [-2.12914, 106.11377],
  },
  {
    name: "Sulawesi Tengah",
    coordinates: [-0.8917, 119.8707],
  },
  {
    name: "Kalimantan Utara",
    coordinates: [2.72594, 116.911],
  },
  {
    name: "Lampung",
    coordinates: [-4.8555, 105.0273],
  },
  {
    name: "Aceh",
    coordinates: [4.36855, 97.0253],
  },
  {
    name: "Sulawesi Tenggara",
    coordinates: [-3.54912, 121.72796],
  },
  {
    name: "Kepulauan Riau",
    coordinates: [-0.15478, 104.58037],
  },
  {
    name: "Papua Barat",
    coordinates: [-1.38424, 132.90253],
  },
  {
    name: "Maluku",
    coordinates: [-3.11884, 129.42078],
  },
  {
    name: "Kalimantan Barat",
    coordinates: [-0.13224, 111.09689],
  },
  {
    name: "Jambi",
    coordinates: [-1.61157, 102.7797],
  },
  {
    name: "Bengkulu",
    coordinates: [-3.51868, 102.53598],
  },
  {
    name: "Sulawesi Barat",
    coordinates: [-2.49745, 119.3919],
  },
  {
    name: "Gorontalo",
    coordinates: [0.71862, 122.45559],
  },
  {
    name: "Maluku Utara",
    coordinates: [0.63012, 127.97202],
  },
];

export const list: Array<PropListDataModel> = [
  {
    key: "DKI JAKARTA",
    doc_count: 23.896790663749087,
    jumlah_kasus: 482264,
    jumlah_sembuh: 441821,
    jumlah_meninggal: 7922,
    jumlah_dirawat: 32521,
    jenis_kelamin: [
      {
        key: "LAKI-LAKI",
        doc_count: 237958,
      },
      {
        key: "PEREMPUAN",
        doc_count: 240370,
      },
    ],
    kelompok_umur: [
      {
        key: "0-5",
        doc_count: 15331,
        usia: {
          value: 5,
        },
      },
      {
        key: "6-18",
        doc_count: 42856,
        usia: {
          value: 18,
        },
      },
      {
        key: "19-30",
        doc_count: 124539,
        usia: {
          value: 30,
        },
      },
      {
        key: "31-45",
        doc_count: 142103,
        usia: {
          value: 45,
        },
      },
      {
        key: "46-59",
        doc_count: 99501,
        usia: {
          value: 59,
        },
      },
      {
        key: "≥ 60",
        doc_count: 50757,
        usia: {
          value: 2003,
        },
      },
    ],
    lokasi: {
      lon: 106.83611829006928,
      lat: -6.204698991169558,
    },
    penambahan: {
      positif: 3221,
      sembuh: 3481,
      meninggal: 59,
    },
  },
  {
    key: "JAWA BARAT",
    doc_count: 17.378569673040943,
    jumlah_kasus: 350719,
    jumlah_sembuh: 313526,
    jumlah_meninggal: 4708,
    jumlah_dirawat: 32485,
    jenis_kelamin: [
      {
        key: "LAKI-LAKI",
        doc_count: 164953,
      },
      {
        key: "PEREMPUAN",
        doc_count: 179051,
      },
    ],
    kelompok_umur: [
      {
        key: "0-5",
        doc_count: 11764,
        usia: {
          value: 5,
        },
      },
      {
        key: "6-18",
        doc_count: 40519,
        usia: {
          value: 18,
        },
      },
      {
        key: "19-30",
        doc_count: 83449,
        usia: {
          value: 30,
        },
      },
      {
        key: "31-45",
        doc_count: 96057,
        usia: {
          value: 45,
        },
      },
      {
        key: "46-59",
        doc_count: 75929,
        usia: {
          value: 59,
        },
      },
      {
        key: "≥ 60",
        doc_count: 34422,
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
      positif: 3432,
      sembuh: 994,
      meninggal: 69,
    },
  },
  {
    key: "JAWA TENGAH",
    doc_count: 11.537466701550757,
    jumlah_kasus: 232839,
    jumlah_sembuh: 195130,
    jumlah_meninggal: 10025,
    jumlah_dirawat: 27684,
    jenis_kelamin: [
      {
        key: "LAKI-LAKI",
        doc_count: 97568,
      },
      {
        key: "PEREMPUAN",
        doc_count: 115584,
      },
    ],
    kelompok_umur: [
      {
        key: "0-5",
        doc_count: 6429,
        usia: {
          value: 5,
        },
      },
      {
        key: "6-18",
        doc_count: 23235,
        usia: {
          value: 18,
        },
      },
      {
        key: "19-30",
        doc_count: 53446,
        usia: {
          value: 30,
        },
      },
      {
        key: "31-45",
        doc_count: 61991,
        usia: {
          value: 45,
        },
      },
      {
        key: "46-59",
        doc_count: 55791,
        usia: {
          value: 59,
        },
      },
      {
        key: "≥ 60",
        doc_count: 31683,
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
      positif: 2439,
      sembuh: 1670,
      meninggal: 71,
    },
  },
  {
    key: "JAWA TIMUR",
    doc_count: 8.176602686074906,
    jumlah_kasus: 165013,
    jumlah_sembuh: 147245,
    jumlah_meninggal: 12095,
    jumlah_dirawat: 5673,
    jenis_kelamin: [
      {
        key: "LAKI-LAKI",
        doc_count: 76280,
      },
      {
        key: "PEREMPUAN",
        doc_count: 86493,
      },
    ],
    kelompok_umur: [
      {
        key: "0-5",
        doc_count: 3007,
        usia: {
          value: 5,
        },
      },
      {
        key: "6-18",
        doc_count: 11097,
        usia: {
          value: 18,
        },
      },
      {
        key: "19-30",
        doc_count: 30764,
        usia: {
          value: 30,
        },
      },
      {
        key: "31-45",
        doc_count: 43614,
        usia: {
          value: 45,
        },
      },
      {
        key: "46-59",
        doc_count: 47593,
        usia: {
          value: 59,
        },
      },
      {
        key: "≥ 60",
        doc_count: 27961,
        usia: {
          value: 1999,
        },
      },
    ],
    lokasi: {
      lon: 112.73294137529294,
      lat: -7.72334557860008,
    },
    penambahan: {
      positif: 746,
      sembuh: 383,
      meninggal: 41,
    },
  },
  {
    key: "KALIMANTAN TIMUR",
    doc_count: 3.6702125551010054,
    jumlah_kasus: 74069,
    jumlah_sembuh: 70701,
    jumlah_meninggal: 1764,
    jumlah_dirawat: 1604,
    jenis_kelamin: [
      {
        key: "LAKI-LAKI",
        doc_count: 43367,
      },
      {
        key: "PEREMPUAN",
        doc_count: 30057,
      },
    ],
    kelompok_umur: [
      {
        key: "0-5",
        doc_count: 2116,
        usia: {
          value: 5,
        },
      },
      {
        key: "6-18",
        doc_count: 6344,
        usia: {
          value: 18,
        },
      },
      {
        key: "19-30",
        doc_count: 19688,
        usia: {
          value: 30,
        },
      },
      {
        key: "31-45",
        doc_count: 24368,
        usia: {
          value: 45,
        },
      },
      {
        key: "46-59",
        doc_count: 14104,
        usia: {
          value: 59,
        },
      },
      {
        key: "≥ 60",
        doc_count: 5140,
        usia: {
          value: 40474,
        },
      },
    ],
    lokasi: {
      lon: 116.46844046560851,
      lat: 0.4538580295500849,
    },
    penambahan: {
      positif: 245,
      sembuh: 121,
      meninggal: 5,
    },
  },
  {
    key: "RIAU",
    doc_count: 3.3771168299876324,
    jumlah_kasus: 68154,
    jumlah_sembuh: 63483,
    jumlah_meninggal: 1851,
    jumlah_dirawat: 2820,
    jenis_kelamin: [
      {
        key: "LAKI-LAKI",
        doc_count: 33885,
      },
      {
        key: "PEREMPUAN",
        doc_count: 34254,
      },
    ],
    kelompok_umur: [
      {
        key: "0-5",
        doc_count: 2467,
        usia: {
          value: 5,
        },
      },
      {
        key: "6-18",
        doc_count: 7592,
        usia: {
          value: 18,
        },
      },
      {
        key: "19-30",
        doc_count: 16353,
        usia: {
          value: 30,
        },
      },
      {
        key: "31-45",
        doc_count: 20680,
        usia: {
          value: 45,
        },
      },
      {
        key: "46-59",
        doc_count: 14594,
        usia: {
          value: 59,
        },
      },
      {
        key: "≥ 60",
        doc_count: 6356,
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
      positif: 224,
      sembuh: 360,
      meninggal: 7,
    },
  },
];
