export const expect = <T>(expected: T) => {
  return {
    toBe(result: T) {
      if (result === expected) {
        console.log("✅ It works!");
      } else {
        throw new Error(`❌ result: ${result} !== expected: ${expected}`);
      }
    },
  };
};

export const test = async (title: string, callback: () => void) => {
  try {
    console.log(`${title}`);
    await callback();
  } catch (error) {
    console.error(error);
  }
}

export const it = test;

export const describe = (title: string, callback: () => void) => {
  console.log(`${title}`);
  callback();
}
