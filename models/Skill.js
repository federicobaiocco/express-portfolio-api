const mongoose = require("../config/mongooseConnection");
const Schema = mongoose.Schema;

const skillSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    percentage: {
        type: Number,
        required: true
    }
}, {
    collection: 'Skills'
});

const skillModel = mongoose.model("Skills", skillSchema);
module.exports.Skill = skillModel;