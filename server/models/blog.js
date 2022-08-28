const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String
    },
    snippet: {
        type: String
    }
}, { timestamps: true })

const Blog = mongoose.model('Payment',blogSchema)
module.exports = Blog;