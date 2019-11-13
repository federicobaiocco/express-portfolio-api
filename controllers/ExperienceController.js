const Experience = require('../models/Experience').Experience;

async function createExperience(req, res, next) {
    try {
        const experience = new Experience({
            name: req.body.name,
            image: req.body.image,
            description: req.body.description
        });
        await experience.save();
        res.status(201).json(experience);
    }
    catch(err) {
        res.status(500).send(err.message);
    }
}
async function getExperiences(req, res, next) {
    try {
        const experience = await Experience.find({});
        res.status(200).json(experience);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function deleteExperience(req, res, next) {
    try {
        await Experience.findByIdAndDelete(req.params.id);
        res.status(204).send();
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

module.exports = {
    createExperience,
    getExperiences,
    deleteExperience
};