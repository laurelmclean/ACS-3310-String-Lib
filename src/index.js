function capitalize(str) {
    const firstLetter = str[0].toUpperCase()
    const remainder = str.slice(1)
    const capitalized = firstLetter.concat(remainder)
    return capitalized
}

function allCaps(str) {
    const capitalized = str.toUpperCase()
    return capitalized
}

console.log(capitalize('hi laurel'))
console.log(allCaps('hi laurel'))

module.exports = {
    capitalize
};