import { StartFunc as Status200 } from "./status200.js";
import { StartFunc as Status409 } from "./status409.js";

let StartFunc = async ({ inResponse }) => {
    let jVarLocalResponse = await inResponse;

    if (jVarLocalResponse) {
        Status200({ inResponseAsJson: jVarLocalResponse });
    };

    if (!jVarLocalResponse) {
        Status409({ inResponse: jVarLocalResponse });
    };
};

export { StartFunc };