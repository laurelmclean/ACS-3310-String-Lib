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


console.log(capitalize('hi laurel'));
console.log(allCaps('hi laurel'));
console.log(capitalizeWords('hi laurel'));
console.log(removeExtraSpaces(' hi    laurel '));
console.log(kebobCase('Hi   Laurel'));
console.log(snakeCase('  Hi   Laurel'));
console.log(camelCase('  Hi there   Laurel'));

module.exports = {
    capitalize,
    allCaps,
    capitalizeWords,
    removeExtraSpaces,
    kebobCase,
    snakeCase,
    camelCase
};