const express = require('express');
const router = express.Router();
const ExperienceController = require('../controllers/ExperienceController');
const DegreeController = require('../controllers/DegreeController');
const SkillController = require('../controllers/SkillController');

router.get('/experiences', ExperienceController.getExperiences);
router.get('/degrees', DegreeController.getDegrees);
router.get('/skills', SkillController.getSkills);

router.post('/experience', ExperienceController.createExperience);
router.post('/degree', DegreeController.createDegree);
router.post('/skill', SkillController.createSkill);

router.delete('/experience/:id', ExperienceController.deleteExperience);
router.delete('/degree/:id', DegreeController.deleteDegree);
router.delete('/skill/:id', SkillController.deleteSkill);

module.exports = router;