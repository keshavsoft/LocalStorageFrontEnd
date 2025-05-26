import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async (event) => {
    let jVarLocalDataNeeded = await StartFuncFetchFuncs(event);
   
    if (jVarLocalDataNeeded.status === 200) {
        StartFuncAfterFetch();
    };
};

export { StartFunc }