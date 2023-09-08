export const PassportRender = ({ value }) => {
    if (!value) return <></>;
    return <div>{value.slice(0, 4) + " " + value.slice(4)}</div>;
};
