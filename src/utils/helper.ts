export const newArrayOfObj = (array: any) => {
  const result = array.map(({ key: name, doc_count: value, ...rest }: any) => ({
    name,
    value,
    ...rest,
  }));

  return result;
};

export const nullChecker = (cell: string) => (!cell ? "-" : cell);
