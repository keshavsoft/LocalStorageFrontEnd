const StartFunc = ({ inColumn }) => {
    inColumn.formatter = (value, row, index) => {
        return index + 1;
    };
};

export { StartFunc };
