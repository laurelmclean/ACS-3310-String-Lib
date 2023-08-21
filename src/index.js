// makes the first character of a given string uppercase.
function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

// makes all characters uppercase.
function allCaps(str) {
    return str.toUpperCase();
}

// makes the first character of each word uppercase.
function capitalizeWords(str) {
    return str.split(' ').map((word) => capitalize(word)).join(' ');
}

// makes the first character of each word uppercase except the, in, a, an, and, but, for, at, by, from.
function capitalizeHeadlines(str) {
    const lowercaseWords = ['the', 'in', 'a', 'an', 'and', 'but', 'for', 'at', 'by', 'from'];

    const words = str.split(' ');

    words[0] = capitalize(words[0]);

    for (let i = 1; i < words.length; i++) {
        if (!lowercaseWords.includes(words[i])) {
            words[i] = capitalize(words[i]);
        }
    }

    return words.join(' ');
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
function shift(str, number = 1) {
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
    let trimmed = str.trim();
    if (trimmed === "") {
        return true;
    }
    for (let char of trimmed) {
        if (char !== '\n' || '\r' || '\t') {
            return false;
        }
    }
    return true;
}

module.exports = {
    capitalize,
    allCaps,
    capitalizeWords,
    capitalizeHeadlines,
    removeExtraSpaces,
    kebobCase,
    snakeCase,
    camelCase,
    shift,
    makeHashTag,
    isEmpty
};