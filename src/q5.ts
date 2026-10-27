export function sortDigitsDescending(num: number): number {
    const sortedDigits = num
        .toString()
        .split('')
        .sort((a, b) => parseInt(b) - parseInt(a))
        .join('');
    return parseInt(sortedDigits);
}

// console.log(sortDigitsDescending(42145));
// console.log(sortDigitsDescending(145263));
// console.log(sortDigitsDescending(123456789));