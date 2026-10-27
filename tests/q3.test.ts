import { autocomplete } from '../src/q3';

describe('Q3: Autocomplete', () => {
    test('should match the example given in the problem statement', () => {
        const items = ["Mother", "Think", "Worthy", "Apple", "Android"];
        const result = autocomplete("th", items, 2);
        
        console.log('Q3 Result1:', result);
        
        expect(result).toEqual(["Think", "Mother"]);
    });

    test('should return empty array if no matches found', () => {
        const items = ["Apple", "Android", "Banana"];
        const result = autocomplete("th", items, 2);

        console.log('Q3 Result2:', result);
        
        expect(result).toEqual([]);
    });
});
