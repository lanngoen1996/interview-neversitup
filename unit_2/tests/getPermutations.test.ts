import { getPermutations } from '../src/getPermutations'

test('should generate normal case', () => {
  const result = getPermutations("ab")
  expect((result as string[]).sort()).toEqual(["ab", "ba"].sort())
})

test('should generate all unique permutations for a non-empty string', () => {
  const result = getPermutations("abc")
  expect((result as string[]).sort()).toEqual(["abc", "acb", "bac", "bca", "cab", "cba"].sort())
})

test('should handle strings with duplicate characters correctly', () => {
  const result = getPermutations("aab")
  expect((result as string[]).sort()).toEqual(["aab", "aba", "baa"].sort())
})

test('should handle single character string', () => {
  const result = getPermutations("a")
  expect(result).toEqual(["a"])
})

test('should handle non-string input gracefully', () => {
  const result = getPermutations("123")
  expect((result as string[]).sort()).toEqual(["123", "132", "213", "231", "312", "321"])
})

test('should handle an empty string input', () => {
  const result = getPermutations("")
  expect(result).toEqual("Please enter a valid string")
})