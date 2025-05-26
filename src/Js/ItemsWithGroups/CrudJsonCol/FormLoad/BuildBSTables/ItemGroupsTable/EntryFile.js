import { StartFunc as StartFuncOnLoadSuccess } from "./OnLoadSuccess/EntryFile.js";
import optionsJson from './options.json' with {type: 'json'};

const StartFunc = () => {
    var $table = $('#table');
    const LocaloptionsJson = optionsJson;

    LocaloptionsJson.data = [];
    LocaloptionsJson.onPostBody = () => {
        StartFuncOnLoadSuccess();
        $("#TableFooterItemNameInputId").focus();
    };

    $table.bootstrapTable(LocaloptionsJson);
};

export { StartFunc };
