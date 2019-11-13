const Skill = require('../models/Skill').Skill;

async function createSkill(req, res, next) {
    try {
        const skill = new Skill({
            name: req.body.name,
            percentage: req.body.percentage
        });
        await skill.save();
        res.status(201).json(skill);
    }
    catch(err) {
        console.error(err.message);
        res.status(500).send(err.message);
    }
}
async function getSkills(req, res, next) {
    try {
        const skill = await Skill.find({});
        res.status(200).json(skill);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function deleteSkill(req, res, next) {
    try {
        await Skill.findByIdAndDelete(req.params.id);
        res.status(204).send();
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}
module.exports = {
    createSkill,
    getSkills,
    deleteSkill
};