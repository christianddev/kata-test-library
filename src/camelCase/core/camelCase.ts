export const toLowerCamelCase = (str: string): string => {
  return str
    ?.split("_")?.map((w) => `${w[0].toUpperCase()}${w?.slice(1, w?.length -1)}`)?.join("")
    ?.split(" ")?.join("");
}