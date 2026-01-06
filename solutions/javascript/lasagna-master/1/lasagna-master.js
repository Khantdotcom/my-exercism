/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(remaining){
  if (isNaN(remaining)){
    return 'You forgot to set the timer.';
  }
  if (remaining === 0){
    return 'Lasagna is done.'
  }
  return 'Not done, please wait.';
}

export function preparationTime(layers, avg_time = null){
  const num = layers.length;
  if (avg_time){
    return avg_time * num;
  }
  return 2 * num;
}

export function quantities(arr){
  let noodle_amount = 0;
  let sauce_amount = 0;
  for (let ingre of arr){
    if (ingre == 'noodles'){
      noodle_amount += 50;
    }
    else if (ingre == 'sauce'){
      sauce_amount += 0.2;
    }
  }
  return {noodles: noodle_amount, sauce : sauce_amount }
}

export function addSecretIngredient(arr1,arr2){
  arr2.push(arr1[arr1.length -1]);
}

export function scaleRecipe(obj, multi){
  let factor = multi / 2;
  let scaled = {};
  for (const key of Object.keys(obj)){
    scaled[key] = obj[key] * factor;
  };
  return scaled;
}