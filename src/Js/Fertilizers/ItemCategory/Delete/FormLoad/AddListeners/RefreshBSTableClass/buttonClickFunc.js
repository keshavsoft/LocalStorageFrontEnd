import { StartFunc as StartFuncFetchAsGet } from "./FromLocalStorage/entryFile.js";

let StartFunc = async () => {
    StartFuncFetchAsGet().then((inData) => { });
};

export { StartFunc };