/**
 * Sort by selection the given array and
 * return it back.
 *
 * @param array - The given array
 * @returns The selection sorted array
 */
const selectionSort = (array) => {

    const arrayLength = array.length;

    for(let i = 0; i <= arrayLength - 2; i++) {

        let min = i;

        for(let j = i + 1; j <= arrayLength - 1; j++) {

            if(array[j] < array[min])
                min = j;
        }

        if(min !== i)
            swapArray(array, i, min);
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

module.exports = selectionSort;