/**
 * EO3 - Sort by insertion
 *
 * Insertion sorting is similar to the way we put cards in our hands when playing.
 * When we add a card to a hand already sorted, we insert it directly
 * in its place and we repeat the operation for each card to add to our hand.
 *
 * The idea of ​​sorting by insertion is the same:
 *
 * - We start with the second element of the list. We put it aside (in a variable).
 * If it is smaller than the first, we put the first in place of the second and the
 * second (which was saved in a variable) in place of the first.
 *
 * - We now consider the third element. We put it aside in a variable. If it is smaller
 * than the second, we put the second in place of the third. If it is smaller than the
 * first, we put the first in place of the second.
 *
 * - So on, by shifting each time by one notch to the right all the elements which are
 * larger than the element considered.
 *
 * You can find explanations and examples on Wikipedia
 *
 * INITIAL ARRAY -> [FUNCTION] -> NEW ARRAY
 *
 * @author Tom Lienard - QuiiBz
 */

const insertionSort = require('./e02');

// Test the algorithm
console.log(insertionSort([6, 5, 3, 1, 8, 7, 2, 4]));