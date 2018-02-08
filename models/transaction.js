const mongoose = require('mongoose');

//transaction schema
const transactionSchema = mongoose.Schema({
    price: {
        type: Number,
        required: true
    },
    created: {
        type: Date,
        default: Date.now()
    },
    type: {
        type: String
    },
    duration: {
        type: Date,
        //default:  
    }
});

const transaction = module.exports = mongoose.model('Transaction', transactionSchema);