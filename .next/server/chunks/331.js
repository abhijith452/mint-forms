"use strict";
exports.id = 331;
exports.ids = [331];
exports.modules = {

/***/ 3661:
/***/ ((module) => {


function isDate(val) {
    // Cross realm comptatible
    return Object.prototype.toString.call(val) === "[object Date]";
}
function isObj(val) {
    return typeof val === "object";
}
function stringifyValue(val) {
    if (isObj(val) && !isDate(val)) {
        return JSON.stringify(val);
    } else {
        return val;
    }
}
function buildForm({ action , params  }) {
    const form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", action);
    Object.keys(params).forEach((key)=>{
        const input = document.createElement("input");
        input.setAttribute("type", "hidden");
        input.setAttribute("name", key);
        input.setAttribute("value", stringifyValue(params[key]));
        form.appendChild(input);
    });
    return form;
}
function displayPaytm(data) {
    var paytmLink = "";
    if (true) {
        paytmLink = "https://securegw.paytm.in/order/process";
    } else {}
    console.log("production");
    var details = {
        action: paytmLink,
        params: data
    };
    const form = buildForm(details);
    document.body.appendChild(form);
    form.submit();
    form.remove();
}
module.exports = displayPaytm;


/***/ }),

/***/ 7837:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loadScript() {
    return new Promise((resolve)=>{
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.onload = ()=>{
            resolve(true);
        };
        script.onerror = ()=>{
            resolve(false);
        };
        document.body.appendChild(script);
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadScript);


/***/ })

};
;