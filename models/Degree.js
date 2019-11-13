const mongoose = require("../config/mongooseConnection");
const Schema = mongoose.Schema;

const degreeSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: false
    },
    endDate: {
        type: Date,
        required: false
    }
}, {
    collection: 'Degrees'
});

const degreeModel = mongoose.model("Degrees", degreeSchema);
module.exports.Degree = degreeModel;