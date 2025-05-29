let StartFunc = ({ inDataToShow }) => {
   let jVarLocalData = inDataToShow;

   jFLocalToInputCustomerNameId({ inCustomerNameId: jVarLocalData.CUSTOMERNAME });
   jFLocalToInputMobileNumberId({ inMobileNumberId: jVarLocalData.MOBILE });
   jFLocalToInputdob({ indob: jVarLocalData.DOB });
   jFLocalToInputGSTNumberId({ inGSTNumber: jVarLocalData.GSTNUMBER })
   jFLocalToInputLocationId({ inLocation: jVarLocalData.CITY })
   jFLocalToInputOccupationId({ inOccupation: jVarLocalData.OCCUPATION })
   jFLocalToInputCompanyNameId({ inCompanyName: jVarLocalData.COMPANYNAME })
};

let jFLocalToInputCustomerNameId = ({ inCustomerNameId }) => {
   let jVarLocalHtmlId = 'CustomerNameId';
   let jVarLocalCustomerNameId = document.getElementById(jVarLocalHtmlId);

   if (jVarLocalCustomerNameId === null === false) {
      jVarLocalCustomerNameId.value = inCustomerNameId;
   };
};

let jFLocalToInputMobileNumberId = ({ inMobileNumberId }) => {
   let jVarLocalHtmlId = 'MobileNumberId';
   let jVarLocalMobileNumberId = document.getElementById(jVarLocalHtmlId);

   if (jVarLocalMobileNumberId === null === false) {
      jVarLocalMobileNumberId.value = inMobileNumberId;
   };
};

let jFLocalToInputdob = ({ indob }) => {
   let jVarLocalHtmlId = 'dob';
   let jVarLocaldob = document.getElementById(jVarLocalHtmlId);

   if (jVarLocaldob === null === false) {
      jVarLocaldob.value = indob;
   };
};

let jFLocalToInputGSTNumberId = ({ inGSTNumber }) => {
   let jVarLocalHtmlId = 'GSTNumberId';
   let jVarLocalGSTNumberId = document.getElementById(jVarLocalHtmlId);

   if (jVarLocalGSTNumberId === null === false) {
      jVarLocalGSTNumberId.value = inGSTNumber;
   };
};

let jFLocalToInputLocationId = ({ inLocation }) => {
   let jVarLocalHtmlId = 'LocationId';
   let jVarLocalLocationId = document.getElementById(jVarLocalHtmlId);

   if (jVarLocalLocationId === null === false) {
      jVarLocalLocationId.value = inLocation;
   };
};

let jFLocalToInputOccupationId = ({ inOccupation }) => {
   let jVarLocalHtmlId = 'OccupationId';
   let jVarLocalOccupationId = document.getElementById(jVarLocalHtmlId);

   if (jVarLocalOccupationId === null === false) {
      jVarLocalOccupationId.value = inOccupation;
   };
};

let jFLocalToInputCompanyNameId = ({ inCompanyName }) => {
   let jVarLocalHtmlId = 'CompanyNameId';
   let jVarLocalCompanyNameId = document.getElementById(jVarLocalHtmlId);

   if (jVarLocalCompanyNameId === null === false) {
      jVarLocalCompanyNameId.value = inCompanyName;
   };
};
export { StartFunc };