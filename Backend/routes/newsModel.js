const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    author: String,
    content: {
        type: String,
        required: true
    },
    description: String,
    imageUrl: String
});

const News = mongoose.model('News', newsSchema);

module.exports = News;