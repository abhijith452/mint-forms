"use strict";
(() => {
var exports = {};
exports.id = 262;
exports.ids = [262];
exports.modules = {

/***/ 4758:
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
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2296);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _UI_Components_FormOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7002);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _UI_Components_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7698);
/* harmony import */ var _UI_Components_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6248);
/* harmony import */ var _utils_getEmergencePrice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(900);
/* harmony import */ var _utils_getEmergencePrice__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_utils_getEmergencePrice__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_getDistrictList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9044);
/* harmony import */ var _utils_getDistrictList__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_utils_getDistrictList__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_buildForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9154);
/* harmony import */ var _utils_buildForm__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_utils_buildForm__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_displayPaytm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3661);
/* harmony import */ var _utils_displayPaytm__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_utils_displayPaytm__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _UI_Components_PhoneSelector__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2558);
/* harmony import */ var _UI_Components_FormSelect__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6412);
/* harmony import */ var _UI_Components_FormIEEE__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1322);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_16__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_UI_Components_PhoneSelector__WEBPACK_IMPORTED_MODULE_13__]);
_UI_Components_PhoneSelector__WEBPACK_IMPORTED_MODULE_13__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


















const Form = (props)=>{
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const { 0: errorMsg , 1: setErrorMsg  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const { 0: initialVal , 1: setIntialVal  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({
        name: "",
        email: "",
        gender: "",
        district: "",
        phone: "",
        institute: "",
        ieeeMember: "",
        validIEEE: "",
        workshop: "",
        iv: "",
        food: "",
        accomodation: "",
        ieee: "",
        ias: "false",
        category: "",
        promocode: ""
    });
    // const [initialVal, setIntialVal] = useState({
    //   name: 'test',
    //   email: 'abhijithkannan452@gmail.com',
    //   gender: 'Male',
    //   district: 'India',
    //   phone: '+917025263554',
    //   institute: 'CEK',
    //   ieeeMember: 'No',
    //   validIEEE: '',
    //   workshop: 'Project Development Workshop',
    //   iv: 'ALIND Switchgear Indsutries, Mannar',
    //   food: 'Veg',
    //   accomodation: 'Yes',
    //   ieee: '',
    //   ias: 'false',
    // });
    let schema = yup__WEBPACK_IMPORTED_MODULE_16__.object().shape({
        name: yup__WEBPACK_IMPORTED_MODULE_16__.string().required(),
        email: yup__WEBPACK_IMPORTED_MODULE_16__.string().required().email(),
        gender: yup__WEBPACK_IMPORTED_MODULE_16__.string().required(),
        district: yup__WEBPACK_IMPORTED_MODULE_16__.string().required(),
        phone: yup__WEBPACK_IMPORTED_MODULE_16__.string().required(),
        institute: yup__WEBPACK_IMPORTED_MODULE_16__.string().required(),
        ieeeMember: yup__WEBPACK_IMPORTED_MODULE_16__.string().required(),
        validIEEE: yup__WEBPACK_IMPORTED_MODULE_16__.string().when("ieeeMember", {
            is: "Yes",
            then: yup__WEBPACK_IMPORTED_MODULE_16__.string().required("Verify membership ID")
        }),
        workshop: yup__WEBPACK_IMPORTED_MODULE_16__.string().required(),
        iv: yup__WEBPACK_IMPORTED_MODULE_16__.string().required(),
        food: yup__WEBPACK_IMPORTED_MODULE_16__.string().required(),
        ias: yup__WEBPACK_IMPORTED_MODULE_16__.string(),
        ieee: yup__WEBPACK_IMPORTED_MODULE_16__.string(),
        accomodation: yup__WEBPACK_IMPORTED_MODULE_16__.string().required(),
        category: yup__WEBPACK_IMPORTED_MODULE_16__.string().required(),
        promocode: yup__WEBPACK_IMPORTED_MODULE_16__.string()
    });
    const getCategory = (values)=>{
        if (values.ias === "true") {
            return new Date().toISOString() < props.earlybird ? [
                "IAS Member Rs 450"
            ] : [
                "IAS Member Rs 600"
            ];
        } else if (values.validIEEE === "true") {
            return new Date().toISOString() < props.earlybird ? [
                "IEEE Member Rs 550"
            ] : [
                "IEEE Member Rs 700"
            ];
        } else {
            return new Date().toISOString() < props.earlybird ? [
                "Non-IEEE Member Rs 700"
            ] : [
                "Non-IEEE Member Rs 850"
            ];
        }
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
                amount: (0,_utils_getEmergencePrice__WEBPACK_IMPORTED_MODULE_8__.getEmergenceTotalPrice)((0,_utils_getEmergencePrice__WEBPACK_IMPORTED_MODULE_8__.getEmergencePrice)(values, props.earlybird)),
                fee: ((0,_utils_getEmergencePrice__WEBPACK_IMPORTED_MODULE_8__.getEmergenceTotalPrice)((0,_utils_getEmergencePrice__WEBPACK_IMPORTED_MODULE_8__.getEmergencePrice)(values, props.earlybird)) - (0,_utils_getEmergencePrice__WEBPACK_IMPORTED_MODULE_8__.getEmergencePrice)(values, props.earlybird)).toFixed(2),
                ownerAmt: (0,_utils_getEmergencePrice__WEBPACK_IMPORTED_MODULE_8__.getEmergencePrice)(values, props.earlybird)
            });
            const formData = _utils_buildForm__WEBPACK_IMPORTED_MODULE_10___default()(data);
            const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().post("/api/pay/paytm?formId=emergence", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            _utils_displayPaytm__WEBPACK_IMPORTED_MODULE_12___default()(res.data);
        } catch (err) {
            handleAxiosError(err);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_17___default().form),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_11___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "EMERGENCE 2.0"
                })
            }),
            loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_loader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    msg: "Don't refresh this page. Redirecting to payment processing service ..."
                })
            }) : new Date().toISOString() < props.expiryDate ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_17___default().formContainer),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_17___default().formBanner),
                        src: "/emergence.webp"
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
                                children: "EMERGENCE 2.0"
                            })
                        ]
                    }),
                    error ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_error__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        setError: setError,
                        msg: errorMsg
                    }) : null,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_17___default().formContent),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {
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
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "name") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "name") : ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormInput__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                label: "Email *",
                                                placeholder: "Enter your email",
                                                value: values.email,
                                                onChange: (e)=>setFieldValue("email", e.target.value),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "email") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "email") : ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormOptions__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                label: "Gender*",
                                                options: [
                                                    "Male",
                                                    "Female"
                                                ],
                                                value: values.gender,
                                                onChange: (e)=>setFieldValue("gender", e),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "gender") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "gender") : ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormSelect__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                                label: "District *",
                                                options: (_utils_getDistrictList__WEBPACK_IMPORTED_MODULE_9___default()),
                                                value: {
                                                    label: values.district,
                                                    value: values.district
                                                },
                                                onChange: (e)=>setFieldValue("district", e.value),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "district") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "district") : ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_PhoneSelector__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                label: "Phone *",
                                                placeholder: "Enter your phone number",
                                                value: values.phone,
                                                onChange: (e)=>setFieldValue("phone", e),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "phone") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "phone") : ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormInput__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                label: "Institute *",
                                                placeholder: "Enter your institution",
                                                value: values.institute,
                                                onChange: (e)=>setFieldValue("institute", e.target.value),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "institute") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "institute") : ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormOptions__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                label: "Workshop Preference *",
                                                options: [
                                                    "Rapid Prototyping"
                                                ],
                                                value: values.workshop,
                                                onChange: (e)=>setFieldValue("workshop", e),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "workshop") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "workshop") : ""
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                children: [
                                                    "Introduction to PVsyst (Seat filled) ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    "IOT Candle Workshop (Seat filled)",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormOptions__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                label: "IV Preference *",
                                                options: [
                                                    "ALIND Switchgear Indsutries, Mannar",
                                                    "TRACO Cable Company, Thiruvalla", 
                                                ],
                                                value: values.iv,
                                                onChange: (e)=>setFieldValue("iv", e),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "iv") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "iv") : ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormOptions__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                label: "Do you want accomodation ? *",
                                                options: [
                                                    "Yes",
                                                    "No"
                                                ],
                                                value: values.accomodation,
                                                onChange: (e)=>setFieldValue("accomodation", e),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "accomodation") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "accomodation") : ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormOptions__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                label: "Food preference *",
                                                options: [
                                                    "Veg",
                                                    "Non Veg"
                                                ],
                                                value: values.food,
                                                onChange: (e)=>setFieldValue("food", e),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "food") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "food") : ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormOptions__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                label: "Are you an IEEE Member*",
                                                options: [
                                                    "Yes",
                                                    "No"
                                                ],
                                                value: values.ieeeMember,
                                                onChange: (e)=>setFieldValue("ieeeMember", e),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "ieeeMember") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "ieeeMember") : ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormIEEE__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                                                label: "If yes, enter your membership ID",
                                                placeholder: "Enter your IEEE Membership ID ",
                                                value: values.membershipId,
                                                onChange: (e)=>setFieldValue("membershipId", e.target.value),
                                                onChangeValid: (e, SocietyList)=>{
                                                    setFieldValue("validIEEE", e);
                                                    setFieldValue("ias", SocietyList.includes("MEMIA034") ? "true" : "false");
                                                    setFieldValue("ieee", SocietyList);
                                                },
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "membershipId") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "membershipId") : "",
                                                vaildError: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "validIEEE") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "validIEEE") : ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormOptions__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                label: "Category *",
                                                options: getCategory(values),
                                                value: values.category,
                                                onChange: (e)=>setFieldValue("category", e),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "category") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "category") : ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormInput__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                label: "Promo code *",
                                                placeholder: "Enter promo code",
                                                value: values.promocode,
                                                onChange: (e)=>setFieldValue("promocode", e.target.value),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "promocode") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "promocode") : ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_17___default().breakDownLabel),
                                                children: "Amount based on chosen catgory"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_17___default().singlePrice),
                                                children: (0,_utils_getEmergencePrice__WEBPACK_IMPORTED_MODULE_8__.getEmergencePrice)(values, props.earlybird)
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                                className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_17___default().priceLabel),
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
                                                className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_17___default().price),
                                                children: [
                                                    `Rs `,
                                                    (0,_utils_getEmergencePrice__WEBPACK_IMPORTED_MODULE_8__.getEmergenceTotalPrice)((0,_utils_getEmergencePrice__WEBPACK_IMPORTED_MODULE_8__.getEmergencePrice)(values, props.earlybird))
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
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
        const price = await axios__WEBPACK_IMPORTED_MODULE_3___default().get( true ? "https://mint-forms.ieee-mint.org/api/form/formDetails?formId=emergence" : 0);
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

/***/ 9044:
/***/ ((module) => {


const districtList = [
    {
        value: "Alappuzha",
        label: "Alappuzha"
    },
    {
        value: "Ernakulam",
        label: "Ernakulam"
    },
    {
        value: "Idukki",
        label: "Idukki"
    },
    {
        value: "Kannur",
        label: "Kannur"
    },
    {
        value: "Kasaragod",
        label: "Kasaragod"
    },
    {
        value: "Kollam",
        label: "Kollam"
    },
    {
        value: "Kottayam",
        label: "Kottayam"
    },
    {
        value: "Kozhikode",
        label: "Kozhikode"
    },
    {
        value: "Malappuram",
        label: "Malappuram"
    },
    {
        value: "Palakkad",
        label: "Palakkad"
    },
    {
        value: "Pathanamthitta",
        label: "Pathanamthitta"
    },
    {
        value: "Thiruvananthapuram",
        label: "Thiruvananthapuram"
    },
    {
        value: "Thrissur",
        label: "Thrissur"
    },
    {
        value: "Wayanad",
        label: "Wayanad"
    }, 
];
module.exports = districtList;


/***/ }),

/***/ 900:
/***/ ((module) => {


const pricing = {
    nonIEEE: [
        700,
        850
    ],
    IEEE: [
        550,
        700
    ],
    IAS: [
        450,
        600
    ]
};
function getEmergencePrice(val, earlyBirdLastDate) {
    var index = new Date().toISOString() > earlyBirdLastDate ? 1 : 0;
    if (val.category === "IAS Member Rs 450" || val.category === "IAS Member Rs 600") {
        return pricing.IAS[index];
    }
    if (val.category === "IEEE Member Rs 550" || val.category === "IEEE Member Rs 700") {
        return pricing.IEEE[index];
    } else if (val.category === "Non-IEEE Member Rs 700" || val.category === "Non-IEEE Member Rs 850") {
        return pricing.nonIEEE[index];
    } else {
        return 0;
    }
}
function getEmergenceTotalPrice(amount, values) {
    var gst = amount * 0.18;
    var feePercent = 0.022;
    var fee = feePercent * amount;
    var feeGST = fee * 0.18;
    return (amount + fee + feeGST).toFixed(2);
}
module.exports = {
    getEmergencePrice,
    getEmergenceTotalPrice
};


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
var __webpack_exports__ = __webpack_require__.X(0, [427,174,704,615,412,661], () => (__webpack_exec__(4758)));
module.exports = __webpack_exports__;

})();