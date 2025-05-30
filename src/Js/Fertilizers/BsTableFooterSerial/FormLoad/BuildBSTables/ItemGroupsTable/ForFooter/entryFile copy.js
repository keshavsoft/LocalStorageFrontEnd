import { StartFunc as StartFuncFromForItemName } from "./forItemName.js";
import { StartFunc as StartFuncFromForItemCategory } from "./forItemCategory.js";

const StartFunc = ({ inColumns }) => {
    StartFuncFromForItemName({ inColumns });
    StartFuncFromForItemCategory({ inColumns });
};

export { StartFunc };
