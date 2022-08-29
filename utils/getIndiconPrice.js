function getIndiconPrice(values) {
  var pricingEarlyBird = {
    indianAuthorAcadamic: [9000, 10500],
    indianAuthorIndustry: [10000, 11500],
    indianAuthorStudent: [7500, 8500],
    foreignAuthor: [250, 300],
    foreignStudentAuthor: [200, 250],
  };
  var pricingStandard = {
    indianAuthorAcadamic: [10000, 11500],
    indianAuthorIndustry: [11000, 12500],
    indianAuthorStudent: [8500, 9500],
    foreignAuthor: [300, 350],
    foreignStudentAuthor: [250, 300],
  };
  var pricingData =
    new Date().toISOString() > '2022-10-15T18:29:59.059Z'
      ? pricingStandard
      : pricingEarlyBird;

  if (
    values.category === 'Indian Author (Academia)' &&
    values.ieeeMember === 'Yes'
  ) {
    return pricingData.indianAuthorAcadamic[0];
  }
  if (
    values.category === 'Indian Author (Academia)' &&
    values.ieeeMember === 'No'
  ) {
    return pricingData.indianAuthorAcadamic[1];
  }

  if (
    values.category === 'Indian Author (Industry)' &&
    values.ieeeMember === 'Yes'
  ) {
    return pricingData.indianAuthorIndustry[0];
  }
  if (
    values.category === 'Indian Author (Industry)' &&
    values.ieeeMember === 'No'
  ) {
    return pricingData.indianAuthorIndustry[1];
  }

  if (
    values.category === 'Indian Student Author' &&
    values.ieeeMember === 'Yes'
  ) {
    return pricingData.indianAuthorStudent[0];
  }
  if (
    values.category === 'Indian Student Author' &&
    values.ieeeMember === 'No'
  ) {
    return pricingData.indianAuthorStudent[1];
  }

  if (values.category === 'Foreign Author' && values.ieeeMember === 'Yes') {
    return pricingData.foreignAuthor[0];
  }
  if (values.category === 'Foreign Author' && values.ieeeMember === 'No') {
    return pricingData.foreignAuthor[1];
  }

  if (
    values.category === 'Foreign Student Author' &&
    values.ieeeMember === 'Yes'
  ) {
    return pricingData.foreignStudentAuthor[0];
  }
  if (
    values.category === 'Foreign Student Author' &&
    values.ieeeMember === 'No'
  ) {
    return pricingData.foreignStudentAuthor[1];
  }
  else{
    return 9000
  }
}
module.exports = getIndiconPrice;
