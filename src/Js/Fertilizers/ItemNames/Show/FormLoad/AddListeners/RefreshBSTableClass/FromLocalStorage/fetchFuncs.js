import ConfigJson from '../../../../config.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalFetchUrl = ConfigJson.TableName;
    let LocalData = localStorage.getItem(jVarLocalFetchUrl);
    let response = JSON.parse(LocalData);

    return await response;
};

export { StartFunc };

