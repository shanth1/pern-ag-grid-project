const Date = ({ value }) => {
    return <div>{value.slice(0, 10)}</div>;
};

const Passport = ({ value }) => {
    return <div>{value.slice(0, 4) + " " + value.slice(4)}</div>;
};

const Gender = ({ value }) => {
    let gender = "";
    switch (value) {
        case "male":
            gender = "👨🏻‍🦰 Male";
            break;
        case "female":
            gender = "👩🏼 Female";
            break;
        default:
            break;
    }
    return <div>{gender}</div>;
};

const Salary = ({ value }) => {
    return <div>{value} ₽</div>;
};

const Position = ({ value }) => {
    let position = "";
    switch (value) {
        case "director":
            position = "Director";
            break;
        case "projectManager":
            position = "Project Manager";
            break;
        case "analytic":
            position = "Analytic";
            break;
        case "designer":
            position = "Designer";
            break;
        case "teamLeader":
            position = "Team Leader";
            break;
        case "seniorDeveloper":
            position = "Senior Developer";
            break;
        case "middleDeveloper":
            position = "Middle Developer";
            break;
        case "juniorDeveloper":
            position = "Junior Developer";
            break;
        default:
            break;
    }
    return <div>{position}</div>;
};

export const employeeColumnDefs = [
    { field: "firstName" },
    { field: "lastName" },
    {
        field: "gender",
        sortable: false,
        comparator: (valueA, valueB) => valueA - valueB,
        cellRenderer: Gender,
    },
    { field: "position", sortable: false, cellRenderer: Position },
    {
        field: "salary",
        comparator: (valueA, valueB) => valueA - valueB,
        cellRenderer: Salary,
    },
    { field: "birthday", cellRenderer: Date },
    { field: "passport", sortable: false, cellRenderer: Passport },
];
