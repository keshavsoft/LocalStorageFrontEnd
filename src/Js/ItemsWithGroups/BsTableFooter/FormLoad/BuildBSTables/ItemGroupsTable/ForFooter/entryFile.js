import { StartFunc as StartFuncFromForEachColumn } from "./forEachColumn.js";
import { StartFunc as StartFuncFromForButtonSave } from "./forButtonSave.js";

const StartFunc = ({ inColumns }) => {
    inColumns.forEach(element => {
        switch (element.footerFormatter) {
            case "Button:Save":
                StartFuncFromForButtonSave({ inColumn: element });
                break;

            default:
                StartFuncFromForEachColumn({ inColumn: element });
                break;
        };

    });
};

export { StartFunc };
