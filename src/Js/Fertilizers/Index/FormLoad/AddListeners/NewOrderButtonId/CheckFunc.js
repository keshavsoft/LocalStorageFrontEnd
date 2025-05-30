// Entry point: Validates input and checks against localStorage
let StartFunc = async () => {
    let jvarLocalCustomerNameInputElem = document.getElementById("CustomerNameInputId");

    if (jvarLocalCustomerNameInputElem.value === "") {
        jvarLocalCustomerNameInputElem.classList.add("is-invalid");
        return false;
    }

    let isValid = await LocalFetchFunc(jvarLocalCustomerNameInputElem.value);
    console.log('Local Data Valid:', isValid);

    if (!isValid) {
        jvarLocalCustomerNameInputElem.classList.add("is-invalid");
        return false;
    }

    return true;
};

// Validates whether customer exists in localStorage
const LocalFetchFunc = async (inputValue) => {
    let parts = inputValue.split(":");
    if (parts.length !== 2) {
        console.log("Invalid input format. Expected 'Name:Mobile'");
        return false;
    }

    let inputCustomerName = parts[0].trim();
    let inputMobile = parts[1].trim();

    let localData = localStorage.getItem("customers");
    if (!localData) {
        console.log("No local data found");
        return false;
    }

    let customersArray = JSON.parse(localData);

    let found = customersArray.find(customer =>
        customer.CUSTOMERNAME === inputCustomerName &&
        customer.MOBILE === inputMobile
    );

    console.log("Found:", found);
    return !!found;
};

// Dynamically adds a customer to localStorage
const AddCustomerToLocalStorage = (newCustomer) => {
    let existingData = localStorage.getItem("customers");
    let customersArray = [];

    if (existingData) {
        customersArray = JSON.parse(existingData);
    }

    customersArray.push(newCustomer);
    localStorage.setItem("customers", JSON.stringify(customersArray));
};

export { StartFunc, AddCustomerToLocalStorage };
