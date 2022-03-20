const express = require('express');
const authorization = require('../middlewares/authorization');
const router = express.Router();
const { createCourse, getCourse } = require('../controllers/CourseController');

router.route('/create')
    .post(createCourse)
router.route('/')
    .get(getCourse)
module.exports = router
