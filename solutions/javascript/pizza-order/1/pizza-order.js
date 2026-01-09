/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  const prices = {
    'Margherita': 7,
    'Caprese': 9,
    'Formaggio': 10,
    'ExtraSauce': 1,
    'ExtraToppings': 2
  };

  // Base price of the pizza
  let total = prices[pizza];

  // Add the cost of each extra
  for (const extra of extras) {
    total += prices[extra];
  }

  return total;
}
/**
 * Calculate the price of the total order, given individual orders
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let totalOrderPrice = 0;

  for (const order of pizzaOrders) {
    // We pass the pizza name and spread the extras array into pizzaPrice
    totalOrderPrice += pizzaPrice(order.pizza, ...order.extras);
  }

  return totalOrderPrice;
}
