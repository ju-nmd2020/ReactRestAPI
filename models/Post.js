const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({       
    brand: {
        type: String,
        required: true,
    },

})

module.exports = mongoose.model('Post', PostSchema)