import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
import ConfigJson from "../../../../../../config.json" with { type: "json" };

let StartFunc = async (event) => {
    let jVarLocalPostUrl = ConfigJson.PostEndPoint;
    let jVarLocalFetchHeaders = StartFuncFetchHeaders(event);
    let jVarLocalFetchUrl = `${jVarLocalPostUrl}`;
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);

    return await response;
};

export { StartFunc };

