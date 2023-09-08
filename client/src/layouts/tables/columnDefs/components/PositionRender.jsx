export const PositionRender = ({ value }) => {
    if (!value) return <></>;
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
