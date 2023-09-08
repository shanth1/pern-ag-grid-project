export const DateRender = ({ value }) => {
    if (!value) return <></>;
    const dateParts = value.slice(0, 10).split("-");
    const year = dateParts[0];
    const month = dateParts[1];
    const day = dateParts[2];
    return <div>{day + "." + month + "." + year}</div>;
};
