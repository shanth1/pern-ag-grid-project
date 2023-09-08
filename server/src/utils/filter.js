const getFilterSymbol = (type) => {
    switch (type) {
        case "equals":
            return "=";
        case "lessThanOrEqual":
            return "<=";
        case "greaterThanOrEqual":
            return ">=";
        default:
            return "";
    }
};

const getFilterString = (filterModel) => {
    return filterModel
        ? `WHERE ${Object.keys(filterModel)
              .map((key) => {
                  const type = filterModel[key].type;
                  const filter = filterModel[key].filter;
                  const compare =
                      type === "contains" ? "LIKE" : getFilterSymbol(type);
                  switch (filterModel[key].filterType) {
                      case "text":
                          return `"${key}" ${compare} '%${filter}%'`;
                      case "number":
                          return `"${key}" ${compare} ${filter}`;
                      case "date":
                          return `"${key}" ${compare} '${filterModel[
                              key
                          ].dateFrom.slice(0, 10)}'`;
                      default:
                          return "";
                  }
              })
              .join(" AND ")}`
        : "";
};

module.exports = { getFilterString };
