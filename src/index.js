function capitalize(str) {
    const firstLetter = str[0].toUpperCase()
    const remainder = str.slice(1)
    const capitalized = firstLetter.concat(remainder)
    return capitalized
}

module.exports = {
    capitalize
};