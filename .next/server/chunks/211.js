exports.id = 211;
exports.ids = [211];
exports.modules = {

/***/ 1475:
/***/ ((module) => {

// Exports
module.exports = {
	"label": "styles_label__f5_sT",
	"input": "styles_input__liUvm",
	"inputContainer": "styles_inputContainer__qPmmS",
	"container": "styles_container__Bbhiw",
	"errorMsg": "styles_errorMsg__ouLvM",
	"button": "styles_button__A8LPU",
	"loader": "styles_loader__RO_a3",
	"spin": "styles_spin__HLxmf"
};


/***/ }),

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

/***/ 2534:
/***/ ((module) => {

// Exports
module.exports = {
	"label": "styles_label__U8772",
	"inputContainer": "styles_inputContainer__oOFFP",
	"errorMsg": "styles_errorMsg__OOgnn"
};


/***/ }),

/***/ 1712:
/***/ ((module) => {

// Exports
module.exports = {
	"inputContainer": "Styles_inputContainer__mLHMU",
	"label": "Styles_label__xpsbn",
	"input": "Styles_input__TXuEu",
	"errorMsg": "Styles_errorMsg__7eLf6"
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

/***/ 1322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1475);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




const FormIEEE = ({ label , placeholder , value , onChange , onChangeValid , errors , vaildError ,  })=>{
    const { 0: verified , 1: setVerified  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: err , 1: setErr  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const handleValidId = async ()=>{
        setLoading(true);
        try {
            const res = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`/api/getMemberStatus?id=${value}`);
            if (res.data.MemberStatus !== undefined && res.data.MemberStatus === "Active") {
                setVerified(true);
                onChangeValid("true");
                setErr("");
            }
            if (res.data.MemberStatus === "Inactive" || res.data.MemberStatus === "Not Applicable") {
                setVerified(false);
                setErr(`membership status : ${res.data.MemberStatus}`);
            }
            if (res.data.reasons !== undefined) {
                setVerified(false);
                setErr(res.data.reasons[0].message);
            }
            setLoading(false);
            console.log(res);
        } catch (err) {
            setLoading(false);
            console.log(err);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().inputContainer),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().label),
                children: label
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        placeholder: placeholder,
                        value: value,
                        style: {
                            boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                            outlineColor: errors !== "" ? "red" : "#1479ff"
                        },
                        onChange: (e)=>onChange(e),
                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().input)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        style: {
                            backgroundColor: verified ? "rgb(0, 231, 0)" : "var(--blue-secondary)"
                        },
                        onClick: ()=>{
                            if (!loading) {
                                handleValidId();
                            }
                        },
                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().button),
                        children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().loader)
                        }) : verified ? "Verified" : "Verify"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().errorMsg),
                children: [
                    errors,
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    " ",
                    err ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            String(err),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                        ]
                    }) : null,
                    vaildError
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormIEEE);


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

/***/ 6412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2534);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1929);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_1__);



const FormOptions = ({ label , options , value , onChange , errors ,  })=>{
    const customStyles = {
        control: ()=>({
                display: "flex",
                height: "60px",
                borderRadius: "10px",
                border: "1px rgb(222, 222, 222) solid",
                padding: "10px",
                boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
            })
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().inputContainer),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),
                children: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_select__WEBPACK_IMPORTED_MODULE_1___default()), {
                instanceId: "ssdsd",
                value: value,
                styles: customStyles,
                onChange: (e)=>onChange(e),
                options: options
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().errorMsg),
                children: errors
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormOptions);


/***/ }),

/***/ 2558:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PhoneSelector)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_phone_number_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8680);
/* harmony import */ var react_phone_number_input_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(483);
/* harmony import */ var react_phone_number_input_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_phone_number_input_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Styles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1712);
/* harmony import */ var _Styles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Styles_module_css__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_phone_number_input__WEBPACK_IMPORTED_MODULE_1__]);
react_phone_number_input__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function PhoneSelector({ onChange , value , placeholder , errors , label ,  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_Styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().inputContainer),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_Styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().label),
                children: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_Styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().input),
                style: {
                    outlineColor: errors !== "" ? "red" : "#1479ff",
                    boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_phone_number_input__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    defaultCountry: "IN",
                    style: {
                        border: "none",
                        width: "100%"
                    },
                    placeholder: placeholder,
                    value: value,
                    onChange: onChange
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_Styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().errorMsg),
                children: errors
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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


/***/ }),

/***/ 4723:
/***/ ((module) => {

"use strict";

const countryList = [
    {
        value: "Afghanistan",
        label: "Afghanistan"
    },
    {
        value: "\xc5land Islands",
        label: "\xc5land Islands"
    },
    {
        value: "Albania",
        label: "Albania"
    },
    {
        value: "Algeria",
        label: "Algeria"
    },
    {
        value: "American Samoa",
        label: "American Samoa"
    },
    {
        value: "AndorrA",
        label: "AndorrA"
    },
    {
        value: "Angola",
        label: "Angola"
    },
    {
        value: "Anguilla",
        label: "Anguilla"
    },
    {
        value: "Antarctica",
        label: "Antarctica"
    },
    {
        value: "Antigua and Barbuda",
        label: "Antigua and Barbuda"
    },
    {
        value: "Argentina",
        label: "Argentina"
    },
    {
        value: "Armenia",
        label: "Armenia"
    },
    {
        value: "Aruba",
        label: "Aruba"
    },
    {
        value: "Australia",
        label: "Australia"
    },
    {
        value: "Austria",
        label: "Austria"
    },
    {
        value: "Azerbaijan",
        label: "Azerbaijan"
    },
    {
        value: "Bahamas",
        label: "Bahamas"
    },
    {
        value: "Bahrain",
        label: "Bahrain"
    },
    {
        value: "Bangladesh",
        label: "Bangladesh"
    },
    {
        value: "Barbados",
        label: "Barbados"
    },
    {
        value: "Belarus",
        label: "Belarus"
    },
    {
        value: "Belgium",
        label: "Belgium"
    },
    {
        value: "Belize",
        label: "Belize"
    },
    {
        value: "Benin",
        label: "Benin"
    },
    {
        value: "Bermuda",
        label: "Bermuda"
    },
    {
        value: "Bhutan",
        label: "Bhutan"
    },
    {
        value: "Bolivia",
        label: "Bolivia"
    },
    {
        value: "Bosnia and Herzegovina",
        label: "Bosnia and Herzegovina"
    },
    {
        value: "Botswana",
        label: "Botswana"
    },
    {
        value: "Bouvet Island",
        label: "Bouvet Island"
    },
    {
        value: "Brazil",
        label: "Brazil"
    },
    {
        value: "British Indian Ocean Territory",
        label: "British Indian Ocean Territory"
    },
    {
        value: "Brunei Darussalam",
        label: "Brunei Darussalam"
    },
    {
        value: "Bulgaria",
        label: "Bulgaria"
    },
    {
        value: "Burkina Faso",
        label: "Burkina Faso"
    },
    {
        value: "Burundi",
        label: "Burundi"
    },
    {
        value: "Cambodia",
        label: "Cambodia"
    },
    {
        value: "Cameroon",
        label: "Cameroon"
    },
    {
        value: "Canada",
        label: "Canada"
    },
    {
        value: "Cape Verde",
        label: "Cape Verde"
    },
    {
        value: "Cayman Islands",
        label: "Cayman Islands"
    },
    {
        value: "Central African Republic",
        label: "Central African Republic"
    },
    {
        value: "Chad",
        label: "Chad"
    },
    {
        value: "Chile",
        label: "Chile"
    },
    {
        value: "China",
        label: "China"
    },
    {
        value: "Christmas Island",
        label: "Christmas Island"
    },
    {
        value: "Cocos (Keeling) Islands",
        label: "Cocos (Keeling) Islands"
    },
    {
        value: "Colombia",
        label: "Colombia"
    },
    {
        value: "Comoros",
        label: "Comoros"
    },
    {
        value: "Congo",
        label: "Congo"
    },
    {
        value: "Congo, The Democratic Republic of the",
        label: "Congo, The Democratic Republic of the"
    },
    {
        value: "Cook Islands",
        label: "Cook Islands"
    },
    {
        value: "Costa Rica",
        label: "Costa Rica"
    },
    {
        value: "Cote D'Ivoire",
        label: "Cote D'Ivoire"
    },
    {
        value: "Croatia",
        label: "Croatia"
    },
    {
        value: "Cuba",
        label: "Cuba"
    },
    {
        value: "Cyprus",
        label: "Cyprus"
    },
    {
        value: "Czech Republic",
        label: "Czech Republic"
    },
    {
        value: "Denmark",
        label: "Denmark"
    },
    {
        value: "Djibouti",
        label: "Djibouti"
    },
    {
        value: "Dominica",
        label: "Dominica"
    },
    {
        value: "Dominican Republic",
        label: "Dominican Republic"
    },
    {
        value: "Ecuador",
        label: "Ecuador"
    },
    {
        value: "Egypt",
        label: "Egypt"
    },
    {
        value: "El Salvador",
        label: "El Salvador"
    },
    {
        value: "Equatorial Guinea",
        label: "Equatorial Guinea"
    },
    {
        value: "Eritrea",
        label: "Eritrea"
    },
    {
        value: "Estonia",
        label: "Estonia"
    },
    {
        value: "Ethiopia",
        label: "Ethiopia"
    },
    {
        value: "Falkland Islands (Malvinas)",
        label: "Falkland Islands (Malvinas)"
    },
    {
        value: "Faroe Islands",
        label: "Faroe Islands"
    },
    {
        value: "Fiji",
        label: "Fiji"
    },
    {
        value: "Finland",
        label: "Finland"
    },
    {
        value: "France",
        label: "France"
    },
    {
        value: "French Guiana",
        label: "French Guiana"
    },
    {
        value: "French Polynesia",
        label: "French Polynesia"
    },
    {
        value: "French Southern Territories",
        label: "French Southern Territories"
    },
    {
        value: "Gabon",
        label: "Gabon"
    },
    {
        value: "Gambia",
        label: "Gambia"
    },
    {
        value: "Georgia",
        label: "Georgia"
    },
    {
        value: "Germany",
        label: "Germany"
    },
    {
        value: "Ghana",
        label: "Ghana"
    },
    {
        value: "Gibraltar",
        label: "Gibraltar"
    },
    {
        value: "Greece",
        label: "Greece"
    },
    {
        value: "Greenland",
        label: "Greenland"
    },
    {
        value: "Grenada",
        label: "Grenada"
    },
    {
        value: "Guadeloupe",
        label: "Guadeloupe"
    },
    {
        value: "Guam",
        label: "Guam"
    },
    {
        value: "Guatemala",
        label: "Guatemala"
    },
    {
        value: "Guernsey",
        label: "Guernsey"
    },
    {
        value: "Guinea",
        label: "Guinea"
    },
    {
        value: "Guinea-Bissau",
        label: "Guinea-Bissau"
    },
    {
        value: "Guyana",
        label: "Guyana"
    },
    {
        value: "Haiti",
        label: "Haiti"
    },
    {
        value: "Heard Island and Mcdonald Islands",
        label: "Heard Island and Mcdonald Islands"
    },
    {
        value: "Holy See (Vatican City State)",
        label: "Holy See (Vatican City State)"
    },
    {
        value: "Honduras",
        label: "Honduras"
    },
    {
        value: "Hong Kong",
        label: "Hong Kong"
    },
    {
        value: "Hungary",
        label: "Hungary"
    },
    {
        value: "Iceland",
        label: "Iceland"
    },
    {
        value: "India",
        label: "India"
    },
    {
        value: "Indonesia",
        label: "Indonesia"
    },
    {
        value: "Iran, Islamic Republic Of",
        label: "Iran, Islamic Republic Of"
    },
    {
        value: "Iraq",
        label: "Iraq"
    },
    {
        value: "Ireland",
        label: "Ireland"
    },
    {
        value: "Isle of Man",
        label: "Isle of Man"
    },
    {
        value: "Israel",
        label: "Israel"
    },
    {
        value: "Italy",
        label: "Italy"
    },
    {
        value: "Jamaica",
        label: "Jamaica"
    },
    {
        value: "Japan",
        label: "Japan"
    },
    {
        value: "Jersey",
        label: "Jersey"
    },
    {
        value: "Jordan",
        label: "Jordan"
    },
    {
        value: "Kazakhstan",
        label: "Kazakhstan"
    },
    {
        value: "Kenya",
        label: "Kenya"
    },
    {
        value: "Kiribati",
        label: "Kiribati"
    },
    {
        value: "Korea, Democratic People'S Republic of",
        label: "Korea, Democratic People'S Republic of"
    },
    {
        value: "Korea, Republic of",
        label: "Korea, Republic of"
    },
    {
        value: "Kuwait",
        label: "Kuwait"
    },
    {
        value: "Kyrgyzstan",
        label: "Kyrgyzstan"
    },
    {
        value: "Lao People'S Democratic Republic",
        label: "Lao People'S Democratic Republic"
    },
    {
        value: "Latvia",
        label: "Latvia"
    },
    {
        value: "Lebanon",
        label: "Lebanon"
    },
    {
        value: "Lesotho",
        label: "Lesotho"
    },
    {
        value: "Liberia",
        label: "Liberia"
    },
    {
        value: "Libyan Arab Jamahiriya",
        label: "Libyan Arab Jamahiriya"
    },
    {
        value: "Liechtenstein",
        label: "Liechtenstein"
    },
    {
        value: "Lithuania",
        label: "Lithuania"
    },
    {
        value: "Luxembourg",
        label: "Luxembourg"
    },
    {
        value: "Macao",
        label: "Macao"
    },
    {
        value: "Macedonia, The Former Yugoslav Republic of",
        label: "Macedonia, The Former Yugoslav Republic of"
    },
    {
        value: "Madagascar",
        label: "Madagascar"
    },
    {
        value: "Malawi",
        label: "Malawi"
    },
    {
        value: "Malaysia",
        label: "Malaysia"
    },
    {
        value: "Maldives",
        label: "Maldives"
    },
    {
        value: "Mali",
        label: "Mali"
    },
    {
        value: "Malta",
        label: "Malta"
    },
    {
        value: "Marshall Islands",
        label: "Marshall Islands"
    },
    {
        value: "Martinique",
        label: "Martinique"
    },
    {
        value: "Mauritania",
        label: "Mauritania"
    },
    {
        value: "Mauritius",
        label: "Mauritius"
    },
    {
        value: "Mayotte",
        label: "Mayotte"
    },
    {
        value: "Mexico",
        label: "Mexico"
    },
    {
        value: "Micronesia, Federated States of",
        label: "Micronesia, Federated States of"
    },
    {
        value: "Moldova, Republic of",
        label: "Moldova, Republic of"
    },
    {
        value: "Monaco",
        label: "Monaco"
    },
    {
        value: "Mongolia",
        label: "Mongolia"
    },
    {
        value: "Montserrat",
        label: "Montserrat"
    },
    {
        value: "Morocco",
        label: "Morocco"
    },
    {
        value: "Mozambique",
        label: "Mozambique"
    },
    {
        value: "Myanmar",
        label: "Myanmar"
    },
    {
        value: "Namibia",
        label: "Namibia"
    },
    {
        value: "Nauru",
        label: "Nauru"
    },
    {
        value: "Nepal",
        label: "Nepal"
    },
    {
        value: "Netherlands",
        label: "Netherlands"
    },
    {
        value: "Netherlands Antilles",
        label: "Netherlands Antilles"
    },
    {
        value: "New Caledonia",
        label: "New Caledonia"
    },
    {
        value: "New Zealand",
        label: "New Zealand"
    },
    {
        value: "Nicaragua",
        label: "Nicaragua"
    },
    {
        value: "Niger",
        label: "Niger"
    },
    {
        value: "Nigeria",
        label: "Nigeria"
    },
    {
        value: "Niue",
        label: "Niue"
    },
    {
        value: "Norfolk Island",
        label: "Norfolk Island"
    },
    {
        value: "Northern Mariana Islands",
        label: "Northern Mariana Islands"
    },
    {
        value: "Norway",
        label: "Norway"
    },
    {
        value: "Oman",
        label: "Oman"
    },
    {
        value: "Pakistan",
        label: "Pakistan"
    },
    {
        value: "Palau",
        label: "Palau"
    },
    {
        value: "Palestinian Territory, Occupied",
        label: "Palestinian Territory, Occupied"
    },
    {
        value: "Panama",
        label: "Panama"
    },
    {
        value: "Papua New Guinea",
        label: "Papua New Guinea"
    },
    {
        value: "Paraguay",
        label: "Paraguay"
    },
    {
        value: "Peru",
        label: "Peru"
    },
    {
        value: "Philippines",
        label: "Philippines"
    },
    {
        value: "Pitcairn",
        label: "Pitcairn"
    },
    {
        value: "Poland",
        label: "Poland"
    },
    {
        value: "Portugal",
        label: "Portugal"
    },
    {
        value: "Puerto Rico",
        label: "Puerto Rico"
    },
    {
        value: "Qatar",
        label: "Qatar"
    },
    {
        value: "Reunion",
        label: "Reunion"
    },
    {
        value: "Romania",
        label: "Romania"
    },
    {
        value: "Russian Federation",
        label: "Russian Federation"
    },
    {
        value: "RWANDA",
        label: "RWANDA"
    },
    {
        value: "Saint Helena",
        label: "Saint Helena"
    },
    {
        value: "Saint Kitts and Nevis",
        label: "Saint Kitts and Nevis"
    },
    {
        value: "Saint Lucia",
        label: "Saint Lucia"
    },
    {
        value: "Saint Pierre and Miquelon",
        label: "Saint Pierre and Miquelon"
    },
    {
        value: "Saint Vincent and the Grenadines",
        label: "Saint Vincent and the Grenadines"
    },
    {
        value: "Samoa",
        label: "Samoa"
    },
    {
        value: "San Marino",
        label: "San Marino"
    },
    {
        value: "Sao Tome and Principe",
        label: "Sao Tome and Principe"
    },
    {
        value: "Saudi Arabia",
        label: "Saudi Arabia"
    },
    {
        value: "Senegal",
        label: "Senegal"
    },
    {
        value: "Serbia and Montenegro",
        label: "Serbia and Montenegro"
    },
    {
        value: "Seychelles",
        label: "Seychelles"
    },
    {
        value: "Sierra Leone",
        label: "Sierra Leone"
    },
    {
        value: "Singapore",
        label: "Singapore"
    },
    {
        value: "Slovakia",
        label: "Slovakia"
    },
    {
        value: "Slovenia",
        label: "Slovenia"
    },
    {
        value: "Solomon Islands",
        label: "Solomon Islands"
    },
    {
        value: "Somalia",
        label: "Somalia"
    },
    {
        value: "South Africa",
        label: "South Africa"
    },
    {
        value: "South Georgia and the South Sandwich Islands",
        label: "South Georgia and the South Sandwich Islands"
    },
    {
        value: "Spain",
        label: "Spain"
    },
    {
        value: "Sri Lanka",
        label: "Sri Lanka"
    },
    {
        value: "Sudan",
        label: "Sudan"
    },
    {
        value: "Surilabel",
        label: "Surilabel"
    },
    {
        value: "Svalbard and Jan Mayen",
        label: "Svalbard and Jan Mayen"
    },
    {
        value: "Swaziland",
        label: "Swaziland"
    },
    {
        value: "Sweden",
        label: "Sweden"
    },
    {
        value: "Switzerland",
        label: "Switzerland"
    },
    {
        value: "Syrian Arab Republic",
        label: "Syrian Arab Republic"
    },
    {
        value: "Taiwan, Province of China",
        label: "Taiwan, Province of China"
    },
    {
        value: "Tajikistan",
        label: "Tajikistan"
    },
    {
        value: "Tanzania, United Republic of",
        label: "Tanzania, United Republic of"
    },
    {
        value: "Thailand",
        label: "Thailand"
    },
    {
        value: "Timor-Leste",
        label: "Timor-Leste"
    },
    {
        value: "Togo",
        label: "Togo"
    },
    {
        value: "Tokelau",
        label: "Tokelau"
    },
    {
        value: "Tonga",
        label: "Tonga"
    },
    {
        value: "Trinidad and Tobago",
        label: "Trinidad and Tobago"
    },
    {
        value: "Tunisia",
        label: "Tunisia"
    },
    {
        value: "Turkey",
        label: "Turkey"
    },
    {
        value: "Turkmenistan",
        label: "Turkmenistan"
    },
    {
        value: "Turks and Caicos Islands",
        label: "Turks and Caicos Islands"
    },
    {
        value: "Tuvalu",
        label: "Tuvalu"
    },
    {
        value: "Uganda",
        label: "Uganda"
    },
    {
        value: "Ukraine",
        label: "Ukraine"
    },
    {
        value: "United Arab Emirates",
        label: "United Arab Emirates"
    },
    {
        value: "United Kingdom",
        label: "United Kingdom"
    },
    {
        value: "United States",
        label: "United States"
    },
    {
        value: "United States Minor Outlying Islands",
        label: "United States Minor Outlying Islands"
    },
    {
        value: "Uruguay",
        label: "Uruguay"
    },
    {
        value: "Uzbekistan",
        label: "Uzbekistan"
    },
    {
        value: "Vanuatu",
        label: "Vanuatu"
    },
    {
        value: "Venezuela",
        label: "Venezuela"
    },
    {
        value: "Viet Nam",
        label: "Viet Nam"
    },
    {
        value: "Virgin Islands, British",
        label: "Virgin Islands, British"
    },
    {
        value: "Virgin Islands, U.S.",
        label: "Virgin Islands, U.S."
    },
    {
        value: "Wallis and Futuna",
        label: "Wallis and Futuna"
    },
    {
        value: "Western Sahara",
        label: "Western Sahara"
    },
    {
        value: "Yemen",
        label: "Yemen"
    },
    {
        value: "Zambia",
        label: "Zambia"
    },
    {
        value: "Zimbabwe",
        label: "Zimbabwe"
    }, 
];
module.exports = countryList;


/***/ }),

/***/ 7635:
/***/ ((module) => {

"use strict";

function getTotalPrice(amount, values) {
    var gst = amount * 0.18;
    var feePercent = values.category.includes("Foreign") || values.citizen === "Foreign" ? 0.032 : 0.022;
    var fee = feePercent * (amount + gst);
    var feeGST = fee * 0.18;
    return (amount + gst + fee + feeGST).toFixed(2);
}
module.exports = getTotalPrice;


/***/ }),

/***/ 483:
/***/ (() => {



/***/ })

};
;