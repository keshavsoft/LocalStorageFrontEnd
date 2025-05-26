import { StartFunc as StartFuncCheckFunc } from "./CheckFunc.js";
import { StartFunc as StartFuncFetchFromFuncs } from "./FetchFromFuncs/Entry.js";

const StartFunc = (event) => {
    if (StartFuncCheckFunc()) {
        StartFuncFetchFromFuncs(event);
    };
};

export { StartFunc };
