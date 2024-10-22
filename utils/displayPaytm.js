function isDate(val) {
  // Cross realm comptatible
  return Object.prototype.toString.call(val) === '[object Date]';
}

function isObj(val) {
  return typeof val === 'object';
}

function stringifyValue(val) {
  if (isObj(val) && !isDate(val)) {
    return JSON.stringify(val);
  } else {
    return val;
  }
}

function buildForm({ action, params }) {
  const form = document.createElement('form');
  form.setAttribute('method', 'post');
  form.setAttribute('action', action);

  Object.keys(params).forEach((key) => {
    const input = document.createElement('input');
    input.setAttribute('type', 'hidden');
    input.setAttribute('name', key);
    input.setAttribute('value', stringifyValue(params[key]));
    form.appendChild(input);
  });

  return form;
}

function displayPaytm(data) {
  var paytmLink = '';
  if (process.env.NEXT_PUBLIC_ENV === 'production') {
    paytmLink = 'https://securegw.paytm.in/order/process';
  } else {
    paytmLink = 'https://securegw-stage.paytm.in/order/process';
  }

  console.log(process.env.NEXT_PUBLIC_ENV);
  var details = {
    action: paytmLink,
    params: data,
  };
  const form = buildForm(details);
  document.body.appendChild(form);
  form.submit();
  form.remove();
}

module.exports = displayPaytm;
