import { StartFunc as Status200 } from "./status200.js";
import { StartFunc as Status500 } from "./status500.js";

let StartFunc = async ({ inResponse }) => {
    let jVarLocalResponse = inResponse;

    if (jVarLocalResponse.KTF === true) {
        Status200({ inRowPk: jVarLocalResponse.pk });
    };

    if (jVarLocalResponse.KTF === false) {
        Status500({ inResponse: jVarLocalResponse.pk });
    };
};

export { StartFunc }