const ActionsFormatter = (value, row, index) => {
    if (!row || Object.keys(row).length === 0) {
        return '';
    }

    return `<button class="d-none"></button>`;
};

export default ActionsFormatter;
