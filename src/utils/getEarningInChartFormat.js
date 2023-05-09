export const getEarningInChartFormat = obj => {
    const result = [];

    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const key in obj) {
        const earn = obj[key];
        const date = new Date(key).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
        });

        result.push({ earn, date });
    }

    return result;
};
