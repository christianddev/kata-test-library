export const toLowerCamelCase = (str: string): string => {
   const words = str.split(/[ _-]/);
   return words.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join("");
}