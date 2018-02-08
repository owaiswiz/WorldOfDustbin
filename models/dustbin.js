var mongoose = require("mongoose");

const DustbinSchema = mongoose.Schema({
    percentFull: {
        type: Number,
        default: 0
    },
    cash: {
        type: Number,
        default: 0
    },
    //transHistory: [transactionSchema],
    children: {
        type: Number,
        default: 0
    },
    parent: {
        type: String,
        default: "Admin"
    }
});

const Dustbin = module.exports = mongoose.model('Dustbin', DustbinSchema);