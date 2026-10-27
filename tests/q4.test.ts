import { intToRoman, romanToInt } from '../src/q4';

describe('Q4: Modern Roman Numerals', () => {
    describe('intToRoman (Int to String)', () => {
        test('1989 should return MCMLXXXIX', () => {
            console.log('Q4 Result1:', intToRoman(1989));
            expect(intToRoman(1989)).toBe('MCMLXXXIX');
        });
        test('2000 should return MM', () => {
            console.log('Q4 Result2:', intToRoman(2000));
            expect(intToRoman(2000)).toBe('MM');
        });
        test('68 should return LXVIII', () => {
            console.log('Q4 Result3:', intToRoman(68));
            expect(intToRoman(68)).toBe('LXVIII');
        });
        test('109 should return CIX', () => {
            console.log('Q4 Result4:', intToRoman(109));
            expect(intToRoman(109)).toBe('CIX');
        });
    });

    describe('romanToInt (String to Int)', () => {
        test('MCMLXXXIX should return 1989', () => {
            console.log('Q4 Result5:', romanToInt('MCMLXXXIX'));
            expect(romanToInt('MCMLXXXIX')).toBe(1989);
        });
        test('MM should return 2000', () => {
            console.log('Q4 Result6:', romanToInt('MM'));
            expect(romanToInt('MM')).toBe(2000);
        });
        test('LXVIII should return 68', () => {
            console.log('Q4 Result7:', romanToInt('LXVIII'));
            expect(romanToInt('LXVIII')).toBe(68);
        });
        test('CIX should return 109', () => {
            console.log('Q4 Result8:', romanToInt('CIX'));
            expect(romanToInt('CIX')).toBe(109);
        });
    });
});
