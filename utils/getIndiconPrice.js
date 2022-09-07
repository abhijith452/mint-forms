function getIndiconPrice(values) {
  var pricingEarlyBird = {
    indianAuthorAcadamic: [9000, 10500],
    indianAuthorIndustry: [10000, 11500],
    indianAuthorStudent: [7500, 8500],
    indianAttendee:[6000,7000],
    foreignAuthor: [250, 300],
    foreignStudentAuthor: [200, 250],
    foreignTest:[1,1]
  };
  var pricingStandard = {
    indianAuthorAcadamic: [10000, 11500],
    indianAuthorIndustry: [11000, 12500],
    indianAuthorStudent: [8500, 9500],
    indianAttendee:[7000,8000],
    foreignAuthor: [300, 350],
    foreignStudentAuthor: [250, 300],
    foreignTest:[1,1]

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
  if (
    values.category === 'Indian Non-Author Attendee' &&
    values.ieeeMember === 'Yes'
  ) {
    return pricingData.indianAttendee[0];
  }
  if (
    values.category === 'Indian Non-Author Attendee' &&
    values.ieeeMember === 'No'
  ) {
    return pricingData.indianAttendee[1];
  }
  if(values.category==='Foreign Test Category'){
    return pricingData.foreignTest[0]
  }
  else{
    return 9000
  }
}
module.exports = getIndiconPrice;
