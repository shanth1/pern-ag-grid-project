export const PassportRender = ({ value }) => {
    return <div>{value.slice(0, 4) + " " + value.slice(4)}</div>;
};
