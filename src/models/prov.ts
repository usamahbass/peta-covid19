export type ListDataType = {
  key: string;
  doc_count: number;
  jumlah_kasus: number;
  jumlah_sembuh: number;
  jumlah_meninggal: number;
  jumlah_dirawat: number;
  jenis_kelamin: {
    key: string;
    doc_count: number;
  }[];
  kelompok_umur: {
    key: string;
    doc_count: number;
    usia: {
      value: number;
    };
  }[];
  lokasi: {
    lat: number;
    lon: number;
  };
  penambahan: {
    positif: number;
    sembuh: number;
    meninggal: number;
  };
};

export type ProvModel = {
  last_date: string;
  current_data: number;
  missing_data: number;
  tanpa_provinsi: number;
  list_data: {
    key: string;
    doc_count: number;
    jumlah_kasus: number;
    jumlah_sembuh: number;
    jumlah_meninggal: number;
    jumlah_dirawat: number;
    jenis_kelamin: {
      key: string;
      doc_count: number;
    }[];
    kelompok_umur: {
      key: string;
      doc_count: number;
      usia: {
        value: number;
      };
    }[];
    lokasi: {
      lat: number;
      lon: number;
    };
    penambahan: {
      positif: number;
      sembuh: number;
      meninggal: number;
    };
  }[];
};

export type PropListDataModel = {
  key: string;
  doc_count: number;
  jumlah_kasus: number;
  jumlah_sembuh: number;
  jumlah_meninggal: number;
  jumlah_dirawat: number;
  jenis_kelamin: {
    key: string;
    doc_count: number;
  }[];
  kelompok_umur: {
    key: string;
    doc_count: number;
    usia: {
      value: number;
    };
  }[];
  lokasi: {
    lat: number;
    lon: number;
  };
  penambahan: {
    positif: number;
    sembuh: number;
    meninggal: number;
  };
};

export type JenisKelaminType = {
  key: string;
  doc_count: number;
};

export type KelompokUmurType = {
  key: string;
  doc_count: number;
  usia: {
    value: number;
  };
};
