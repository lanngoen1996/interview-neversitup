const smileyRegex = /[)D]/;

export function countSmileys(smileys: string[]): number | null {
  const countSmileys = smileys.reduce((count, smiley) => {
    return smileyRegex.test(smiley) ? count + 1 : count;
  }, 0);
  return countSmileys
}