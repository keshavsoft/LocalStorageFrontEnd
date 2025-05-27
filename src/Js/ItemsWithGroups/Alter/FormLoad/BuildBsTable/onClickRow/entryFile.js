import { StartFunc as StartFuncNav } from "./Nav/entryFile.js";
const StartFunc = (row, $element, field) => {
        console.log(row);
        
    if (field === "Alter") {
        StartFuncNav({ inRowpk: row.pk });
    };
};

export { StartFunc };