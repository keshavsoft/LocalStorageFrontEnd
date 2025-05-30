import ConfigJson from '../../Url.json' with {type: 'json'};

let StartFunc = () => {
    let customerValue = jFLocalCustomerNameInputId();

    let parts = customerValue.split(":");

    let jVarLocalMobileNumber = parts[1].trim();

    let redirectUrl = `${ConfigJson.RedirectUrl.Status200}?Mobile=${jVarLocalMobileNumber}`;

    window.location = redirectUrl;
};

let jFLocalCustomerNameInputId = () => {
    let jVarLocalCustomerNameInputId = 'CustomerNameInputId';
    let jVarLocalHtmlId = document.getElementById(jVarLocalCustomerNameInputId);

    if (jVarLocalHtmlId !== null) {
        return jVarLocalHtmlId.value.trim();
    } else {
        return null;
    }
};

export { StartFunc };
