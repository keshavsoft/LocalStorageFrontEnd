const StartFunc = () => {
    let jVarLocalItemName = jFLocalTableFooterItemNameInputId();
    let jVarLocalItemCategory = jVarLocalTableFooterItemCategoryInputId();
    let jVarLocalItemGroup = jFLocalTableFooterItemGroupInputId();

    let LocalObj = {};
    LocalObj.ITEMNAME = jVarLocalItemName;
    LocalObj.ITEMCATEGORY = jVarLocalItemCategory;
    LocalObj.ITEMGROUP = jVarLocalItemGroup;

    return LocalObj;
};

let jFLocalTableFooterItemNameInputId = () => {
    let jVarLocalTableFooterRateInputId = 'TableFooterItemNameInputId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterRateInputId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jVarLocalTableFooterItemCategoryInputId = () => {
    let jVarLocalTableFooterItemCategoryInputId = 'TableFooterItemCategoryInputId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterItemCategoryInputId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};
let jFLocalTableFooterItemGroupInputId = () => {
    let jVarLocalTableFooterItemGroupInputId = 'TableFooterItemGroupInputId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterItemGroupInputId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};
export { StartFunc }