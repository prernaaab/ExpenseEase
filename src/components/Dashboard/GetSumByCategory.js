import _ from "lodash";

function GetSumByCategory(category) {
    let sum = _(category)
        .groupBy("SelectCatagory")
        .map((obj, key) => {
            return {
                category: key,
                total: _.sumBy(obj, "AmountSpend"),
            };
        })
        .value();
    return sum;
}

export default GetSumByCategory;