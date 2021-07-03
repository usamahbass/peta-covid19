export const newArrayOfObj = (array: any) => {
  const result = array.map(({ key: name, doc_count: value, ...rest }) => ({
    name,
    value,
    ...rest,
  }));

  return result;
};
