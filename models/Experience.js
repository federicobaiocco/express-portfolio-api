const mongoose = require("../config/mongooseConnection");
const Schema = mongoose.Schema;

const experienceSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {
    collection: 'Experiences'
});

const experienceModel = mongoose.model("Experiences", experienceSchema);
module.exports.Experience = experienceModel;