export const checkBirthday = (birthday) => {
    if (
        birthday.includes("NaN") ||
        Number(birthday.split("-")[0]) < 1900 ||
        Number(birthday.split("-")[0]) > 2100
    )
        return false;
    return true;
};
