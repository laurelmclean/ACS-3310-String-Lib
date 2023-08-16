function capitalize(str) {
    const firstLetter = str[0].toUpperCase();
    const remainder = str.slice(1);
    const capitalized = firstLetter.concat(remainder);
    return capitalized;
}

function allCaps(str) {
    const capitalized = str.toUpperCase();
    return capitalized;
}

function capitalizeWords(str) {
    const array = str.split(' ');
    const mappedArray = array.map((word) => capitalize(word));
    const result = mappedArray.join(' ');
    return result;
}

console.log(capitalize('hi laurel'));
console.log(allCaps('hi laurel'));
console.log(capitalizeWords('hi laurel'));

module.exports = {
    capitalize,
    allCaps,
    capitalizeWords
};