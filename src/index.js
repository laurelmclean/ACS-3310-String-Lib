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
    const array = str.split(' ');
    const mappedArray = array.map((word) => capitalize(word));
    const result = mappedArray.join(' ');
    return result;
}

// Removes all spaces from the beginning and end of a String along with any extra spaces in the middle
function removeExtraSpaces(str) {
    const trimmedString = str.trim();
    const splitString = trimmedString.split(' ');
    const filtered = splitString.filter((word) => word != '');
    const result = filtered.join(' ');
    return result;
}

console.log(capitalize('hi laurel'));
console.log(allCaps('hi laurel'));
console.log(capitalizeWords('hi laurel'));
console.log(removeExtraSpaces(' hi    laurel '));

module.exports = {
    capitalize,
    allCaps,
    capitalizeWords
};