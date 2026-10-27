import { sortAlphanumeric } from '../src/q2';

describe('Q2: Alphanumeric Sort', () => {
    test('should sort TH and SG strings correctly', () => {
        const input = ["TH19", "SG20", "TH2"];
        const result = sortAlphanumeric(input);
        
        console.log('Result 1 (',input,') : ', result);
        
        expect(result).toEqual(["SG20", "TH2", "TH19"]);
    });

    test('should sort strings with trailing characters correctly', () => {
        const input = ["TH10", "TH3Netflix", "TH1", "TH7"];
        const result = sortAlphanumeric(input);
        
        console.log('Result 2 (',input,') : ', result);
        
        expect(result).toEqual(["TH1", "TH3Netflix", "TH7", "TH10"]);
    });
});
