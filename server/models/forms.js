const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const applicantSchema = new Schema(
  {
    formId: { type: String },
    name: { type: String },
    banner: { type: String },
    title: { type: String },
    description: { type: String },
    venue: { type: String },
    eventDate: { type: String },
    pricing: { type: Object },
    members: { type: Array },
    specific: { type: Object },
    splitInfo: { type: Object },
    expiryDate:{ type: String },
    earlybird:{ type: String },
    responses: [Object],
  },
  { timestamps: true }
);

const Applicant = mongoose.model('Form', applicantSchema);
module.exports = Applicant;
