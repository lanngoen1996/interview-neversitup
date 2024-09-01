import { countSmileys } from '../src/countSmileys'

test('should return smileys', () => {
  expect(countSmileys([':)', ';(', ';}', ':-D'])).toBe(2)
  expect(countSmileys([';D', ':-(', ':-)', ';~)'])).toBe(3)
  expect(countSmileys([';]', ':[', ';*', ':$', ';-D'])).toBe(1)
})