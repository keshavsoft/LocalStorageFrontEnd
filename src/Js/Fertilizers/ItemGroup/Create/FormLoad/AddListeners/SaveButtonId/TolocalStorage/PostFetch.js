import ConfigJson from '../../../../config.json' with {type: 'json'};
import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/entryFile.js";

let StartFunc = async () => {
    let LocalTableName = ConfigJson.TableName;
    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    let LocalReturnData = { KTF: false };
    let LocalData = localStorage.getItem(LocalTableName);

    if (!LocalData) {
        let LocalRes = jfLocalNewDataInsert({ inData: jVarLocalFetchHeaders, inTable: LocalTableName });
        LocalReturnData.KTF = true;
        LocalReturnData.pk = LocalRes;
        return LocalReturnData
    };

    let LocalRes = jfLocalUpdata({ inTable: LocalTableName, inData: LocalData, inUpdateData: jVarLocalFetchHeaders });
    LocalReturnData.KTF = true;
    LocalReturnData.pk = LocalRes;
    return LocalReturnData
};

const jfLocalNewDataInsert = ({ inData, inTable }) => {
    let LocalnewData = { ...inData, pk: 1, DateTime: new Date() };
    localStorage.setItem(inTable, JSON.stringify([LocalnewData]));

    return LocalnewData.pk;
};

const jfLocalUpdata = ({ inTable, inData, inUpdateData }) => {
    const parsedData = JSON.parse(inData);
    let LocalPk = parsedData.map(ele => ele.pk);
    let MaxPk = Math.max(...LocalPk) + 1;
    let LocalnewData = { ...inUpdateData, pk: MaxPk, DateTime: new Date() };

    parsedData.push(LocalnewData);
    localStorage.setItem(inTable, JSON.stringify(parsedData));
    return MaxPk
};



export { StartFunc };

