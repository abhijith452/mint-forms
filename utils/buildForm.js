function buildForm(values) {
  var formData = new FormData();
  var key = Object.keys(values);

  key.forEach((val) => {
    formData.append(val, values[val]);
  });
  return formData;
}

module.exports = buildForm;
