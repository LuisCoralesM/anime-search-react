export function trimText(text: string | undefined, length: number = 18) {
  return !text
    ? ""
    : text.length < length
    ? text
    : text.slice(0, length - 3) + "...";
}
