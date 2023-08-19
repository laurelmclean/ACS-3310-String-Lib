// makes the first character of a given string uppercase.
function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

// makes all characters uppercase.
function allCaps(str) {
    return str.toUpperCase();
}

// makes the first character of each word uppercase.
function capitalizeWords(str) {
    return str.split(' ').map((word) => capitalize(word)).join(' ');
}

// Removes all spaces from the beginning and end of a String along with any extra spaces in the middle
function removeExtraSpaces(str) {
    return str.trim().split(' ').filter((word) => word != '').join(' ');
}

// Removes extra spaces and replaces spaces with the hyphen "-", and makes all characters lowercase.
function kebobCase(str) {
    return removeExtraSpaces(str).toLowerCase().split(' ').join('-');
}

// Removes extra space and replaces spaces with an underscore "_", and makes all characters lowercase.
function snakeCase(str) {
    return removeExtraSpaces(str).toLowerCase().split(' ').join('_');
}

// Lowercases the first character of the first word. Then uppercases the first character of all other words, and removes all spaces.
function camelCase(str) {
    return removeExtraSpaces(str).split(' ').map((word, index) => {
        if (index === 0) {
            return word.toLowerCase();
        } else {
            return capitalize(word);
        }
    }).join('');
}

// this method will take the specified number of characters of a string and move to the end of a string
function shift(str, number) {
    const first = str.slice(0, number);
    const last = str.slice(number);
    return last + first;
}

// This function should convert the given string to a hash tag. 
function makeHashTag(str) {
    let array = str.toLowerCase().split(" ");
    console.log(array)
    if (array.length > 3) {
        array = array.sort((a, b) => b.length - a.length).slice(0, 3);
        console.log(array)
    }
    return array.map(i => '#' + i);
}

// Returns true if the given string is empty or contains only whitespace
function isEmpty(str) {

}


console.log(capitalize('hi laurel'));
console.log(allCaps('hi laurel'));
console.log(capitalizeWords('hi laurel'));
console.log(removeExtraSpaces(' hi    laurel '));
console.log(kebobCase('Hi   Laurel'));
console.log(snakeCase('  Hi   Laurel'));
console.log(camelCase('  Hi there   Laurel'));
console.log(shift('hi laurel', 4));
console.log(makeHashTag('how are you doing today'));

module.exports = {
    capitalize,
    allCaps,
    capitalizeWords,
    removeExtraSpaces,
    kebobCase,
    snakeCase,
    camelCase,
    shift,
    makeHashTag
};