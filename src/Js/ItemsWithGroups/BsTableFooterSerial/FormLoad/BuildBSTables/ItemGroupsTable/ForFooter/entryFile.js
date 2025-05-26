import { StartFunc as StartFuncFromForEachColumn } from "./forEachColumn.js";
import { StartFunc as StartFuncFromForButtonSave } from "./forButtonSave.js";
import { StartFunc as StartFuncFromForSerialColumn } from "./forSerialColumn.js";
import ActionsFormatter from './actionFormmater.js';

const StartFunc = ({ inColumns }) => {
    inColumns.forEach(element => {
        // Handle footer
        if (element.formatter !== "Number:Serial") {
            switch (element.footerFormatter) {
                case "Button:Save":
                    StartFuncFromForButtonSave({ inColumn: element });
                    break;
                default:
                    StartFuncFromForEachColumn({ inColumn: element });
                    break;
            }
        }

        switch (element.formatter) {
            case "Number:Serial":
                StartFuncFromForSerialColumn({ inColumn: element });
                break;
            case "actions":
                element.formatter = ActionsFormatter;
                break;
            default:
                console.warn(`No formatter found for ${element.formatter} in ItemGroupsTable`);
                break;
        }
    });
};

export { StartFunc };
