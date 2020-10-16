/**
 * Bubble sort the given array and return
 * it back.
 *
 * @param array - The given array
 * @returns The bubble sorted array
 */
const bubbleSort = (array) => {

    const arrayLength = array.length;

    for(let i = 0; i < arrayLength; i++) {

        for(let j = 0; j < arrayLength - 1; j++) {

            if(array[j] > array[j + 1])
                swapArray(array, j, j + 1);
        }
    }

    return array;
}

/**
 * Swap two elements in the given array and
 * return it back.
 *
 * @param array - The array to swap elements to
 * @param firstIndex - The first index to swap
 * @param secondIndex - The second index to swap
 */
const swapArray = (array, firstIndex, secondIndex) => {

    const firstIndexElement = array[firstIndex];

    array[firstIndex] = array[secondIndex]
    array[secondIndex] = firstIndexElement;
}

module.exports = bubbleSort;