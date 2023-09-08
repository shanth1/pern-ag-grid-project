export const AreaRender = ({ value }) => {
    if (!value) return <></>;
    return <div>{value} м²</div>;
};
