export function findOdd(arr: number[]): number | null {
  const countMap: { [key: string]: number } = {};

  arr.forEach((num) => {
    countMap[num] = (countMap[num] ?? 0) + 1;
  });

  const oddList: number[] = []
  Object.keys(countMap).forEach((num) => {
    if (countMap[num] % 2 !== 0) {
      oddList.push(parseInt(num, 10))
    }
  })

  return Math.max(...oddList);
}