// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
//isPhoneNumber
test('checks if 90922707221 is phone number', () => {
    expect(functions.isPhoneNumber('909-273-7221')).toBe(true);
});
test('checks if 6264299311 is phone number', () => {
    expect(functions.isPhoneNumber('626-489-9311')).toBe(true);
});
test('checks if 1 is phone number', () => {
    expect(functions.isPhoneNumber('1')).toBe(false);
});
test('checks if 0 is phone number', () => {
    expect(functions.isPhoneNumber('0')).toBe(false);
});

//isEmail
test('checks if shantelle@gmail.com is email', () => {
    expect(functions.isEmail('shantelle@gmail.com')).toBe(true);
});
test('checks if shantelle@yahoo.com is email', () => {
    expect(functions.isEmail('shantelle@yahoo.com')).toBe(true);
});
test('checks if email is email', () => {
    expect(functions.isEmail('email')).toBe(false);
});
test('checks if "" is email', () => {
    expect(functions.isEmail('')).toBe(false);
});

//isStrongPassword
/**
 * The password's first character must be a letter,
 * it must contain at least * 4 characters and no more than 15 characters
 * and no characters other than * * letters, numbers and the underscore may be used
 */

test('check if shan is strong password', () => {
    expect(functions.isStrongPassword('shan')).toBe(true);
});
test('check if megan_ is strong password', () => {
    expect(functions.isStrongPassword('megan_')).toBe(true);
});
test('check if 9$ is strong password', () => {
    expect(functions.isStrongPassword('9$')).toBe(false);
});
test('check if shan is strong password', () => {
    expect(functions.isStrongPassword('jfdk;afjdkla;jfdsla;fjkdsla;jfkdlaj;fdlsajfdkalsjfkl;ads')).toBe(false);
});

//isDate
test('check if 02/21/2001 is date', () => {
    expect(functions.isDate('02/21/2001')).toBe(true);
});
test('check if 2/2/2001 is date', () => {
    expect(functions.isDate('2/2/2001')).toBe(true);
});
test('check if 2001/21/02 is date', () => {
    expect(functions.isDate('2001/21/02')).toBe(false);
});
test('check if 00/0000/00000 is date', () => {
    expect(functions.isDate('00/0000/00000')).toBe(false);
});

//isHexColor
test('check if is hex color', () => {
    expect(functions.isHexColor('5c5647')).toBe(true);
});
test('check if is hex color', () => {
    expect(functions.isHexColor('9e2435')).toBe(true);
});
test('check if is hex color', () => {
    expect(functions.isHexColor('9e243556')).toBe(false);
});
test('check if is hex color', () => {
    expect(functions.isHexColor('5c564777')).toBe(false);
});
