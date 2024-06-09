import { average, sum } from "./stats";

export const sumAsync = async (numbers: number[]) => {
  return Promise.resolve(sum(numbers));
}

export const averageAsync = async (number: number[]) => {
  return Promise.resolve(average(number));
}