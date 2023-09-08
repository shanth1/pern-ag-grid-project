export const MoneyRender = ({ value }) => {
    if (!value) return <></>;
    return <div>{value} ₽</div>;
};
