import ConfigJson from '../../../../config.json' with { type: 'json' };
import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/entryFile.js";

let StartFunc = async () => {
    let LocalTableName = ConfigJson.TableName;
    let jVarLocalFetchHeaders = StartFuncFetchHeaders();

    let LocalReturnData = { KTF: false };

    let jVarLocalQueryParams = getUrlQueryParams({ inGetKey: "pk" });

    let LocalData = localStorage.getItem(LocalTableName);

    if (!LocalData) {
        LocalReturnData.Reason = "No data available to update";
        return LocalReturnData;
    }

    let parsedData = JSON.parse(LocalData);

    let rowIndex = parsedData.findIndex(item => item.pk == jVarLocalQueryParams);

    if (rowIndex === -1) {
        LocalReturnData.Reason = "Record with provided pk not found";
        return LocalReturnData;
    }

    parsedData[rowIndex] = {
        ...parsedData[rowIndex],
        ...jVarLocalFetchHeaders,
        DateTime: new Date()
    };

    localStorage.setItem(LocalTableName, JSON.stringify(parsedData));

    LocalReturnData.KTF = true;
    LocalReturnData.pk = jVarLocalFetchHeaders.pk;

    return LocalReturnData;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};
export { StartFunc };
