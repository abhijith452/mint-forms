"use strict";
exports.id = 354;
exports.ids = [354];
exports.modules = {

/***/ 4665:
/***/ ((module) => {


const foreign = 20;
const indian = 500;
function getExtraPagesPrice(values) {
    var numOfPages = str2num(values.extraPage1) + str2num(values.extraPage2) + str2num(values.extraPage3);
    if (values.category.includes("Indian")) {
        return indian * numOfPages;
    }
    if (values.category.includes("Foreign")) {
        return foreign * numOfPages;
    } else {
        return 0;
    }
}
function str2num(val) {
    if (isNaN(val)) {
        return 0;
    } else {
        return Number(val);
    }
}
function getNumOfAdditionalPages(values) {
    var numOfPages = str2num(values.extraPage1) + str2num(values.extraPage2) + str2num(values.extraPage3);
    return numOfPages;
}
function getSingleAdditionalPagePrice(values) {
    if (values.category.includes("Indian")) {
        return indian;
    }
    if (values.category.includes("Foreign")) {
        return foreign;
    } else {
        return 0;
    }
}
module.exports = {
    getExtraPagesPrice,
    getNumOfAdditionalPages,
    getSingleAdditionalPagePrice
};


/***/ }),

/***/ 8443:
/***/ ((module) => {


function getIndiconPrice(values) {
    var pricingEarlyBird = {
        indianAuthorAcadamic: [
            9000,
            10500
        ],
        indianAuthorIndustry: [
            10000,
            11500
        ],
        indianAuthorStudent: [
            7500,
            8500
        ],
        indianAttendee: [
            6000,
            7000
        ],
        foreignAuthor: [
            250,
            300
        ],
        foreignStudentAuthor: [
            200,
            250
        ],
        indianTest: [
            10,
            10
        ],
        foreignTest: [
            1,
            1
        ]
    };
    var pricingStandard = {
        indianAuthorAcadamic: [
            10000,
            11500
        ],
        indianAuthorIndustry: [
            11000,
            12500
        ],
        indianAuthorStudent: [
            8500,
            9500
        ],
        indianAttendee: [
            7000,
            8000
        ],
        foreignAuthor: [
            300,
            350
        ],
        foreignStudentAuthor: [
            250,
            300
        ],
        indianTest: [
            10,
            10
        ],
        foreignTest: [
            1,
            1
        ]
    };
    var pricingData = new Date().toISOString() > "2022-10-07T04:29:59.059Z" ? pricingStandard : pricingEarlyBird;
    if (values.category === "Indian Author (Academia)" && values.ieeeMember === "Yes") {
        return pricingData.indianAuthorAcadamic[0];
    }
    if (values.category === "Indian Author (Academia)" && values.ieeeMember === "No") {
        return pricingData.indianAuthorAcadamic[1];
    }
    if (values.category === "Indian Author (Industry)" && values.ieeeMember === "Yes") {
        return pricingData.indianAuthorIndustry[0];
    }
    if (values.category === "Indian Author (Industry)" && values.ieeeMember === "No") {
        return pricingData.indianAuthorIndustry[1];
    }
    if (values.category === "Indian Student Author" && values.ieeeMember === "Yes") {
        return pricingData.indianAuthorStudent[0];
    }
    if (values.category === "Indian Student Author" && values.ieeeMember === "No") {
        return pricingData.indianAuthorStudent[1];
    }
    if (values.category === "Foreign Author" && values.ieeeMember === "Yes") {
        return pricingData.foreignAuthor[0];
    }
    if (values.category === "Foreign Author" && values.ieeeMember === "No") {
        return pricingData.foreignAuthor[1];
    }
    if (values.category === "Foreign Student Author" && values.ieeeMember === "Yes") {
        return pricingData.foreignStudentAuthor[0];
    }
    if (values.category === "Foreign Student Author" && values.ieeeMember === "No") {
        return pricingData.foreignStudentAuthor[1];
    }
    if (values.category === "Indian Non-Author Attendee" && values.ieeeMember === "Yes") {
        return pricingData.indianAttendee[0];
    }
    if (values.category === "Indian Non-Author Attendee" && values.ieeeMember === "No") {
        return pricingData.indianAttendee[1];
    }
    if (values.category === "Foreign Test Category") {
        return pricingData.foreignTest[0];
    }
    if (values.category === "Indian Test Category") {
        return pricingData.indianTest[0];
    } else {
        return NaN;
    }
}
module.exports = getIndiconPrice;


/***/ }),

/***/ 1203:
/***/ ((module) => {


var additionalIndianPapers = [
    2000,
    3000
];
var additionalForeignPapers = [
    50,
    75
];
function getPaperSinglePrice(values) {
    if (Number(values.papers) > 1) {
        if (values.category.includes("Foreign")) {
            return new Date().toISOString() > "2022-10-07T04:29:59.059Z" ? additionalForeignPapers[1] : additionalForeignPapers[0];
        } else {
            return new Date().toISOString() > "2022-10-07T04:29:59.059Z" ? additionalIndianPapers[1] : additionalIndianPapers[0];
        }
    } else {
        return 0;
    }
}
function getPaperPrice(values) {
    if (Number(values.papers) > 1) {
        if (values.category.includes("Foreign")) {
            return (new Date().toISOString() > "2022-10-07T04:29:59.059Z" ? additionalForeignPapers[1] : additionalForeignPapers[0]) * (values.papers - 1);
        } else if (values.category.includes("Indian")) {
            return (new Date().toISOString() > "2022-10-07T04:29:59.059Z" ? additionalIndianPapers[1] : additionalIndianPapers[0]) * (values.papers - 1);
        } else {
            return 0;
        }
    } else {
        return 0;
    }
}
module.exports = {
    getPaperSinglePrice,
    getPaperPrice
};


/***/ })

};
;