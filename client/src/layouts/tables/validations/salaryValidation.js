export const checkSalary = (salaryValue) => {
    const salary = Number(salaryValue);
    if (salary <= 0 && salaryValue !== "") return false;
    if (salary >= 1000000) return false;
    if (!/^\d+$/.test(salaryValue) && salaryValue !== "") return false;
    return true;
};
