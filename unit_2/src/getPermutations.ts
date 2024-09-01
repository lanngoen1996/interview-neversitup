export function getPermutations(input: string): string[] | string {
  const result: Set<string> = new Set()

  if (!input || typeof input !== "string") {
    return "Please enter a valid string"
  }

  (function permute(str: string, prefix: string = ""): void {
    if (str.length === 0) {
      result.add(prefix)
    } else {
      for (let i = 0; i < str.length; i++) {
        permute(`${str.slice(0, i)}${str.slice(i + 1)}`, `${prefix}${str[i]}`)
      }
    }
  })(input)

  return Array.from(result)
}