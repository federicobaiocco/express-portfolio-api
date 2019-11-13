const Degree = require('../models/Degree').Degree;

async function createDegree(req, res, next) {
    try {
        const degree = new Degree({
            name: req.body.name,
            endDate: req.body.endDate,
            description: req.body.description
        });
        await degree.save();
        res.status(201).json(degree);
    }
    catch(err) {
        res.status(500).send(err.message);
    }
}
async function getDegrees(req, res, next) {
    try {
        const degree = await Degree.find({});
        res.status(200).json(degree);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function deleteDegree(req, res, next) {
    try {
        await Degree.findByIdAndDelete(req.params.id);
        res.status(204).send();
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}
module.exports = {
    createDegree,
    getDegrees,
    deleteDegree
};