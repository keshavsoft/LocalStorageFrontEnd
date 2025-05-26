
let StartFunc = () => {
    let jVarLocalForm = document.getElementById("FormId");

    const serializedData = jFLocalSerializeFormData(jVarLocalForm);
    const upperCasedData = {};

    for (const key in serializedData) {
        upperCasedData[key.toUpperCase()] = serializedData[key];
    }

    return upperCasedData;
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
