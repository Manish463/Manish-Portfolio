import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
    title: String,
    content: String,
    link: String,
    image: String,
})

export default mongoose.model('project', projectSchema)