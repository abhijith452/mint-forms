
function generateFormIntialValues(data) {

  let initialValue = {};
  data[0].map((value) => {
    initialValue[value.componentId] = ""
  });
  return initialValue;
}

module.exports = generateFormIntialValues;
