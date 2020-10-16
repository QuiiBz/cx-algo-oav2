/**
 * Bonus - Sorting by selection
 *
 * Sorting by selection consists of finding the smallest element in
 * the list and placing it first, then finding the smallest among
 * those that remain and placing it second etc.
 *
 * You can find explanations and examples on Wikipedia
 *
 * INITIAL ARRAY -> [FUNCTION] -> NEW ARRAY
 *
 * @author Tom Lienard - QuiiBz
 */

const selectionSort = require('./bonus');

// Test the algorithm
console.log(selectionSort([6, 5, 3, 1, 8, 7, 2, 4]));