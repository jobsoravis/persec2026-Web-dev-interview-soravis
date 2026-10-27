export function autocomplete(search: string, items: string[], maxResult: number): string[] {
    const lowerSearch = search.toLowerCase();
    const filteredItems = items.filter(item => item.toLowerCase().includes(lowerSearch));

    filteredItems.sort((a, b) => {
        const aLower = a.toLowerCase();
        const bLower = b.toLowerCase();

        const aIndex = aLower.indexOf(lowerSearch);
        const bIndex = bLower.indexOf(lowerSearch);

        if (aIndex === 0 && bIndex !== 0) return -1; // a starts with search, b doesn't
        if (aIndex !== 0 && bIndex === 0) return 1;  // b starts with search, a doesn't

        if (aIndex > 0 && bIndex > 0) {
            if (aIndex < bIndex) return -1; // a has search earlier than b
            if (aIndex > bIndex) return 1;  // b has search earlier than a
        }

        return a.localeCompare(b); // fallback to alphabetical order

    });

    return filteredItems.slice(0, maxResult);
}

// console.log(autocomplete('ap', ['apple', 'banana', 'grape', 'apricot'], 2));
// console.log(autocomplete('an', ['banana', 'mango', 'orange'], 3));