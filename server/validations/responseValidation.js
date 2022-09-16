const yup = require('yup');

const responseSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  phone: yup.string().required(),
  address: yup.string().required(),
  gender: yup.string().required(),
  country: yup.string().required(),
  state: yup.string().required(),
  food: yup.string().required(),
  pincode: yup.string().required(),
  ieeeMember: yup.string().required('Are you an IEEE Member is required'),
  validIEEE: yup.string().when('ieeeMember', {
    is: 'Yes',
    then: yup.string().required("Enter a valid IEEE Membership ID"),
  }),
  institute: yup.string().required(),
  designation: yup.string().required(),
  category: yup.string().required('Select a category'),
  papers: yup.string().required('Number of papers is required'),
  paperId1: yup.string().when('papers', {
    is: (papers) => Number(papers) > 0,
    then: yup.string().required('ID of the paper 1 is required'),
  }),
  extraPage1: yup.string().when('papers', {
    is: (papers) => Number(papers) > 0,
    then: yup.string().required('Select the extra page for paper 1'),
  }),
  paperId2: yup.string().when('papers', {
    is: (papers) => Number(papers) >= 2,
    then: yup.string().required('ID of the paper 2 is required'),
  }),
  extraPage2: yup.string().when('papers', {
    is: (papers) => Number(papers) >= 2,
    then: yup.string().required('Select the extra page for paper 2'),
  }),
  paperId3: yup.string().when('papers', {
    is: (papers) => Number(papers) >= 3,
    then: yup.string().required('ID of the paper 3 is required'),
  }),
  extraPage3: yup.string().when('papers', {
    is: (papers) => Number(papers) >= 3,
    then: yup.string().required('Select the extra page for paper 3'),
  }),
  amount: yup.string().required('Select a category'),
  membershipId: yup.string().when('ieeeMember', {
    is: 'Yes',
    then: yup.string().required(),
  }),
  passport: yup.string().when('category', {
    is: (category) => category !== undefined && category.includes('Foreign'),
    then: yup.string().required(),
  }),
});

module.exports = responseSchema;
