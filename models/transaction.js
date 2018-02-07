const mongoose = require('mongoose');

//transaction schema
const transactionSchema = mongoose.Schema({
    price: {
        type: Number,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    type: {
        type: String
    },
    duration: {
        type: Date,
        default: Date.getDate + 2* price
    }
});

const transaction = exports.module = mongoose.model('Transaction', transactionSchema);