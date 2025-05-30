import { StartFunc as SaveButtonId } from "./SaveButtonId/entryFile.js";
import { StartFunc as MasterButtonId } from "./MasterButtonId/EntryFile.js";
import { StartFunc as NewOrderButtonId } from "./NewOrderButtonId/EntryFile.js";

let StartFunc = () => {
    SaveButtonId();
    MasterButtonId();
    NewOrderButtonId();
};

export { StartFunc }