import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/entryFile.js";
let StartFunc = async () => {
    let jVarLocalFetchHeaders = StartFuncFetchHeaders();
    
    return await jVarLocalFetchHeaders;
};

export { StartFunc };

