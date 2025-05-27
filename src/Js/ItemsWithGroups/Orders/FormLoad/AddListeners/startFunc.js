import { StartFunc as SaveButtonId } from "./SaveButtonId/entryFile.js";
import { StartFunc as MasterButtonId } from "./MasterButtonId/EntryFile.js";

let StartFunc = () => {
    SaveButtonId();
    MasterButtonId();
};

export { StartFunc }