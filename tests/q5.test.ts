import { sortDigitsDescending } from '../src/q5';

describe('Q5: Sort Digits Descending', () => {
    test('3008 should return 8300', () => {
        console.log('Q5 Result1:', sortDigitsDescending(3008));
        expect(sortDigitsDescending(3008)).toBe(8300); //[span_2](start_span)[span_2](end_span)
    });

    test('1989 should return 9981', () => {
        console.log('Q5 Result2:', sortDigitsDescending(1989));
        expect(sortDigitsDescending(1989)).toBe(9981); //[span_3](start_span)[span_3](end_span)
    });

    test('2679 should return 9762', () => {
        console.log('Q5 Result3:', sortDigitsDescending(2679));
        expect(sortDigitsDescending(2679)).toBe(9762); //[span_4](start_span)[span_4](end_span)
    });

    test('9163 should return 9631', () => {
        console.log('Q5 Result4:', sortDigitsDescending(9163));
        expect(sortDigitsDescending(9163)).toBe(9631); //[span_5](start_span)[span_5](end_span)
    });
});
