exports.id = 711;
exports.ids = [711];
exports.modules = {

/***/ 1413:
/***/ ((module) => {

// Exports
module.exports = {
	"label": "styles_label___G4V3",
	"input": "styles_input__Hp09S",
	"inputContainer": "styles_inputContainer__4S_nP",
	"errorMsg": "styles_errorMsg__zR9ek"
};


/***/ }),

/***/ 5196:
/***/ ((module) => {

// Exports
module.exports = {
	"form": "Form_form__mh4_m",
	"formContainer": "Form_formContainer__WPux3",
	"formDetails": "Form_formDetails__pdDF3",
	"formContent": "Form_formContent__l12w5",
	"formBanner": "Form_formBanner__UDM_s",
	"formDescription": "Form_formDescription__GUW1v",
	"formTitle": "Form_formTitle__X4qJW",
	"subTitle": "Form_subTitle___s4y7",
	"button": "Form_button__Jsx6p",
	"button2": "Form_button2__qezvV",
	"priceLabel": "Form_priceLabel__5AQZq",
	"price": "Form_price__QAmVm",
	"breakDownLabel": "Form_breakDownLabel__LZLc8",
	"singlePrice": "Form_singlePrice__WRVBj",
	"footer": "Form_footer__5zZiK"
};


/***/ }),

/***/ 7002:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RadioButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7704);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1413);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_2__);



const FormOptions = ({ label , options , value , onChange , errors ,  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().inputContainer),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),
                children: label
            }),
            options.map((item, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RadioButton__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    checked: value === item ? true : false,
                    label: item,
                    onClick: (e)=>onChange(e)
                }, key)),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().errorMsg),
                children: errors
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormOptions);


/***/ }),

/***/ 9154:
/***/ ((module) => {

"use strict";

function buildForm(values) {
    var formData = new FormData();
    var key = Object.keys(values);
    key.forEach((val)=>{
        formData.append(val, values[val]);
    });
    return formData;
}
module.exports = buildForm;


/***/ })

};
;