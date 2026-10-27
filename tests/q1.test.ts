import { isValidParentheses } from '../src/q1';

describe('Valid Parentheses Checker', () => {
    test('"()" should return true', () => {
        const result1 = isValidParentheses("()");
        console.log('Result 1 () :', result1);
        expect(result1).toBe(true);
    });

    test('"([)]" should return false', () => {
        const result2 = isValidParentheses("([)]");
        console.log('Result 2 ([)] :', result2);
        expect(result2).toBe(false);
    });

    test('"({[]})" should return true', () => {
        const result3 = isValidParentheses("({[]})");
        console.log('Result 3 ({[]}) :', result3);
        expect(result3).toBe(true);
    });

    test('"([{}])]" should return false', () => {
        const result4 = isValidParentheses("([{}])]");
        console.log('Result 4 ([{}])] :', result4);
        expect(result4).toBe(false);
    });

    test('")" should return false', () => {
        const result5 = isValidParentheses(")");
        console.log('Result 5 ) :', result5);
        expect(result5).toBe(false);
    });

    test('"(]})" should return false', () => {
        const result6 = isValidParentheses("(]})");
        console.log('Result 6 (]}) :', result6);
        expect(result6).toBe(false);
    });

    test('"([)]" should return false', () => {
        const result7 = isValidParentheses("([)]");
        console.log('Result 7 ([)] :', result7);
        expect(result7).toBe(false);
    });

    test('"{" should return false', () => {
        const result8 = isValidParentheses("{");
        console.log('Result 8 { :', result8);
        expect(result8).toBe(false);
    });
});
