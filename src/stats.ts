export const sum = (number: number[]) => {
  return number.reduce((acc, current) => acc + current, 0);
}

export const average = (number: number[]) => {
  return sum(number) / number.length;
}