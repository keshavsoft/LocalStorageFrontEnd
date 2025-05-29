import ConfigJson from '../../config.json' with {type: 'json'};

let fetchDataFromLocalStorage = async () => {
    let queryPk = getUrlQueryParams({ inGetKey: "pk" });

    if (!queryPk) {
        console.warn("No 'pk' query parameter found in URL.");
        return null;
    }

    let localStorageKey = ConfigJson.TableName;
    let localDataRaw = localStorage.getItem(localStorageKey);

    if (!localDataRaw) {
        console.warn(`No data found in localStorage for key: ${localStorageKey}`);
        return null;
    }

    try {
        let localData = JSON.parse(localDataRaw);
        let foundRecord = localData.find(el => el.pk == queryPk);

        if (!foundRecord) {
            console.warn(`No matching record found for pk: ${queryPk}`);
            return null;
        }

        return foundRecord; // Return full object, not just pk
    } catch (error) {
        console.error("Error parsing localStorage data:", error);
        return null;
    }
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    return parameters.get(inGetKey);
};

export { fetchDataFromLocalStorage as StartFunc };
