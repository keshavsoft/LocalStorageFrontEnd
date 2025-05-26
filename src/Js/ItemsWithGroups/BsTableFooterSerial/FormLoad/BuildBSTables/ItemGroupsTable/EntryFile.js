import { StartFunc as StartFuncOnLoadSuccess } from "./OnLoadSuccess/EntryFile.js";
import { StartFunc as StartFuncFromForFooter } from "./ForFooter/entryFile.js";
import ConfigJson from './options.json' with {type: 'json'};

const StartFunc = () => {
    var $table = $('#table');
    const LocalConfigJson = ConfigJson;
    // debugger;
    LocalConfigJson.data = [];
    LocalConfigJson.onPostBody = () => {
        StartFuncOnLoadSuccess();
        $("#TableFooterItemNameInputId").focus();
    };

    StartFuncFromForFooter({ inColumns: LocalConfigJson.columns });

    $table.bootstrapTable(LocalConfigJson);
};

export { StartFunc };
