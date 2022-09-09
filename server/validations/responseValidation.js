const yup = require('yup');

const responseSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  phone: yup.string().required(),
  ieeeMember: yup.string().required('Are you an IEEE Member is required'),
  institute: yup.string().required(),
  designation: yup.string().required(),
  category: yup.string().required('Select a category'),
  papers: yup.string().required('Number of papers is required'),
  paperId1: yup.string().required('ID of the paper 1 is required'),
  paperId2: yup.string().when('papers', {
    is: (papers) => Number(papers) >= 2,
    then: yup.string().required('ID of the paper 2 is required'),
  }),
  paperId3: yup.string().when('papers', {
    is: (papers) => Number(papers) >= 3,
    then: yup.string().required('ID of the paper 3 is required'),
  }),
  amount: yup.string().required('Select a category'),
  membershipId: yup.string().when('ieeeMember', {
    is: 'Yes',
    then: yup.string().required(),
  }),
});

module.exports = responseSchema;
