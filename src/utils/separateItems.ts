export const separateItems = (item: any, i: number, arr: any[]) =>
  item.name + (arr.length - 1 === i ? "" : " - ");
