//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (targetWord, anagramList) => {
  const lowerTarget = targetWord.toLowerCase();
  const sortedTarget = lowerTarget.split('').sort().join('');

  return anagramList.filter((candidate) => {
    const lowerCandidate = candidate.toLowerCase();
    let lower = candidate.toLowerCase();
    let sorted = lower.split('').sort().join('');
    return sorted === sortedTarget && lowerCandidate !== lowerTarget;
  });
};