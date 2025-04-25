import _ from "lodash";

function GetSumByCategory(category) {
    let sum = _(category)
        .groupBy("expense_category")
        .map((obj, key) => {
            return {
                category: key,
                total: _.sumBy(obj, "amount_spent"),
            };
        })
        .value();
    return sum;
}

export default GetSumByCategory;