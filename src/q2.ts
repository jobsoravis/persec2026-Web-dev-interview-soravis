export function sortAlphanumeric(arr: string[]): string[] {
    return [...arr].sort((a, b) =>
        a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
    );
}

// console.log(sortAlphanumeric(['test22', 'test12', 'testq21'])); // Output: ['test12', 'test22', 'testq21']
// console.log(sortAlphanumeric(['9', '2', '3'])); // Output: ['2', '3', '9']