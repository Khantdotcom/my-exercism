// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  return `NCC-${Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000}`;
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  return Math.random() * (42000 - 41000) + 41000;
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  let arr = ['D', 'H', 'J', 'K', 'L', 'M', 'N', 'R', 'T', 'Y']
  let tossIndex = Math.floor(Math.random() * (arr.length));
  return arr[tossIndex]
}
