const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const responseSchema = new Schema(
  {
    formId: {
      type: String,
      required: true,
    },
    responseId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true,strict: false },

);

const Blog = mongoose.model('Response', responseSchema);
module.exports = Blog;
