export const GenderRender = ({ value }) => {
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
