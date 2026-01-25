export function convert(
  digits: number[],
  inputBase: number,
  outputBase: number
): number[] {
  checkBase(inputBase, true);
  checkBase(outputBase, false);
  checkInput(digits, inputBase);

  let result: number[] = [];

  let num = 0;
  const le = digits.length;
  for (let i = 0; i < le; i++) {
    num += digits[i] * Math.pow(inputBase, le - i - 1);
  }

  if (num === 0) return [0];

  while (num > 0) {
    const remainder = num % outputBase;
    num = Math.floor(num / outputBase);
    result.unshift(remainder);
  }

  return result;
}

export function checkBase(base: number, typ: boolean): void {
  if (base <= 1 || !Number.isInteger(base)) {
    throw new Error(`Wrong ${typ ? "input" : "output"} base`);
  }
}

export function checkInput(arr: number[], base: number): void {

  if (arr.length === 0) throw new Error("Input has wrong format");

  if (arr.length > 1 && arr[0] === 0) throw new Error("Input has wrong format");

  for (const n of arr) {
    if (!Number.isInteger(n) || n < 0 || n >= base) {
      throw new Error("Input has wrong format");
    }
  }
}
