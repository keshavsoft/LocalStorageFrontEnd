import ConfigJson from '../../../../../config.json' with {type: 'json'};

let StartFunc = () => {
    let jVarLocalForm = document.getElementById("FormId");
    let LocalTableName = ConfigJson.TableName;

    const serializedData = jFLocalSerializeFormData(jVarLocalForm);
    const upperCasedData = {};

    for (const key in serializedData) {
        upperCasedData[key.toUpperCase()] = serializedData[key];
    }

    let LocalData = localStorage.getItem("FormData");
    if (LocalData) {
        const parsedData = JSON.parse(LocalData);
        parsedData.push(upperCasedData);
        localStorage.setItem(LocalTableName, JSON.stringify(parsedData));
    } else {
        localStorage.setItem(LocalTableName, JSON.stringify([upperCasedData]));
    }

    return true;
};

function jFLocalSerializeFormData(form) {
    const formData = new FormData(form);
    const serializedData = {};

    for (const [name, value] of formData) {
        const trimmedValue = value.trim();

        if (serializedData[name]) {
            if (!Array.isArray(serializedData[name])) {
                serializedData[name] = [serializedData[name]];
            }
            serializedData[name].push(trimmedValue);
        } else {
            serializedData[name] = trimmedValue;
        }
    }

    return serializedData;
}

export { StartFunc };
