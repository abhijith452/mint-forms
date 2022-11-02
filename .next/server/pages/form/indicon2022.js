"use strict";
(() => {
var exports = {};
exports.id = 738;
exports.ids = [738];
exports.modules = {

/***/ 4211:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(5196);
/* harmony import */ var _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_20__);
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
/* harmony import */ var _utils_getIndiconPrice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8443);
/* harmony import */ var _utils_getIndiconPrice__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_utils_getIndiconPrice__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_getPaperPrice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1203);
/* harmony import */ var _utils_getPaperPrice__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_utils_getPaperPrice__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_getExtraPagesPrice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4665);
/* harmony import */ var _utils_getExtraPagesPrice__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_utils_getExtraPagesPrice__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_getTotalPrice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7635);
/* harmony import */ var _utils_getTotalPrice__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_utils_getTotalPrice__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_buildForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9154);
/* harmony import */ var _utils_buildForm__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_utils_buildForm__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils_displayPaytm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3661);
/* harmony import */ var _utils_displayPaytm__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_utils_displayPaytm__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _UI_Components_PhoneSelector__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(2558);
/* harmony import */ var _UI_Components_FormSelect__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6412);
/* harmony import */ var _UI_Components_FormIEEE__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1322);
/* harmony import */ var _utils_getCountryList__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(4723);
/* harmony import */ var _utils_getCountryList__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_utils_getCountryList__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_19__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_UI_Components_PhoneSelector__WEBPACK_IMPORTED_MODULE_15__]);
_UI_Components_PhoneSelector__WEBPACK_IMPORTED_MODULE_15__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





















const Form = (props)=>{
    const { 0: authorPrice , 1: setAuthorPrice  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(9000);
    const { 0: addPapers , 1: setAddPapers  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);
    const { 0: pages , 1: setPages  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);
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
        category: "",
        papers: "1",
        paperId1: "",
        extraPage1: "",
        paperId2: "",
        extraPage2: "",
        paperId3: "",
        extraPage3: "",
        passport: ""
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
    //   category: 'Indian Author (Academia)',
    //   paperId1: 'asdas',
    //   extraPage1: 'Not applicable',
    //   paperId2: '',
    //   extraPage2: '',
    //   paperId3: '',
    //   extraPage3: '',
    //   papers: '1',
    // });
    let schema = yup__WEBPACK_IMPORTED_MODULE_19__.object().shape({
        name: yup__WEBPACK_IMPORTED_MODULE_19__.string().required(),
        email: yup__WEBPACK_IMPORTED_MODULE_19__.string().required().email(),
        phone: yup__WEBPACK_IMPORTED_MODULE_19__.string().required(),
        ieeeMember: yup__WEBPACK_IMPORTED_MODULE_19__.string().required(),
        validIEEE: yup__WEBPACK_IMPORTED_MODULE_19__.string().when("ieeeMember", {
            is: "Yes",
            then: yup__WEBPACK_IMPORTED_MODULE_19__.string().required("Verify membership ID")
        }),
        address: yup__WEBPACK_IMPORTED_MODULE_19__.string().required(),
        gender: yup__WEBPACK_IMPORTED_MODULE_19__.string().required(),
        country: yup__WEBPACK_IMPORTED_MODULE_19__.string().required(),
        state: yup__WEBPACK_IMPORTED_MODULE_19__.string().required(),
        food: yup__WEBPACK_IMPORTED_MODULE_19__.string().required(),
        pincode: yup__WEBPACK_IMPORTED_MODULE_19__.string().required(),
        institute: yup__WEBPACK_IMPORTED_MODULE_19__.string().required(),
        designation: yup__WEBPACK_IMPORTED_MODULE_19__.string().required(),
        category: yup__WEBPACK_IMPORTED_MODULE_19__.string().required(),
        paperId1: yup__WEBPACK_IMPORTED_MODULE_19__.string().when("papers", {
            is: (papers)=>Number(papers) > 0,
            then: yup__WEBPACK_IMPORTED_MODULE_19__.string().required()
        }),
        extraPage1: yup__WEBPACK_IMPORTED_MODULE_19__.string().when("papers", {
            is: (papers)=>Number(papers) > 0,
            then: yup__WEBPACK_IMPORTED_MODULE_19__.string().required("Required")
        }),
        paperId2: yup__WEBPACK_IMPORTED_MODULE_19__.string().when("papers", {
            is: (papers)=>Number(papers) >= 2,
            then: yup__WEBPACK_IMPORTED_MODULE_19__.string().required()
        }),
        extraPage2: yup__WEBPACK_IMPORTED_MODULE_19__.string().when("papers", {
            is: (papers)=>Number(papers) >= 2,
            then: yup__WEBPACK_IMPORTED_MODULE_19__.string().required()
        }),
        paperId3: yup__WEBPACK_IMPORTED_MODULE_19__.string().when("papers", {
            is: (papers)=>Number(papers) >= 3,
            then: yup__WEBPACK_IMPORTED_MODULE_19__.string().required()
        }),
        extraPage3: yup__WEBPACK_IMPORTED_MODULE_19__.string().when("papers", {
            is: (papers)=>Number(papers) >= 3,
            then: yup__WEBPACK_IMPORTED_MODULE_19__.string().required("Required")
        }),
        papers: yup__WEBPACK_IMPORTED_MODULE_19__.string().required(),
        membershipId: yup__WEBPACK_IMPORTED_MODULE_19__.string().when("ieeeMember", {
            is: "Yes",
            then: yup__WEBPACK_IMPORTED_MODULE_19__.string().required()
        }),
        passport: yup__WEBPACK_IMPORTED_MODULE_19__.string().when("category", {
            is: (category)=>category !== undefined && category.includes("Foreign"),
            then: yup__WEBPACK_IMPORTED_MODULE_19__.string().required()
        })
    });
    const PriceUpdater = ()=>{
        const { values , setFieldValue  } = (0,formik__WEBPACK_IMPORTED_MODULE_2__.useFormikContext)();
        const didMount = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(false);
        (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
            if (didMount.current) {
                if (values.papers === "Not applicable") {
                    setFieldValue("paperId1", "");
                    setFieldValue("paperId2", "");
                    setFieldValue("paperId3", "");
                    setFieldValue("extraPage1", "");
                    setFieldValue("extraPage2", "");
                    setFieldValue("extraPage3", "");
                }
                if (Number(values.papers) === 1) {
                    setFieldValue("paperId2", "");
                    setFieldValue("paperId3", "");
                    setFieldValue("extraPage2", "");
                    setFieldValue("extraPage3", "");
                }
                if (Number(values.papers) === 2) {
                    setFieldValue("paperId3", "");
                    setFieldValue("extraPage3", "");
                }
                setAuthorPrice(_utils_getIndiconPrice__WEBPACK_IMPORTED_MODULE_8___default()(values));
                setAddPapers((0,_utils_getPaperPrice__WEBPACK_IMPORTED_MODULE_9__.getPaperPrice)(values));
                setPages((0,_utils_getExtraPagesPrice__WEBPACK_IMPORTED_MODULE_10__.getExtraPagesPrice)(values));
                console.log((0,_utils_getPaperPrice__WEBPACK_IMPORTED_MODULE_9__.getPaperPrice)(values));
            } else {
                didMount.current = true;
            }
        }, [
            values.papers,
            values.ieeeMember,
            values.category,
            values.extraPage1,
            values.extraPage2,
            values.extraPage3, 
        ]);
    };
    // async function displayRazorPay(data: any, values: any) {
    //   const res = await loadScript();
    //   if (!res) {
    //     alert('Razorpay SDK failed to load. Are you online?');
    //     return;
    //   }
    //   const options = {
    //     key: data.key,
    //     currency: data.currency,
    //     amount: String(data.amount),
    //     order_id: data.id,
    //     name: 'Indicon 2022',
    //     description: 'Thank you for registering',
    //     handler: async (response: any) => {
    //       try {
    //         await axios.post(
    //           `/api/pay/razorpay/verify?formId=indicon2022&orderId=${response.razorpay_order_id}`,
    //           response
    //         );
    //         router.push(`/confirmation/${response.razorpay_order_id}`);
    //       } catch (err: any) {
    //         setError(true);
    //         setErrorMsg(
    //           err.response !== undefined ? err.response.data.error : err
    //         );
    //         setLoading(false);
    //       }
    //     },
    //     prefill: {
    //       name: `${values.name}`,
    //       email: values.email,
    //       contact: `${values.phone}`,
    //     },
    //   };
    //   const paymentObject = new (window as any).Razorpay(options);
    //   paymentObject.open();
    //   paymentObject.on('payment.failed', async (response: any) => {
    //     try {
    //       await axios.post(
    //         `/api/pay/razorpay/failed?formId=indicon2022`,
    //         response.error
    //       );
    //       router.push(`/confirmation/${response.error.metadata.order_id}`);
    //       paymentObject.close();
    //     } catch (err: any) {
    //       setError(true);
    //       setErrorMsg(err.response !== undefined ? err.response.data.error : err);
    //       setLoading(false);
    //     }
    //   });
    // }
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
            data.membershipType = values.ieeeMember ? "IEEE Member" : "Non IEEE Member";
            data.amount = JSON.stringify({
                currency: values.category.includes("Foreign") ? "USD" : "INR",
                amount: _utils_getTotalPrice__WEBPACK_IMPORTED_MODULE_11___default()(authorPrice + addPapers + pages, values),
                fee: _utils_getTotalPrice__WEBPACK_IMPORTED_MODULE_11___default()(authorPrice + addPapers + pages, values) - Number(((authorPrice + addPapers + pages) * 1.18).toFixed(2)),
                ownerAmt: Number(((authorPrice + addPapers + pages) * 1.18).toFixed(2))
            });
            const formData = _utils_buildForm__WEBPACK_IMPORTED_MODULE_12___default()(data);
            // if (values.category.includes('Foreign')) {
            //   const res = await axios.post(
            //     '/api/pay/razorpay?formId=indicon2022',
            //     formData,
            //     {
            //       headers: {
            //         'Content-Type': 'multipart/form-data',
            //       },
            //     }
            //   );
            //   displayRazorPay(res.data, values);
            // } else {
            const res = await axios__WEBPACK_IMPORTED_MODULE_3___default().post("/api/pay/paytm?formId=indicon2022", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            _utils_displayPaytm__WEBPACK_IMPORTED_MODULE_14___default()(res.data);
        // }
        } catch (err) {
            handleAxiosError(err);
        }
    };
    const catgory =  true ? [
        "Indian Author (Academia)",
        "Indian Author (Industry)",
        "Indian Student Author",
        "Indian Non-Author Attendee",
        "Foreign Author",
        "Foreign Student Author", 
    ] : 0;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_20___default().form),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_13___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Indicon 2022"
                })
            }),
            loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_loader__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                    msg: "Don't refresh this page. Redirecting to payment processing service ..."
                })
            }) : new Date().toISOString() < props.expiryDate ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_20___default().formContainer),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_20___default().formBanner),
                        src: "/indicon2.png"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_20___default().formDetails),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_20___default().subTitle),
                                children: "REGISTRATION FORM"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_20___default().formTitle),
                                children: "INDICON 2022"
                            })
                        ]
                    }),
                    error ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_error__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        setError: setError,
                        msg: errorMsg
                    }) : null,
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_20___default().formContent),
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
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_PhoneSelector__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
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
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormSelect__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                                                label: "Country *",
                                                options: (_utils_getCountryList__WEBPACK_IMPORTED_MODULE_18___default()),
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
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormIEEE__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {
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
                                                    "2",
                                                    "3",
                                                    "Not applicable"
                                                ],
                                                value: values.papers,
                                                onChange: (e)=>setFieldValue("papers", e),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "papers") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "papers") : ""
                                            }),
                                            Number(values.papers) > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormInput__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                        label: "Paper ID 1*",
                                                        placeholder: "Enter your paper id 1",
                                                        value: values.paperId1,
                                                        onChange: (e)=>setFieldValue("paperId1", e.target.value),
                                                        errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "paperId1") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "paperId1") : ""
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormOptions__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                        label: "Whether the paper 1 has exceed the 6 page limit ? if yes by how many extra pages ?*",
                                                        options: [
                                                            "Not applicable",
                                                            "1",
                                                            "2"
                                                        ],
                                                        value: values.extraPage1,
                                                        onChange: (e)=>setFieldValue("extraPage1", e),
                                                        errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "extraPage1") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "extraPage1") : ""
                                                    })
                                                ]
                                            }) : null,
                                            Number(values.papers) >= 2 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormInput__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                        label: "Paper ID 2*",
                                                        placeholder: "Enter your paper id 2",
                                                        value: values.paperId2,
                                                        onChange: (e)=>setFieldValue("paperId2", e.target.value),
                                                        errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "paperId2") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "paperId2") : ""
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormOptions__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                        label: "Whether the paper 2 has exceed the 6 page limit ? if yes by how many extra pages ?*",
                                                        options: [
                                                            "Not applicable",
                                                            "1",
                                                            "2"
                                                        ],
                                                        value: values.extraPage2,
                                                        onChange: (e)=>setFieldValue("extraPage2", e),
                                                        errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "extraPage2") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "extraPage2") : ""
                                                    })
                                                ]
                                            }) : null,
                                            Number(values.papers) >= 3 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormInput__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                        label: "Paper ID 3*",
                                                        placeholder: "Enter your paper id 3",
                                                        value: values.paperId3,
                                                        onChange: (e)=>setFieldValue("paperId3", e.target.value),
                                                        errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "paperId3") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "paperId3") : ""
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormOptions__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                        label: "Whether the paper 3 has exceed the 6 page limit ? if yes by how many extra pages ?*",
                                                        options: [
                                                            "Not applicable",
                                                            "1",
                                                            "2"
                                                        ],
                                                        value: values.extraPage3,
                                                        onChange: (e)=>setFieldValue("extraPage3", e),
                                                        errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "extraPage3") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "extraPage3") : ""
                                                    })
                                                ]
                                            }) : null,
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormOptions__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                label: "Category *",
                                                options: catgory,
                                                value: values.category,
                                                onChange: (e)=>setFieldValue("category", e),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "category") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "category") : ""
                                            }),
                                            values.category !== undefined && values.category.includes("Foreign") ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_Components_FormInput__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                label: "Passport number *",
                                                placeholder: "Enter your passport number",
                                                value: values.passport,
                                                onChange: (e)=>setFieldValue("passport", e.target.value),
                                                errors: (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "passport") !== undefined ? (0,formik__WEBPACK_IMPORTED_MODULE_2__.getIn)(errors, "passport") : ""
                                            }) : null,
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PriceUpdater, {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_20___default().breakDownLabel),
                                                children: "Amount based on chosen catgory"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                                className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_20___default().singlePrice),
                                                children: [
                                                    values.category.includes("Foreign") ? "$ " : "Rs ",
                                                    authorPrice
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_20___default().breakDownLabel),
                                                children: "Amount based on number of the additional papers"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                                className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_20___default().singlePrice),
                                                children: [
                                                    `${(0,_utils_getPaperPrice__WEBPACK_IMPORTED_MODULE_9__.getPaperSinglePrice)(values)} * ${isNaN(values.papers) ? 0 : Number(values.papers) - 1} = `,
                                                    values.category.includes("Foreign") ? "$ " : "Rs ",
                                                    addPapers
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_20___default().breakDownLabel),
                                                children: "Amount based on additional pages for each paper"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                                className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_20___default().singlePrice),
                                                children: [
                                                    `${(0,_utils_getExtraPagesPrice__WEBPACK_IMPORTED_MODULE_10__.getSingleAdditionalPagePrice)(values)} * ${(0,_utils_getExtraPagesPrice__WEBPACK_IMPORTED_MODULE_10__.getNumOfAdditionalPages)(values)} = `,
                                                    values.category.includes("Foreign") ? "$ " : "Rs ",
                                                    pages
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_20___default().breakDownLabel),
                                                children: "Amount to be paid"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                                className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_20___default().singlePrice),
                                                children: [
                                                    values.category.includes("Foreign") ? "$ " : "Rs ",
                                                    authorPrice + addPapers + pages
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                                className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_20___default().priceLabel),
                                                children: [
                                                    "Total amount (",
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("i", {
                                                        children: [
                                                            "18% GST and",
                                                            " ",
                                                            values.category.includes("Foreign") ? "3.2%" : "2.2%",
                                                            " ",
                                                            "convenience fee included"
                                                        ]
                                                    }),
                                                    ")"
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                                className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_20___default().price),
                                                children: [
                                                    values.category.includes("Foreign") ? "$ " : "Rs ",
                                                    _utils_getTotalPrice__WEBPACK_IMPORTED_MODULE_11___default()(authorPrice + addPapers + pages, values)
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_20___default().button),
                                                type: "submit",
                                                onClick: ()=>handleSubmit(),
                                                children: "SUBMIT"
                                            })
                                        ]
                                    })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
                                className: (_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_20___default().footer),
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
        const price = await axios__WEBPACK_IMPORTED_MODULE_3___default().get( true ? "https://mint-forms.ieee-mint.org/api/form/formDetails?formId=indicon2022" : 0);
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
var __webpack_exports__ = __webpack_require__.X(0, [427,174,704,615,412,661,723,713], () => (__webpack_exec__(4211)));
module.exports = __webpack_exports__;

})();