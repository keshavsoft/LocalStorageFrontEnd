import KeysJson from './Keys.json' with { type: 'json' };
import { StartFunc as StartFuncPrepareBody } from "./PrepareBody.js";

let StartFunc = (event) => {
    KeysJson.body = JSON.stringify(StartFuncPrepareBody(event));
    return KeysJson;
};

export { StartFunc };
