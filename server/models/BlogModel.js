const {Schema, model} = require("mongoose");

const BlogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    numViews: {
        type: Number,
        default: 0
    },
    isLiked: {
        type: Boolean,
        default: false
    },
    isDisliked: {
        type: Boolean,
        default: false
    },
    likes: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    dislikes: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    image: {
        type: String,
        default: "https://www.theedublogger.com/files/2019/03/10-Minute-Weekly-Blogging-Plan-tasqn3-prizg4-1080x720.jpeg"
    },
    author: {
        type: String,
        default: "Admin"
    }
    },
    {
        toJSON: {
            virtuals: true
        },
        toObject: {
            virtuals: true
        },
        timestamps: true
    }
)

const Blog = model("Blog", BlogSchema)

module.exports = Blog