import { StartFunc as Status200 } from "./status200.js";
import { StartFunc as Status500 } from "./status500.js";

let StartFunc = async ({ inResponse }) => {
    let jVarLocalResponse = await inResponse;

    if (jVarLocalResponse === true) {
        Status200({ inResponse: jVarLocalResponse });
    };

    if (jVarLocalResponse === false) {
        let jVarLocalSavedPk = await jVarLocalResponse.text();
        Status500({ inResponse: jVarLocalSavedPk });
    };
};

export { StartFunc }