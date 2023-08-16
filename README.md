# String Manipulation Utility Functions

This repository contains a collection of utility functions for manipulating strings in various formats. These functions are designed to make it easier to work with strings by performing actions such as capitalization, removing spaces, and transforming strings into different naming conventions.

## Functions

### capitalize(str)

This function takes a string as input and returns the same string with the first character capitalized while keeping the rest of the characters unchanged.

### allCaps(str)

This function converts all characters in the input string to uppercase.

### capitalizeWords(str)

The `capitalizeWords` function capitalizes the first character of each word in the input string. Words are separated by spaces.

### removeExtraSpaces(str)

`removeExtraSpaces` removes any leading, trailing, or extra spaces within the input string, ensuring that there is only one space between words.

### kebabCase(str)

The `kebabCase` function converts the input string into kebab-case format. It removes extra spaces, replaces spaces with hyphens, and converts all characters to lowercase.

### snakeCase(str)

`snakeCase` transforms the input string into snake_case format. It removes extra spaces, replaces spaces with underscores, and converts all characters to lowercase.

### camelCase(str)

The `camelCase` function converts the input string into camelCase format. It removes extra spaces, lowercase the first character of the first word, and capitalizes the first character of each subsequent word, with no spaces between words.

### shift(str, number)

This function takes two arguments: a string (`str`) and a number (`number`). It shifts the specified number of characters from the beginning of the string to the end, resulting in a modified string.

### makeHashTag(str)

`makeHashTag` is intended to convert the given string into a hash tag format. 

## Example Usage

```javascript

```
