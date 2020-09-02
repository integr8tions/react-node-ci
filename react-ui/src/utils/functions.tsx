export const removeItemAtIndex = (arr: any[], index: number) => [
  ...arr.slice(0, index),
  ...arr.slice(index + 1),
];

export const replaceItemAtIndex = (arr: any[], index: number, newValue: any) => [
  ...arr.slice(0, index),
  newValue,
  ...arr.slice(index + 1),
];

export default removeItemAtIndex;
