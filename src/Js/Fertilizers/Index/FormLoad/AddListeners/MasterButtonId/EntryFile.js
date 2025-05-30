import { StartFunc as StartFuncToLocalStorage } from "./FetchFucs/EntryFile.js";

let StartFunc = () => {
    let jVarLocalMasterButtonId = "MasterButtonId";
    let jVarLocalHtmlId = document.getElementById(jVarLocalMasterButtonId);

    jVarLocalHtmlId.addEventListener("click", () => {
        StartFuncToLocalStorage();
    });
};

export { StartFunc }