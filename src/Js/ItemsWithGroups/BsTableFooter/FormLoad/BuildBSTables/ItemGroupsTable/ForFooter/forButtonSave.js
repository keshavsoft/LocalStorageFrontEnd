const StartFunc = ({ inColumn }) => {
    inColumn.footerFormatter = () => {
        return `     <button class="btn btn-outline-success" type="button"
                                            id="TableFooterSaveButtonId">
                                            Save
                                        </button>`;
    };
};

export { StartFunc };
