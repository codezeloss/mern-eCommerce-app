const {Schema, model} = require("mongoose")

const EnquirySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "Submitted",
        enum: ["Submitted", "Contacted", "In Progress"]
    }
}, {
    timestamps: true
})

const Enquiry = model('Enquiry', EnquirySchema)

module.exports = Enquiry