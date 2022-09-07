const yup = require('yup');

const responseSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  phone: yup.string().required(),
  ieeeMember: yup.string().required("Are you an IEEE Member is required"),
  institute: yup.string().required(),
  designation: yup.string().required(),
  category: yup.string().required("Select a category"),
  paperId: yup.string().required("ID of the paper is required"),
  papers: yup.string().required("Number of papers is required"),
  amount:yup.string().required("Select a category"),
  membershipId: yup.string(),
});

module.exports = responseSchema;
