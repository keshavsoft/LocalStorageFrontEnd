import ConfigJson from '../../../../config.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalFilterString = getUrlQueryParams({ inGetKey: "pk" });

    let jVarLocalFetchUrl = ConfigJson.TableName;
    let LocalData = localStorage.getItem(jVarLocalFetchUrl);
    let response = JSON.parse(LocalData);

    return await response;

};
let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);


    return value;
};

export { StartFunc };