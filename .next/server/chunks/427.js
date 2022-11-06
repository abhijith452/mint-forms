exports.id = 427;
exports.ids = [427];
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
    const { 0: SocietyList , 1: setSocietyList  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: err , 1: setErr  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const handleValidId = async ()=>{
        setLoading(true);
        try {
            const res = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`/api/getMemberStatus?id=${value}`);
            if (res.data.MemberStatus !== undefined && res.data.MemberStatus === "Active") {
                setVerified(true);
                setSocietyList(res.data.SocietyList);
                onChangeValid("true", res.data.SocietyList);
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

/***/ 483:
/***/ (() => {



/***/ })

};
;