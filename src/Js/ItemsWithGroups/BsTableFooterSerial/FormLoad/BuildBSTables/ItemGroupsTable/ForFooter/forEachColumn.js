const StartFunc = ({ inColumn }) => {
    inColumn.footerFormatter = () => {
        return `   <div class="input-group">
                                            <input type="text" class="form-control" name="${inColumn.field}"
                                                autocomplete="off" placeholder="Enter ItemName" required>
                                            <div class="invalid-feedback">
                                                Please provide correct item.
                                            </div>
                                        </div>`;
    };
};

export { StartFunc };
