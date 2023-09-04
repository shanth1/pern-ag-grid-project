export const dateComparator = (dateFromFilter, cellValue) => {
    const dateParts = cellValue.slice(0, 10).split("-");

    const day = Number(dateParts[2]);
    const month = Number(dateParts[1]) - 1;
    const year = Number(dateParts[0]);

    const cellDate = new Date(year, month, day);
    if (cellDate < dateFromFilter) {
        return -1;
    } else if (cellDate > dateFromFilter) {
        return 1;
    }
    return 0;
};
