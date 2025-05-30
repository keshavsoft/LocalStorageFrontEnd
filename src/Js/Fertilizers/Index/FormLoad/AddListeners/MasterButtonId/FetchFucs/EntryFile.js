import { StartFunc as StartFuncCustomerNames } from "./CustomerNames/GetFetch.js";

let StartFunc = () => {
    StartFuncCustomerNames().then(() => {
        jFLocalToDataList();
    });
};

const jFLocalToDataList = () => {
    let jVarLocalCustomersFromLocslstroge = localStorage.getItem("Customers");

    if (jVarLocalCustomersFromLocslstroge === null === false) {
        let LocaCustomerData = JSON.parse(jVarLocalCustomersFromLocslstroge);
        let jVatLocalCustomersDataListId = document.getElementById("CustomersDataListId")
        jVatLocalCustomersDataListId.innerHTML = "";

        LocaCustomerData.forEach(element => {
            let LocalOption = document.createElement("option");
            LocalOption.value = `${element.CUSTOMERNAME}:${element.MOBILE}`
            LocalOption.innerHTML = `${element.CUSTOMERNAME}:${element.MOBILE}`
            jVatLocalCustomersDataListId.appendChild(LocalOption)
        });
    };
};

export { StartFunc }