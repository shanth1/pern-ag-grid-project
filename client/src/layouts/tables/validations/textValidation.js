export const checkText = (text) =>
    /^[A-Za-zА-Яа-я]+$/.test(text) || text === "";
