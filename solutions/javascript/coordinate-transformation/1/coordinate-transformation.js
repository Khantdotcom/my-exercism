// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d translation of a coordinate pair.
 *
 * @param {number} dx the translate x component
 * @param {number} dy the translate y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  translated coordinate pair in the form [x, y]
 */
export function translate2d(dx, dy) {
  let dx2 = dx;
  let dy2 = dy;
  return function moveCoorinatesRight2Px(dx1,dy1) {
    return [dx2+dx1, dy2+dy1];
  }
}

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d scale of a coordinate pair.
 *
 * @param {number} sx the amount to scale the x component
 * @param {number} sy the amount to scale the y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  scaled coordinate pair in the form [x, y]
 */
export function scale2d(sx, sy) {
  let dx2 = sx;
  let dy2 = sy;
  return function doubleCoordinates(dx1,dy1) {
    let computed = [dx2*dx1, dy2*dy1]
    return computed;
  }
}

/**
 * Create a composition function that returns a function that combines two
 * functions to perform a repeatable transformation
 *
 * @param {function} f the first function to apply
 * @param {function} g the second function to apply
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  transformed coordinate pair in the form [x, y]
 */
export function composeTransform(f, g) {
  let first = f;
  let second = g;
  return function composed(start1, start2) {
      let computed_first = f(start1,start2);
      let computed = g(computed_first[0], computed_first[1]);
    return computed;
  }
}

/**
 * Return a function that memoizes the last result.  If the arguments are the same as the last call,
 * then memoized result returned.
 *
 * @param {function} f the transformation function to memoize, assumes takes two arguments 'x' and 'y'
 *
 * @returns {function} a function which takes x and y arguments, and will either return the saved result
 *  if the arguments are the same on subsequent calls, or compute a new result if they are different.
 */
export function memoizeTransform(f) {
  let fun = f;
  let a ;
  let b ;
  let last_result;
  return function memoize(first, second) {
    if ((a === first) && (b === second)){
      return last_result;
    }
    last_result = fun(first,second);
    a = first;
    b = second;
    return last_result;
  }
}
