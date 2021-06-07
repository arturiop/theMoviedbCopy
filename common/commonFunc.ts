export const arraySlice = (array: any[], val: number) => {
  if (array.length > val) {
    return array.slice(0, val);
  }
  return array;
};
