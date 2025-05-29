import { StartFunc as StartFuncFetchFuncs } from "./postFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/entryFile.js";

let StartFunc = async ({ inRowPk }) => {
    let jVarLocalFetchResponse = await StartFuncFetchFuncs({ inRowPk });

    if (jVarLocalFetchResponse === true) {
        StartFuncAfterFetch();
    };
};

export { StartFunc }