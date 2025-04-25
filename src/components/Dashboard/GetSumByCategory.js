import _ from "lodash";

function GetSumByCategory(category) {
    let sum = _(category)
        .groupBy("expense_category")
        .map((objs, key) => {
            return {
                category: key,
                total: _.sumBy(objs, (o) => parseFloat(o.amount_spent)),
            };
        })
        .value();
    return sum;
}

export default GetSumByCategory;
