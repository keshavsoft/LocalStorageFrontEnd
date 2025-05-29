import ConfigJson from '../../../../config.json' with {type: 'json'};

let StartFunc = async ({ inRowPk }) => {
    
    let jVarLocalFetchUrl = ConfigJson.TableName;

    let getData = localStorage.getItem(jVarLocalFetchUrl);

    let parsedData = JSON.parse(getData);

    const LocalFindIndex = parsedData.findIndex(e => e.pk === parseInt(inRowPk));

    parsedData.splice(LocalFindIndex, 1);
    
    localStorage.setItem(jVarLocalFetchUrl, JSON.stringify(parsedData));

    return true;
};

export { StartFunc };
