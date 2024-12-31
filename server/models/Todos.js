import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tag:{
        type: String,
        default: "general"
    },
    date: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model("Todo", TodoSchema)