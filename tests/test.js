const { capitalize, allCaps, capitalizeWords, capitalizeHeadlines, removeExtraSpaces, kebobCase, snakeCase, camelCase, shift, makeHashTag, isEmpty } = require('../src/index.js');

test('captialize makes the first character of a given string uppercase', () => {
    expect(capitalize('hello world')).toBe('Hello world');
    expect(capitalize('hi laurel')).toBe('Hi laurel');
    expect(capitalize('javascript')).not.toBe('javascript');
});

test('allCaps makes all characters uppercase', () => {
    expect(allCaps('my name is laurel')).toBe('MY NAME IS LAUREL');
    expect(allCaps('hello World')).toBe('HELLO WORLD');
});

test('capitalizeWords makes the first character of each word uppercase', () => {
    expect(capitalizeWords('how are you doing')).toBe('How Are You Doing');
    expect(capitalizeWords('writing unit tests')).toBe('Writing Unit Tests');
});

test('capitalizeHeadlines uses proper title case', () => {
    expect(capitalizeHeadlines('the best dog a boy could have')).toBe('The Best Dog a Boy Could Have');
    expect(capitalizeHeadlines('from the bottom of my heart')).toBe('From the Bottom Of My Heart');
});

test('removeExtraSpaces removes all extra space from beginning, middle, and end of a string', () => {
    expect(removeExtraSpaces('  hello   world   ')).toBe('hello world');
    expect(removeExtraSpaces('extra       space')).toBe('extra space');
});

test('kebobCase replaces spaces with the hyphen "-", and makes all characters lowercase', () => {
    expect(kebobCase('This IS Kebob Case')).toBe('this-is-kebob-case');
    expect(kebobCase('hi laurel')).toBe('hi-laurel');
});

test('snakeCase replaces spaces with the underscore "_", and makes all characters lowercase', () => {
    expect(snakeCase('This IS Snake Case')).toBe('this_is_snake_case');
    expect(snakeCase('HI LAUREL')).toBe('hi_laurel');
});


test('camelCase lowercases first word and uppercases others', () => {
    expect(camelCase('This is camel    case')).toBe('thisIsCamelCase');
    expect(camelCase('Hi LAUREL')).toBe('hiLaurel');
});

test('shift takes the specified number of characters and move to the end', () => {
    expect(shift('Hello World', 3)).toBe('lo WorldHel');
    expect(shift('Hi Laurel', 1)).toBe('i LaurelH');
});

test('shift defaults to 1 if no number param is given', () => {
    expect(shift('Hello World')).toBe('ello WorldH');
    expect(shift('writing unit tests')).toBe('riting unit testsw');
});

test('makeHashTag converts string to hashtag', () => {
    expect(makeHashTag('Hello World')).toStrictEqual(['#hello', '#world']);
    expect(makeHashTag('Hi LAUREL')).toStrictEqual(['#hi', '#laurel']);
});

test('makeHashTag only converts three longest words to hashtag', () => {
    expect(makeHashTag('Writing unit tests is fun')).toStrictEqual(['#writing', '#tests', '#unit']);
    expect(makeHashTag('Have A Good Day')).toStrictEqual(['#have', '#good', '#day']);
});

test('isEmpty returns `true` if the given string is empt', () => {
    expect(isEmpty('Hello World')).toBe(false);
    expect(isEmpty('    hi laurel  ')).toBe(false);
    expect(isEmpty('     ')).toBe(true);
    expect(isEmpty('  \n   ')).toBe(true);
    expect(isEmpty('\n\t\r')).toBe(true);
});