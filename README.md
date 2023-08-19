# String Manipulation Utility Functions

This repository contains a collection of utility functions for manipulating strings in various formats. These functions are designed to make it easier to work with strings by performing actions such as capitalization, removing spaces, and transforming strings into different naming conventions.

## Functions

### capitalize(str)

This function takes a string as input and returns the same string with the first character capitalized while keeping the rest of the characters unchanged.

**Example:**
```javascript
console.log(capitalize('hello world')); // Returns: "Hello world"
```

### allCaps(str)

This function converts all characters in the input string to uppercase.

**Example:**
```javascript
console.log(allCaps('hello world')); // Returns: "HELLO WORLD"
```

### capitalizeWords(str)

The `capitalizeWords` function capitalizes the first character of each word in the input string. Words are separated by spaces.

**Example:**
```javascript
console.log(capitalizeWords('hello world')); // Returns: "Hello World"
```

### removeExtraSpaces(str)

`removeExtraSpaces` removes any leading, trailing, or extra spaces within the input string, ensuring that there is only one space between words.

**Example:**
```javascript
console.log(removeExtraSpaces('   hello   world   ')); // Returns: "hello world"
```

### kebabCase(str)

The `kebabCase` function converts the input string into kebab-case format. It removes extra spaces, replaces spaces with hyphens, and converts all characters to lowercase.

**Example:**
```javascript
console.log(kebabCase('Hello   World')); // Returns: "hello-world"
```

### snakeCase(str)

`snakeCase` transforms the input string into snake_case format. It removes extra spaces, replaces spaces with underscores, and converts all characters to lowercase.

**Example:**
```javascript
console.log(snakeCase('Hello   World')); // Returns: "hello_world"
```

### camelCase(str)

The `camelCase` function converts the input string into camelCase format. It removes extra spaces, lowercase the first character of the first word, and capitalizes the first character of each subsequent word, with no spaces between words.

**Example:**
```javascript
console.log(camelCase('Hello   World')); // Returns: "helloWorld"
```

### shift(str, number)

This function takes two arguments: a string (`str`) and a number (`number`). It shifts the specified number of characters from the beginning of the string to the end, resulting in a modified string.

**Example:**
```javascript
console.log(shift('hello world', 2)); // Returns: "llo worldhe"
```

### makeHashTag(str)

`makeHashTag` converts the given string into a hash tag format. It takes the input string, converts it to lowercase, splits it into an array of words, and sorts the array by word length. If there are more than three words, only the top three longest words are selected. The function then adds a '#' symbol to each word and returns an array of hash tags.

**Example:**
```javascript
console.log(makeHashTag('Convert this string to hash tag')); // Returns: [ '#convert', '#string', '#tag' ]
```

### isEmpty(str)

The `isEmpty` function returns `true` if the given string is empty or contains only whitespace. It trims the input string to remove leading and trailing spaces, and then checks if the resulting string is empty. Additionally, it iterates through the trimmed string and checks if each character is a newline, carriage return, or tab character. If none of these conditions are met, the function returns `false`.

**Example:**
```javascript
console.log(isEmpty('     ')); // Returns: true
console.log(isEmpty('   hello   ')); // Returns: false
```
