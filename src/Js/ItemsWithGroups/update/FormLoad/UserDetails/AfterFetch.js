let StartFunc = ({ inDataToShow }) => {
   let jVarLocalData = inDataToShow;

   jFLocalToInputItemName({ inItemName: jVarLocalData.ITEMNAME });
   jFLocalToInputItemCategory({ inItemCategory: jVarLocalData.ITEMCATEGORY });
   jFLocalToInputItemGroup({ inItemGroup: jVarLocalData.ITEMGROUP });

};

let jFLocalToInputItemName = ({ inItemName }) => {
   let jVarLocalHtmlId = 'ItemName';
   let jVarLocalItemName = document.getElementById(jVarLocalHtmlId);

   if (jVarLocalItemName === null === false) {
      jVarLocalItemName.value = inItemName;
   };
};

let jFLocalToInputItemCategory = ({ inItemCategory }) => {
   let jVarLocalHtmlId = 'ItemCategory';
   let jVarLocalItemCategory = document.getElementById(jVarLocalHtmlId);

   if (jVarLocalItemCategory === null === false) {
      jVarLocalItemCategory.value = inItemCategory;
   };
};

let jFLocalToInputItemGroup = ({ inItemGroup }) => {
   let jVarLocalHtmlId = 'ItemGroup';
   let jVarLocalItemGroup = document.getElementById(jVarLocalHtmlId);

   if (jVarLocalItemGroup === null === false) {
      jVarLocalItemGroup.value = inItemGroup;
   };
};
export { StartFunc };