const mongoose = require("mongoose")

const customerPackageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    mrp: {
        type: Number,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    company: {
        type: mongoose.Types.ObjectId,
        ref: "company",
    },
    active: {
        type: Boolean,
        default: false,
    },
    hero: {
        type: String,
        required: true,
    },

}, { timestamps: true })

module.exports = mongoose.models.customerPackage || mongoose.model("customerPackage", customerPackageSchema)

