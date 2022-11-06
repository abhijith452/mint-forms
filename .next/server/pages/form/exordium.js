(() => {
var exports = {};
exports.id = 7;
exports.ids = [7];
exports.modules = {

/***/ 5755:
/***/ ((module) => {

// Exports
module.exports = {
	"label": "styles_label__lyWsu",
	"input": "styles_input__DSFlA",
	"inputContainer": "styles_inputContainer__AqTCf",
	"container": "styles_container__13L02",
	"errorMsg": "styles_errorMsg__ut19c",
	"button": "styles_button__HC3pN",
	"loader": "styles_loader__B_0x2",
	"spin": "styles_spin__OpNet"
};


/***/ }),

/***/ 618:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5755);
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const FormPromoCode = ({ label , placeholder , value , onChange , codes , errors , vaildError ,  })=>{
    const { 0: verified , 1: setVerified  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { 0: disabled , 1: setDisabled  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: err , 1: setErr  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const handleValidId = ()=>{
        if (codes.some((item)=>item === state)) {
            setVerified(true);
            setErr("");
            setDisabled(true);
            onChange(state);
        } else {
            setErr("Invalid promocode");
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().inputContainer),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),
                children: label
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        placeholder: placeholder,
                        value: state,
                        disabled: disabled,
                        style: {
                            boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                            outlineColor: errors !== "" ? "red" : "#1479ff"
                        },
                        onChange: (e)=>setState(e.target.value),
                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().input)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        style: {
                            backgroundColor: verified ? "rgb(0, 231, 0)" : "var(--blue-secondary)"
                        },
                        onClick: ()=>{
                            if (!disabled) {
                                handleValidId();
                            }
                        },
                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),
                        children: verified ? "Verified" : "Verify"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().errorMsg),
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormPromoCode);


/***/ }),

/***/ 1153:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5196);
/* harmony import */ var _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _UI_Components_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7698);
/* harmony import */ var _UI_Components_FormIEEE__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1322);
/* harmony import */ var _UI_Components_FormInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7174);
/* harmony import */ var _UI_Components_FormOptions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7002);
/* harmony import */ var _UI_Components_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6248);
/* harmony import */ var _UI_Components_PhoneSelector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2558);
/* harmony import */ var _utils_buildForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9154);
/* harmony import */ var _utils_buildForm__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_utils_buildForm__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils_displayPaytm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3661);
/* harmony import */ var _utils_displayPaytm__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_utils_displayPaytm__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils_getExordiumPrice__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4498);
/* harmony import */ var _utils_getExordiumPrice__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_utils_getExordiumPrice__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _UI_Components_FormPromoCode__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(618);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_UI_Components_PhoneSelector__WEBPACK_IMPORTED_MODULE_11__]);
_UI_Components_PhoneSelector__WEBPACK_IMPORTED_MODULE_11__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

















const Form = (props)=>{
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { 0: errorMsg , 1: setErrorMsg  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { 0: initialVal , 1: setIntialVal  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({
        name: "",
        email: "",
        phone: "",
        institute: "",
        ieeeMember: "",
        validIEEE: "",
        food: "",
        accomodation: "",
        department: "",
        departmentOther: "",
        yearofstudy: "",
        category: "",
        promoCode: ""
    });
    // const [initialVal, setIntialVal] = useState({
    //   name: 'Test',
    //   email: 'abhijithkannan452@gmail.com',
    //   phone: '9778305645',
    //   institute: 'asdfs',
    //   ieeeMember: 'Yes',
    //   validIEEE: 'true',
    //   food: 'Veg',
    //   accomodation: 'Yes',
    //   department: 'EEE',
    //   departmentOther: '',
    //   yearofstudy: '1',
    //   category: '',
    //   promoCode: '',
    // });
    let schema = yup__WEBPACK_IMPORTED_MODULE_5__.object().shape({
        name: yup__WEBPACK_IMPORTED_MODULE_5__.string().required(),
        email: yup__WEBPACK_IMPORTED_MODULE_5__.string().required().email(),
        department: yup__WEBPACK_IMPORTED_MODULE_5__.string().required(),
        departmentOther: yup__WEBPACK_IMPORTED_MODULE_5__.string().when("department", {
            is: "Others",
            then: yup__WEBPACK_IMPORTED_MODULE_5__.string().required("Specify department")
        }),
        yearofstudy: yup__WEBPACK_IMPORTED_MODULE_5__.string().required(),
        phone: yup__WEBPACK_IMPORTED_MODULE_5__.string().required(),
        institute: yup__WEBPACK_IMPORTED_MODULE_5__.string().required(),
        ieeeMember: yup__WEBPACK_IMPORTED_MODULE_5__.string().required(),
        validIEEE: yup__WEBPACK_IMPORTED_MODULE_5__.string().when("ieeeMember", {
            is: "Yes",
            then: yup__WEBPACK_IMPORTED_MODULE_5__.string().required("Verify membership ID")
        }),
        food: yup__WEBPACK_IMPORTED_MODULE_5__.string().required(),
        accomodation: yup__WEBPACK_IMPORTED_MODULE_5__.string().required(),
        category: yup__WEBPACK_IMPORTED_MODULE_5__.string().required(),
        promoCode: yup__WEBPACK_IMPORTED_MODULE_5__.string()
    });
    const getCategory = (values)=>{
        if (values.validIEEE === "true" && values.promoCode === "NEWIEEE23") {
            return [
                "IEEE Member Rs 499"
            ];
        }
        return values.validIEEE === "true" ? [
            "IEEE Member Rs 649"
        ] : [
            "Non-IEEE Member Rs 799"
        ];
    };
    const PriceUpdater = ()=>{
        const { values , setFieldValue  } = (0,formik__WEBPACK_IMPORTED_MODULE_2__.useFormikContext)();
        const didMount = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(false);
        (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
            if (didMount.current) {
                if (values.promoCode === "NEWIEEE23" && values.validIEEE === "true") {
                    setFieldValue("category", "IEEE Member Rs 499");
                }
            } else {
                didMount.current = true;
            }
        }, [
            values.promoCode,
            values.validIEEE
        ]);
    };
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
            data.amount = JSON.stringify({
                currency: "INR",
                amount: (0,_utils_getExordiumPrice__WEBPACK_IMPORTED_MODULE_14__.getExordiumTotalPrice)((0,_utils_getExordiumPrice__WEBPACK_IMPORTED_MODULE_14__.getExordiumPrice)(values)),
                fee: ((0,_utils_getExordiumPrice__WEBPACK_IMPORTED_MODULE_14__.getExordiumTotalPrice)((0,_utils_getExordiumPrice__WEBPACK_IMPORTED_MODULE_14__.getExordiumPrice)(values)) - (0,_utils_getExordiumPrice__WEBPACK_IMPORTED_MODULE_14__.getExordiumPrice)(values)).toFixed(2),
                ownerAmt: (0,_utils_getExordiumPrice__WEBPACK_IMPORTED_MODULE_14__.getExordiumPrice)(values)
            });
            const formData = _utils_buildForm__WEBPACK_IMPORTED_MODULE_12___default()(data);
            const res = await axios__WEBPACK_IMPORTED_MODULE_1___default().post("/api/pay/paytm?formId=exordium", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            _utils_displayPaytm__WEBPACK_IMPORTED_MODULE_13___default()(res.data);
        } catch (err) {
            handleAxiosError(err);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_16___default().form),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "EXORDIUM 2.0"
                })
            }),
            loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_loader__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    msg: "Don't refresh this page. Redirecting to payment processing service ..."
                })
            }) : new Date().toISOString() < props.expiryDate ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_16___default().formContainer),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_16___default().formBanner),
                        src: "/form banners/exordium.png"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_16___default().formDetails),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_16___default().subTitle),
                                children: "REGISTRATION FORM"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_16___default().formTitle),
                                children: "EXORDIUM 2.0"
                            })
                        ]
                    }),
                    error ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_error__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        setError: setError,
                        msg: errorMsg
                    }) : null,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_16___default().formContent),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
                                initialValues: initialVal,
                                validationSchema: schema,
                                onSubmit: (values)=>handleUpload(values),
                                children: ({ values , errors , handleSubmit , setFieldValue  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormInput__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                label: "Full name *",
                                                placeholder: "Enter your name",
                                                value: values.name,
                                                onChange: (e)=>setFieldValue("name", e.target.value),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "name") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "name") : ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormInput__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                label: "Email *",
                                                placeholder: "Enter your email",
                                                value: values.email,
                                                onChange: (e)=>setFieldValue("email", e.target.value),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "email") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "email") : ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormOptions__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                label: "Department*",
                                                options: [
                                                    "ECE",
                                                    "EEE",
                                                    "IT",
                                                    "Mech",
                                                    "Civil",
                                                    "Others"
                                                ],
                                                value: values.department,
                                                onChange: (e)=>setFieldValue("department", e),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "department") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "department") : ""
                                            }),
                                            values.department === "Others" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormInput__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                label: "Specify department *",
                                                placeholder: "Enter your department",
                                                value: values.departmentOther,
                                                onChange: (e)=>setFieldValue("departmentOther", e.target.value),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "departmentOther") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "departmentOther") : ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_PhoneSelector__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                label: "Phone *",
                                                placeholder: "Enter your phone number",
                                                value: values.phone,
                                                onChange: (e)=>setFieldValue("phone", e),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "phone") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "phone") : ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormInput__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                label: "Institute *",
                                                placeholder: "Enter your institution",
                                                value: values.institute,
                                                onChange: (e)=>setFieldValue("institute", e.target.value),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "institute") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "institute") : ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormOptions__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                label: "Year of Study *",
                                                options: [
                                                    "1",
                                                    "2",
                                                    "3",
                                                    "4", 
                                                ],
                                                value: values.yearofstudy,
                                                onChange: (e)=>setFieldValue("yearofstudy", e),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "yearofstudy") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "yearofstudy") : ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormOptions__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                label: "Do you want accomodation ? *",
                                                options: [
                                                    "Yes",
                                                    "No"
                                                ],
                                                value: values.accomodation,
                                                onChange: (e)=>setFieldValue("accomodation", e),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "accomodation") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "accomodation") : ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormOptions__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                label: "Food preference *",
                                                options: [
                                                    "Veg",
                                                    "Non Veg"
                                                ],
                                                value: values.food,
                                                onChange: (e)=>setFieldValue("food", e),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "food") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "food") : ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormOptions__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                label: "Are you an IEEE Member*",
                                                options: [
                                                    "Yes",
                                                    "No"
                                                ],
                                                value: values.ieeeMember,
                                                onChange: (e)=>setFieldValue("ieeeMember", e),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "ieeeMember") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "ieeeMember") : ""
                                            }),
                                            values.ieeeMember === "Yes" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormIEEE__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                label: "If yes, enter your membership ID",
                                                placeholder: "Enter your IEEE Membership ID ",
                                                value: values.membershipId,
                                                onChange: (e)=>setFieldValue("membershipId", e.target.value),
                                                onChangeValid: (e)=>{
                                                    setFieldValue("validIEEE", e);
                                                },
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "membershipId") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "membershipId") : "",
                                                vaildError: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "validIEEE") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "validIEEE") : ""
                                            }) : null,
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormOptions__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                label: "Category *",
                                                options: getCategory(values),
                                                value: values.category,
                                                onChange: (e)=>setFieldValue("category", e),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "category") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "category") : ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormPromoCode__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                                label: "Promocode",
                                                placeholder: "Enter your promocode (if any)",
                                                value: values.promoCode,
                                                onChange: (e)=>setFieldValue("promoCode", e),
                                                codes: [
                                                    "NEWIEEE23"
                                                ],
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "promoCode") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "promoCode") : "",
                                                vaildError: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "validIEEE") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "validIEEE") : ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PriceUpdater, {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_16___default().breakDownLabel),
                                                children: "Amount based on chosen catgory"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_16___default().singlePrice),
                                                children: (0,_utils_getExordiumPrice__WEBPACK_IMPORTED_MODULE_14__.getExordiumPrice)(values)
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                                className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_16___default().priceLabel),
                                                children: [
                                                    "Total amount (",
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("i", {
                                                        children: [
                                                            " ",
                                                            "2.2%",
                                                            " convenience fee and 18% GST included"
                                                        ]
                                                    }),
                                                    ")"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                                className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_16___default().price),
                                                children: [
                                                    `Rs `,
                                                    (0,_utils_getExordiumPrice__WEBPACK_IMPORTED_MODULE_14__.getExordiumTotalPrice)((0,_utils_getExordiumPrice__WEBPACK_IMPORTED_MODULE_14__.getExordiumPrice)(values))
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_16___default().button),
                                                type: "submit",
                                                onClick: ()=>handleSubmit(),
                                                children: "SUBMIT"
                                            })
                                        ]
                                    })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
                                className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_16___default().footer),
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
        const price = await axios__WEBPACK_IMPORTED_MODULE_1___default().get( true ? "https://mint-forms.ieee-mint.org/api/form/formDetails?formId=exordium" : 0);
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

/***/ 4498:
/***/ ((module) => {

"use strict";

function getExordiumPrice(values) {
    if (values.promoCode === "NEWIEEE23") {
        return values.validIEEE === "true" ? 499 : 799;
    } else {
        return values.validIEEE === "true" ? 649 : 799;
    }
}
function getExordiumTotalPrice(amount, values) {
    var gst = amount * 0.18;
    var feePercent = 0.022;
    var fee = feePercent * amount;
    var feeGST = fee * 0.18;
    return (amount + fee + feeGST).toFixed(2);
}
module.exports = {
    getExordiumPrice,
    getExordiumTotalPrice
};


/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 2296:
/***/ ((module) => {

"use strict";
module.exports = require("formik");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5609:
/***/ ((module) => {

"use strict";
module.exports = require("yup");

/***/ }),

/***/ 8680:
/***/ ((module) => {

"use strict";
module.exports = import("react-phone-number-input");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [978,174,704,711,427,661], () => (__webpack_exec__(1153)));
module.exports = __webpack_exports__;

})();