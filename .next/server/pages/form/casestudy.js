"use strict";
(() => {
var exports = {};
exports.id = 276;
exports.ids = [276];
exports.modules = {

/***/ 92:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5196);
/* harmony import */ var _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _UI_Components_FormInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7174);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _UI_Components_FormOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7002);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _UI_Components_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7698);
/* harmony import */ var _UI_Components_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6248);
/* harmony import */ var _utils_buildForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9154);
/* harmony import */ var _utils_buildForm__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_utils_buildForm__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_11__);













const Form = (props)=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const { 0: errorMsg , 1: setErrorMsg  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const { 0: initialVal , 1: setIntialVal  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({
        email: "",
        section: "",
        college: "",
        events: "",
        platform: "",
        budget: ""
    });
    // const [initialVal, setIntialVal] = useState({
    //   name: 'Test ',
    //   email: 'abhijithkannan452@gmail.com',
    //   phone: '+917025263554',
    //   ieeeMember: 'No',
    //   validIEEE: '',
    //   institute: 'CEK',
    //   designation: 'CEK',
    //   address: 'XYZ Houser',
    //   gender: 'Male',
    //   country: 'India',
    //   state: 'Kerala',
    //   pincode: '686019',
    //   food: 'Veg',
    //   paperId1: 'asdas',
    //   extraPage1: 'Not applicable',
    //   paperId2: '',
    //   extraPage2: '',
    //   papers: '1',
    //   specialSession: 'SS08'
    // });
    let schema = yup__WEBPACK_IMPORTED_MODULE_11__.object().shape({
        email: yup__WEBPACK_IMPORTED_MODULE_11__.string().required().email(),
        section: yup__WEBPACK_IMPORTED_MODULE_11__.string().required(),
        college: yup__WEBPACK_IMPORTED_MODULE_11__.string().required(),
        events: yup__WEBPACK_IMPORTED_MODULE_11__.string().required(),
        platform: yup__WEBPACK_IMPORTED_MODULE_11__.string().required(),
        budget: yup__WEBPACK_IMPORTED_MODULE_11__.string().required()
    });
    const handleAxiosError = (err)=>{
        setError(true);
        setErrorMsg(err.response !== undefined ? err.response.data.error : err);
        setLoading(false);
    };
    const handleUpload = async (values)=>{
        setIntialVal(values);
        setLoading(true);
        try {
            var data = values;
            const formData = _utils_buildForm__WEBPACK_IMPORTED_MODULE_8___default()(data);
            const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().post("/api/form/addresponse?formId=casestudy", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            router.push(`/confirmation/${res.data.orderId}`);
        } catch (err) {
            handleAxiosError(err);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_12___default().form),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_9___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Case Study"
                })
            }),
            loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_loader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    msg: "Don't refresh this page. Redirecting to payment processing service ..."
                })
            }) : new Date().toISOString() < props.expiryDate ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_12___default().formContainer),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_12___default().formDetails),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_12___default().subTitle)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_12___default().formTitle),
                                children: "Case Study"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_12___default().formDescription),
                                children: "Please fill out this form by honestly answering to each of the questions below. No information gathered through this form will be disclosed to third parties."
                            })
                        ]
                    }),
                    error ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_error__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        setError: setError,
                        msg: errorMsg
                    }) : null,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_12___default().formContent),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
                                initialValues: initialVal,
                                validationSchema: schema,
                                onSubmit: (values)=>handleUpload(values),
                                children: ({ values , errors , handleSubmit , setFieldValue  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormInput__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                label: "Email *",
                                                placeholder: "Enter your email",
                                                value: values.email,
                                                onChange: (e)=>setFieldValue("email", e.target.value),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "email") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "email") : ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormInput__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                label: "Which section does your college belong to ?*",
                                                placeholder: "",
                                                value: values.section,
                                                onChange: (e)=>setFieldValue("section", e.target.value),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "section") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "section") : ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormInput__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                label: "Name of your college *",
                                                placeholder: "",
                                                value: values.college,
                                                onChange: (e)=>setFieldValue("college", e.target.value),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "college") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "college") : ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormInput__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                label: "Number of IEEE events conducted by your college per month *",
                                                placeholder: "",
                                                value: values.events,
                                                onChange: (e)=>setFieldValue("events", e.target.value),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "events") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "events") : ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormOptions__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                label: "Platform used for the registration of an event *",
                                                options: [
                                                    "Google forms",
                                                    "YepDesk",
                                                    "Microsoft Forms",
                                                    "Other", 
                                                ],
                                                value: values.platform,
                                                onChange: (e)=>setFieldValue("platform", e),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "platform") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "platform") : ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormInput__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                label: "How is event budgetary allocation handled? *",
                                                placeholder: "",
                                                value: values.budget,
                                                onChange: (e)=>setFieldValue("budget", e.target.value),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "budget") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "budget") : ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_12___default().button),
                                                type: "submit",
                                                onClick: ()=>handleSubmit(),
                                                children: "SUBMIT"
                                            })
                                        ]
                                    })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
                                className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_12___default().footer),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "This content is created by the owner of the form. The data you submit will be sent to the form owner. IEEE Kerala Section is not responsible for the privacy or security practices of its customers, including those of this form owner. Never give out your password."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    "Powered by IKS Mint Forms |",
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        style: {
                                            color: "blue"
                                        },
                                        href: "https://ieee-mint.org/privacy",
                                        children: "Privacy and cookies"
                                    }),
                                    " ",
                                    "|",
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        style: {
                                            color: "blue"
                                        },
                                        href: "https://ieee-mint.org/terms",
                                        children: "Terms of use"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        style: {
                            width: "250px",
                            marginBottom: "20px"
                        },
                        src: "/closed.jpg"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        style: {
                            fontSize: "20px"
                        },
                        children: "Thank you for your interest. Apparently, the registrations are closed for now."
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);
async function getServerSideProps() {
    try {
        const price = await axios__WEBPACK_IMPORTED_MODULE_3___default().get( true ? "https://mint-forms.ieee-mint.org/api/form/formDetails?formId=casestudy" : 0);
        return {
            props: price.data
        };
    } catch (err) {
        console.log(err);
        return {
            props: {
                pricing: {}
            }
        };
    }
}


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 2296:
/***/ ((module) => {

module.exports = require("formik");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5609:
/***/ ((module) => {

module.exports = require("yup");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [978,174,704,711], () => (__webpack_exec__(92)));
module.exports = __webpack_exports__;

})();