"use strict";
(() => {
var exports = {};
exports.id = 750;
exports.ids = [750];
exports.modules = {

/***/ 7856:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5196);
/* harmony import */ var _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_16__);
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
/* harmony import */ var _UI_Components_PhoneSelector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2558);
/* harmony import */ var _UI_Components_FormSelect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6412);
/* harmony import */ var _UI_Components_FormIEEE__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1322);
/* harmony import */ var _utils_getCountryList__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4723);
/* harmony import */ var _utils_getCountryList__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_utils_getCountryList__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_15__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_UI_Components_PhoneSelector__WEBPACK_IMPORTED_MODULE_11__]);
_UI_Components_PhoneSelector__WEBPACK_IMPORTED_MODULE_11__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

















const Form = (props)=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const { 0: errorMsg , 1: setErrorMsg  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const { 0: initialVal , 1: setIntialVal  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({
        name: "",
        email: "",
        phone: "",
        ieeeMember: "",
        membershipId: "",
        validIEEE: "",
        address: "",
        gender: "",
        country: "",
        state: "",
        pincode: "",
        food: "",
        institute: "",
        designation: "",
        papers: "1",
        paperId1: "",
        paperId2: "",
        passport: "",
        specialSession: ""
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
    let schema = yup__WEBPACK_IMPORTED_MODULE_15__.object().shape({
        name: yup__WEBPACK_IMPORTED_MODULE_15__.string().required(),
        email: yup__WEBPACK_IMPORTED_MODULE_15__.string().required().email(),
        phone: yup__WEBPACK_IMPORTED_MODULE_15__.string().required(),
        ieeeMember: yup__WEBPACK_IMPORTED_MODULE_15__.string().required(),
        validIEEE: yup__WEBPACK_IMPORTED_MODULE_15__.string().when("ieeeMember", {
            is: "Yes",
            then: yup__WEBPACK_IMPORTED_MODULE_15__.string().required("Verify membership ID")
        }),
        address: yup__WEBPACK_IMPORTED_MODULE_15__.string().required(),
        gender: yup__WEBPACK_IMPORTED_MODULE_15__.string().required(),
        country: yup__WEBPACK_IMPORTED_MODULE_15__.string().required(),
        state: yup__WEBPACK_IMPORTED_MODULE_15__.string().required(),
        food: yup__WEBPACK_IMPORTED_MODULE_15__.string().required(),
        pincode: yup__WEBPACK_IMPORTED_MODULE_15__.string().required(),
        institute: yup__WEBPACK_IMPORTED_MODULE_15__.string().required(),
        designation: yup__WEBPACK_IMPORTED_MODULE_15__.string().required(),
        paperId1: yup__WEBPACK_IMPORTED_MODULE_15__.string().when("papers", {
            is: (papers)=>Number(papers) > 0,
            then: yup__WEBPACK_IMPORTED_MODULE_15__.string().required()
        }),
        paperId2: yup__WEBPACK_IMPORTED_MODULE_15__.string().when("papers", {
            is: (papers)=>Number(papers) >= 2,
            then: yup__WEBPACK_IMPORTED_MODULE_15__.string().required()
        }),
        papers: yup__WEBPACK_IMPORTED_MODULE_15__.string().required(),
        membershipId: yup__WEBPACK_IMPORTED_MODULE_15__.string().when("ieeeMember", {
            is: "Yes",
            then: yup__WEBPACK_IMPORTED_MODULE_15__.string().required()
        }),
        specialSession: yup__WEBPACK_IMPORTED_MODULE_15__.string().required()
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
            const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().post("/api/form/addresponse?formId=indicon2022special", formData, {
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
        className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_16___default().form),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_9___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Indicon 2022"
                })
            }),
            loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_loader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    msg: "Don't refresh this page. Redirecting to payment processing service ..."
                })
            }) : new Date().toISOString() < props.expiryDate ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_16___default().formContainer),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_16___default().formBanner),
                        src: "/indicon2.png"
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
                                children: "INDICON 2022"
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
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_PhoneSelector__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                label: "Phone *",
                                                placeholder: "Enter your phone number",
                                                value: values.phone,
                                                onChange: (e)=>setFieldValue("phone", e),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "phone") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "phone") : ""
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
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormInput__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                label: "Permanent address *",
                                                placeholder: "Enter your permanent address",
                                                value: values.address,
                                                onChange: (e)=>setFieldValue("address", e.target.value),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "address") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "address") : ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormSelect__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                label: "Country *",
                                                options: (_utils_getCountryList__WEBPACK_IMPORTED_MODULE_14___default()),
                                                value: {
                                                    label: values.country,
                                                    value: values.country
                                                },
                                                onChange: (e)=>setFieldValue("country", e.value),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "country") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "country") : ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormInput__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                label: "State/Province *",
                                                placeholder: "Enter your state or province",
                                                value: values.state,
                                                onChange: (e)=>setFieldValue("state", e.target.value),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "state") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "state") : ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormInput__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                label: "Pincode *",
                                                placeholder: "Enter your pincode",
                                                value: values.pincode,
                                                onChange: (e)=>setFieldValue("pincode", e.target.value),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "pincode") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "pincode") : ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormInput__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                label: "Institute *",
                                                placeholder: "Enter your institution",
                                                value: values.institute,
                                                onChange: (e)=>setFieldValue("institute", e.target.value),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "institute") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "institute") : ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormInput__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                label: "Designation *",
                                                placeholder: "Enter your phone number",
                                                value: values.designation,
                                                onChange: (e)=>setFieldValue("designation", e.target.value),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "designation") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "designation") : ""
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
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormIEEE__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                label: "If yes, enter your membership ID",
                                                placeholder: "Enter your IEEE Membership ID ",
                                                value: values.membershipId,
                                                onChange: (e)=>setFieldValue("membershipId", e.target.value),
                                                onChangeValid: (e)=>setFieldValue("validIEEE", e),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "membershipId") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "membershipId") : "",
                                                vaildError: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "validIEEE") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "validIEEE") : ""
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
                                                label: "Number of papers*",
                                                options: [
                                                    "1",
                                                    "2"
                                                ],
                                                value: values.papers,
                                                onChange: (e)=>setFieldValue("papers", e),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "papers") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "papers") : ""
                                            }),
                                            Number(values.papers) > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormInput__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                    label: "Paper ID 1*",
                                                    placeholder: "Enter your paper id 1",
                                                    value: values.paperId1,
                                                    onChange: (e)=>setFieldValue("paperId1", e.target.value),
                                                    errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "paperId1") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "paperId1") : ""
                                                })
                                            }) : null,
                                            Number(values.papers) >= 2 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormInput__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                    label: "Paper ID 2*",
                                                    placeholder: "Enter your paper id 2",
                                                    value: values.paperId2,
                                                    onChange: (e)=>setFieldValue("paperId2", e.target.value),
                                                    errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "paperId2") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "paperId2") : ""
                                                })
                                            }) : null,
                                            values.category !== undefined && values.category.includes("Foreign") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormInput__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                label: "Passport number *",
                                                placeholder: "Enter your passport number",
                                                value: values.passport,
                                                onChange: (e)=>setFieldValue("passport", e.target.value),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "passport") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "passport") : ""
                                            }) : null,
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormSelect__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                label: "Special Selection *",
                                                options: [
                                                    {
                                                        value: "SS01",
                                                        label: "SS01"
                                                    },
                                                    {
                                                        value: "SS02",
                                                        label: "SS02"
                                                    },
                                                    {
                                                        value: "SS03",
                                                        label: "SS03"
                                                    },
                                                    {
                                                        value: "SS04",
                                                        label: "SS04"
                                                    },
                                                    {
                                                        value: "SS05",
                                                        label: "SS05"
                                                    },
                                                    {
                                                        value: "SS06",
                                                        label: "SS06"
                                                    },
                                                    {
                                                        value: "SS07",
                                                        label: "SS07"
                                                    },
                                                    {
                                                        value: "SS08",
                                                        label: "SS08"
                                                    }, 
                                                ],
                                                value: {
                                                    label: values.specialSession,
                                                    value: values.specialSession
                                                },
                                                onChange: (e)=>setFieldValue("specialSession", e.value),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "specialSession") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "specialSession") : ""
                                            }),
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
        const price = await axios__WEBPACK_IMPORTED_MODULE_3___default().get( true ? "https://mint-forms.ieee-mint.org/api/form/formDetails?formId=indicon2022special" : 0);
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
var __webpack_exports__ = __webpack_require__.X(0, [427,174,704,834,723], () => (__webpack_exec__(7856)));
module.exports = __webpack_exports__;

})();