/**
 * Sort by insertion the given array and
 * return it back.
 *
 * @param array - The given array
 * @returns The insertion sorted array
 */
const insertionSort = (array) => {

    const arrayLength = array.length;

    for(let i = 1; i <= arrayLength - 1; i++) {

        const savedElement = array[i];
        let j = i;

        while(j > 0 && array[j - 1] > savedElement) {

            array[j] = array[j - 1];
            j--;
        }

        array[j] = savedElement;
    }

    return array;
}

module.exports = insertionSort;