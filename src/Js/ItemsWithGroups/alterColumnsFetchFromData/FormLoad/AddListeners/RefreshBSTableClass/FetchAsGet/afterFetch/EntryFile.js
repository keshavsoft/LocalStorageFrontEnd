import { StartFunc as Status200 } from "./status200.js";
import { StartFunc as Status500 } from "./status500.js";

let StartFunc = async({ inResponse }) => {
    let jVarLocalResponse = await inResponse;

    if (jVarLocalResponse) {
        Status200({ inResponseAsJson: jVarLocalResponse });
    };

    if (!jVarLocalResponse) {
        Status500({ inResponse: jVarLocalResponse });
    };
};

export { StartFunc };