import { tribonacci } from '../src/q6';

describe('Q6: Tribonacci Sequence', () => {
    test('f([1, 3, 5], 5) should return [1, 3, 5, 9, 17]', () => {
        console.log('Q6 Result1:', tribonacci([1, 3, 5], 5));
        expect(tribonacci([1, 3, 5], 5)).toEqual([1, 3, 5, 9, 17]);
    });

    test('f([2, 2, 2], 3) should return [2, 2, 2]', () => {
        console.log('Q6 Result2:', tribonacci([2, 2, 2], 3));
        expect(tribonacci([2, 2, 2], 3)).toEqual([2, 2, 2]);
    });

    test('f([10, 10, 10], 4) should return [10, 10, 10, 30]', () => {
        console.log('Q6 Result3:', tribonacci([10, 10, 10], 4));
        expect(tribonacci([10, 10, 10], 4)).toEqual([10, 10, 10, 30]);
    });

    test('should handle n = 0 correctly', () => {
        console.log('Q6 Result4:', tribonacci([1, 1, 1], 0));
        expect(tribonacci([1, 1, 1], 0)).toEqual([]);
    });

    test('should handle n smaller than signature length', () => {
        console.log('Q6 Result5:', tribonacci([1, 3, 5], 2));
        expect(tribonacci([1, 3, 5], 2)).toEqual([1, 3]);
    });
});
