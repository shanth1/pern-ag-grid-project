const validateEmployeeRequest = (requestBody) => {
    const errors = [];
    const {
        firstName,
        lastName,
        gender,
        birthday,
        position,
        salary,
        passport,
        officeId,
    } = requestBody;

    if (
        !firstName ||
        !lastName ||
        !gender ||
        !birthday ||
        !position ||
        !salary ||
        !passport ||
        !officeId
    ) {
        errors.push("Incomplete request information");
    } else {
        if (typeof firstName !== "string") {
            errors.push("incorrect type for firstName");
        }
        if (typeof lastName !== "string") {
            errors.push("incorrect type for lastName");
        }
        if (gender !== "male" && gender !== "female") {
            errors.push("incorrect value for gender");
        }
        if (!/^\d\d\d\d-\d{1,2}-\d{1,2}$/.test(birthday)) {
            errors.push("incorrect value for birthday");
        }
        if (
            position !== "director" &&
            position !== "projectManager" &&
            position !== "analytic" &&
            position !== "designer" &&
            position !== "teamLeader" &&
            position !== "seniorDeveloper" &&
            position !== "middleDeveloper" &&
            position !== "juniorDeveloper"
        ) {
            errors.push("incorrect value for position");
        }
        if (!Number(salary)) {
            errors.push("incorrect value for salary");
        }
        if (!Number(passport) || !/^.{10}$/.test(passport)) {
            errors.push("incorrect value for passport");
        }
    }

    return {
        errors,
        employee: {
            firstName,
            lastName,
            gender,
            birthday,
            position,
            salary,
            passport,
            officeId,
        },
    };
};

module.exports = { validateEmployeeRequest };
