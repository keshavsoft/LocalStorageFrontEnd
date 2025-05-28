import optionsJson from './options.json' with {type: 'json'};
import { StartFunc as ForColumns } from "./ForColumns/EntryFile.js";

const $table = $('#table');

const StartFunc = ({ inResponseAsJson }) => {
    optionsJson.data = inResponseAsJson;

    ForColumns({ inColumns: optionsJson.columns });
    jFLocalPrepareColumns({ inFirstRow: inResponseAsJson[0] });

    $table.bootstrapTable(optionsJson);
};

const jFLocalPrepareColumns = ({ inFirstRow }) => {
    const excludedKeys = ["UuId", "DateTime", "pk"]; // Add 'pk' to excluded list

    if (!Array.isArray(optionsJson.columns)) {
        optionsJson.columns = [];
    }

    Object.keys(inFirstRow).forEach((inKey) => {
        if (!excludedKeys.includes(inKey)) {
            optionsJson.columns.push({ 
                field: inKey, 
                title: inKey 
            });
        }
    });
};

export { StartFunc };

