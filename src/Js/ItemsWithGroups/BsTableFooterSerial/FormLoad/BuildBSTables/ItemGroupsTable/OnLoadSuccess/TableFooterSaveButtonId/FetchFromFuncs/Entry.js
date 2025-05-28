import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async (event) => {
    let jVarLocalDataNeeded = await StartFuncFetchFuncs(event);

    if (jVarLocalDataNeeded === true) {
        StartFuncAfterFetch();
    };
};

export { StartFunc }