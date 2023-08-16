// makes the first character of a given string uppercase.
function capitalize(str) {
    const firstLetter = str[0].toUpperCase();
    const remainder = str.slice(1);
    const capitalized = firstLetter.concat(remainder);
    return capitalized;
}

// makes all characters uppercase.
function allCaps(str) {
    const capitalized = str.toUpperCase();
    return capitalized;
}

// makes the first character of each word uppercase.
function capitalizeWords(str) {
    const array = str.split(' ').map((word) => capitalize(word)).join(' ');
    return array;
}

// Removes all spaces from the beginning and end of a String along with any extra spaces in the middle
function removeExtraSpaces(str) {
    const trimmedString = str.trim().split(' ').filter((word) => word != '').join(' ');
    return trimmedString;
}

// Removes extra spaces and replaces spaces with the hyphen "-", and makes all characters lowercase.
function kebobCase(str) {
    const kebobbed = removeExtraSpaces(str).toLowerCase().split(' ').join('-');
    return kebobbed;
}

function snakeCase(str) {
    const snaked = removeExtraSpaces(str).toLowerCase().split(' ').join('_');
    return snaked;
}


console.log(capitalize('hi laurel'));
console.log(allCaps('hi laurel'));
console.log(capitalizeWords('hi laurel'));
console.log(removeExtraSpaces(' hi    laurel '));
console.log(kebobCase('Hi   Laurel'));
console.log(snakeCase('  Hi   Laurel'));

module.exports = {
    capitalize,
    allCaps,
    capitalizeWords,
    removeExtraSpaces,
    kebobCase,
    snakeCase
};