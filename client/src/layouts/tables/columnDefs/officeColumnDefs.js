const Date = ({ value }) => {
    return <div>{value.slice(0, 10)}</div>;
};

export const officeColumnDefs = [
    { field: "country" },
    { field: "city" },
    {
        field: "square",
        comparator: (valueA, valueB) => valueA - valueB,
    },
    {
        field: "squareRentPrice",
        comparator: (valueA, valueB) => valueA - valueB,
    },
    { field: "openingDate", cellRenderer: Date },
    { field: "createdAt", cellRenderer: Date },
];
