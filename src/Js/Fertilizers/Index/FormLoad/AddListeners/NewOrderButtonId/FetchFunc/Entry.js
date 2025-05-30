import { StartFunc as StartFuncFetchFuncs } from "./PostFetch.js";

import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";
// import { StartFunc as Status500File } from "./AfterFetch/Status500File.js";

let StartFunc = async () => {
    let jVarLocalDataNeeded = await StartFuncFetchFuncs();
    if (jVarLocalDataNeeded) {
        StartFuncAfterFetch();
    };

    // if (jVarLocalDataNeeded) {
    //     Status500File({ inresponse: await jVarLocalDataNeeded.text() });
    // };
};

export { StartFunc }