"use strict";
(() => {
var exports = {};
exports.id = 91;
exports.ids = [91];
exports.modules = {

/***/ 6662:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5196);
/* harmony import */ var _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _UI_Components_FormInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7174);
/* harmony import */ var _UI_Components_FormTextArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7265);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UI_Components_FormOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7002);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _UI_Components_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7698);
/* harmony import */ var _UI_Components_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6248);
/* harmony import */ var _utils_buildForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9154);
/* harmony import */ var _utils_buildForm__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_utils_buildForm__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _UI_Components_PhoneSelector__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2558);
/* harmony import */ var _UI_Components_FormSelect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6412);
/* harmony import */ var _UI_Components_FormIEEE__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1322);
/* harmony import */ var _utils_getStateList__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8594);
/* harmony import */ var _utils_getStateList__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_utils_getStateList__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_16__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_UI_Components_PhoneSelector__WEBPACK_IMPORTED_MODULE_12__]);
_UI_Components_PhoneSelector__WEBPACK_IMPORTED_MODULE_12__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


















const Form = (props)=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_11__.useRouter)();
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const { 0: errorMsg , 1: setErrorMsg  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const { 0: initialVal , 1: setIntialVal  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)({
        name: "",
        email: "",
        phone: "",
        state: "",
        type: "",
        institute: "",
        field: "",
        ieeeMember: "No",
        validIEEE: "",
        section: "",
        volunteering: ""
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
    let schema = yup__WEBPACK_IMPORTED_MODULE_16__.object().shape({
        name: yup__WEBPACK_IMPORTED_MODULE_16__.string().required(),
        email: yup__WEBPACK_IMPORTED_MODULE_16__.string().required().email(),
        phone: yup__WEBPACK_IMPORTED_MODULE_16__.string().required(),
        state: yup__WEBPACK_IMPORTED_MODULE_16__.string().required(),
        institute: yup__WEBPACK_IMPORTED_MODULE_16__.string(),
        type: yup__WEBPACK_IMPORTED_MODULE_16__.string().required(),
        field: yup__WEBPACK_IMPORTED_MODULE_16__.string(),
        volunteering: yup__WEBPACK_IMPORTED_MODULE_16__.string(),
        ieeeMember: yup__WEBPACK_IMPORTED_MODULE_16__.string().required(),
        validIEEE: yup__WEBPACK_IMPORTED_MODULE_16__.string().when("ieeeMember", {
            is: "Yes",
            then: yup__WEBPACK_IMPORTED_MODULE_16__.string().required("Verify membership ID")
        }),
        membershipId: yup__WEBPACK_IMPORTED_MODULE_16__.string().when("ieeeMember", {
            is: "Yes",
            then: yup__WEBPACK_IMPORTED_MODULE_16__.string().required()
        }),
        section: yup__WEBPACK_IMPORTED_MODULE_16__.string().when("ieeeMember", {
            is: "Yes",
            then: yup__WEBPACK_IMPORTED_MODULE_16__.string().required()
        })
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
            const formData = _utils_buildForm__WEBPACK_IMPORTED_MODULE_9___default()(data);
            const res = await axios__WEBPACK_IMPORTED_MODULE_4___default().post("/api/form/addresponse?formId=ypupskill", formData, {
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
        className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_17___default().form),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_10___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Indicon 2022"
                })
            }),
            loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_loader__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                    msg: "Don't refresh this page. Redirecting to payment processing service ..."
                })
            }) : new Date().toISOString() < props.expiryDate ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_17___default().formContainer),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_17___default().formBanner),
                        src: "/upskill.jpg"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_17___default().formDetails),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_17___default().subTitle),
                                children: "REGISTRATION FORM"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_17___default().formTitle),
                                children: "UPSkill 2022"
                            })
                        ]
                    }),
                    error ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_error__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        setError: setError,
                        msg: errorMsg
                    }) : null,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_17___default().formContent),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_3__.Formik, {
                                initialValues: initialVal,
                                validationSchema: schema,
                                onSubmit: (values)=>handleUpload(values),
                                children: ({ values , errors , handleSubmit , setFieldValue  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormInput__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                label: "Full name *",
                                                placeholder: "Enter your name",
                                                value: values.name,
                                                onChange: (e)=>setFieldValue("name", e.target.value),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_3__.getIn)(errors, "name") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_3__.getIn)(errors, "name") : ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormInput__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                label: "Email *",
                                                placeholder: "Enter your email",
                                                value: values.email,
                                                onChange: (e)=>setFieldValue("email", e.target.value),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_3__.getIn)(errors, "email") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_3__.getIn)(errors, "email") : ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_PhoneSelector__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                label: "Phone *",
                                                placeholder: "Enter your phone number",
                                                value: values.phone,
                                                onChange: (e)=>setFieldValue("phone", e),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_3__.getIn)(errors, "phone") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_3__.getIn)(errors, "phone") : ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormSelect__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                label: "State *",
                                                options: (_utils_getStateList__WEBPACK_IMPORTED_MODULE_15___default()),
                                                value: {
                                                    label: values.state,
                                                    value: values.state
                                                },
                                                onChange: (e)=>setFieldValue("state", e.value),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_3__.getIn)(errors, "state") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_3__.getIn)(errors, "state") : ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormInput__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                label: "Institution/Company",
                                                placeholder: "Enter your institution",
                                                value: values.institute,
                                                onChange: (e)=>setFieldValue("institute", e.target.value),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_3__.getIn)(errors, "institute") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_3__.getIn)(errors, "institute") : ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormOptions__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                label: "Type *",
                                                options: [
                                                    "Student",
                                                    "Working Professional"
                                                ],
                                                value: values.type,
                                                onChange: (e)=>setFieldValue("type", e),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_3__.getIn)(errors, "type") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_3__.getIn)(errors, "type") : ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormTextArea__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                label: "Previous volunteering experince wiith IEEE or any other organizations",
                                                placeholder: "Enter your previous volunteering experince",
                                                value: values.volunteering,
                                                name: "",
                                                onChange: (e)=>setFieldValue("volunteering", e.target.value),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_3__.getIn)(errors, "volunteering") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_3__.getIn)(errors, "volunteering") : ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormOptions__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                label: "Are you an IEEE Member*",
                                                options: [
                                                    "Yes",
                                                    "No"
                                                ],
                                                value: values.ieeeMember,
                                                onChange: (e)=>setFieldValue("ieeeMember", e),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_3__.getIn)(errors, "ieeeMember") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_3__.getIn)(errors, "ieeeMember") : ""
                                            }),
                                            values.ieeeMember === "Yes" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormIEEE__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                        label: "If yes, enter your membership ID",
                                                        placeholder: "Enter your IEEE Membership ID ",
                                                        value: values.membershipId,
                                                        onChange: (e)=>setFieldValue("membershipId", e.target.value),
                                                        onChangeValid: (e)=>setFieldValue("validIEEE", e),
                                                        errors: (0,formik__WEBPACK_IMPORTED_MODULE_3__.getIn)(errors, "membershipId") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_3__.getIn)(errors, "membershipId") : "",
                                                        vaildError: (0,formik__WEBPACK_IMPORTED_MODULE_3__.getIn)(errors, "validIEEE") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_3__.getIn)(errors, "validIEEE") : ""
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormInput__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                        label: "Section *",
                                                        placeholder: "Enter your institution",
                                                        value: values.section,
                                                        onChange: (e)=>setFieldValue("section", e.target.value),
                                                        errors: (0,formik__WEBPACK_IMPORTED_MODULE_3__.getIn)(errors, "section") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_3__.getIn)(errors, "section") : ""
                                                    })
                                                ]
                                            }) : null,
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_17___default().button),
                                                type: "submit",
                                                onClick: ()=>handleSubmit(),
                                                children: "SUBMIT"
                                            })
                                        ]
                                    })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
                                className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_17___default().footer),
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
        const price = await axios__WEBPACK_IMPORTED_MODULE_4___default().get( true ? "https://mint-forms.ieee-mint.org/api/form/formDetails?formId=indicon2022special" : 0);
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

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8594:
/***/ ((module) => {


var getStateList = [
    {
        label: "Andaman and Nicobar Islands",
        value: "Andaman and Nicobar Islands"
    },
    {
        label: "Andhra Pradesh",
        value: "Andhra Pradesh"
    },
    {
        label: "Arunachal Pradesh",
        value: "Arunachal Pradesh"
    },
    {
        label: "Assam",
        value: "Assam"
    },
    {
        label: "Bihar",
        value: "Bihar"
    },
    {
        label: "Chandigarh",
        value: "Chandigarh"
    },
    {
        label: "Chhattisgarh",
        value: "Chhattisgarh"
    },
    {
        label: "Dadra and Nagar Haveli",
        value: "Dadra and Nagar Haveli"
    },
    {
        label: "Daman and Diu",
        value: "Daman and Diu"
    },
    {
        label: "Delhi",
        value: "Delhi"
    },
    {
        label: "Goa",
        value: "Goa"
    },
    {
        label: "Gujarat",
        value: "Gujarat"
    },
    {
        label: "Haryana",
        value: "Haryana"
    },
    {
        label: "Himachal Pradesh",
        value: "Himachal Pradesh"
    },
    {
        label: "Jammu and Kashmir",
        value: "Jammu and Kashmir"
    },
    {
        label: "Jharkhand",
        value: "Jharkhand"
    },
    {
        label: "Karnataka",
        value: "Karnataka"
    },
    {
        label: "Kerala",
        value: "Kerala"
    },
    {
        label: "Ladakh",
        value: "Ladakh"
    },
    {
        label: "Lakshadweep",
        value: "Lakshadweep"
    },
    {
        label: "Madhya Pradesh",
        value: "Madhya Pradesh"
    },
    {
        label: "Maharashtra",
        value: "Maharashtra"
    },
    {
        label: "Manipur",
        value: "Manipur"
    },
    {
        label: "Meghalaya",
        value: "Meghalaya"
    },
    {
        label: "Mizoram",
        value: "Mizoram"
    },
    {
        label: "Nagaland",
        value: "Nagaland"
    },
    {
        label: "Odisha",
        value: "Odisha"
    },
    {
        label: "Puducherry",
        value: "Puducherry"
    },
    {
        label: "Punjab",
        value: "Punjab"
    },
    {
        label: "Rajasthan",
        value: "Rajasthan"
    },
    {
        label: "Sikkim",
        value: "Sikkim"
    },
    {
        label: "Tamil Nadu",
        value: "Tamil Nadu"
    },
    {
        label: "Telangana",
        value: "Telangana"
    },
    {
        label: "Tripura",
        value: "Tripura"
    },
    {
        label: "Uttar Pradesh",
        value: "Uttar Pradesh"
    },
    {
        label: "Uttarakhand",
        value: "Uttarakhand"
    },
    {
        label: "West Bengal",
        value: "West Bengal"
    }, 
];
module.exports = getStateList;


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

/***/ 1929:
/***/ ((module) => {

module.exports = require("react-select");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5609:
/***/ ((module) => {

module.exports = require("yup");

/***/ }),

/***/ 8680:
/***/ ((module) => {

module.exports = import("react-phone-number-input");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [427,174,704,834,265], () => (__webpack_exec__(6662)));
module.exports = __webpack_exports__;

})();