export const checkRequiredFields = (form) => {
    for (let filed in form) {
        if (!form[filed]) return false;
    }
    return true;
};
