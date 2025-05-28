import { StartFunc as PrepareRequestBody } from "./PrepareBody.js";

let StartFunc = (event) => {
    return PrepareRequestBody(event); 
};

export { StartFunc };
