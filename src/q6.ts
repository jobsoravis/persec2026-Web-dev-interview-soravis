export function tribonacci(signature: number[], n: number): number[] {
    if (n === 0) return [];
    if (n <= 3) return signature.slice(0, n);

    const result = [...signature];
    for (let i = 3; i < n; i++) {
        result[i] = result[i - 1]! + result[i - 2]! + result[i - 3]!;
    }
    return result;
}

// console.log(tribonacci([1, 3, 5], 5));
// console.log(tribonacci([2, 2, 2], 3)); 
// console.log(tribonacci([10, 10, 10], 4));