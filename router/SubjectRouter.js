const express = require('express');
const router = express.Router();

const {createSubject ,getSubject ,updateSubject,deleteSubject } = require('../controllers/subjectController');
const authorization = require('../middlewares/authorization');
router.route('/create')
    .post(createSubject)

router.route('/')
    .get(getSubject)
router.route('/:id')
    .delete(deleteSubject)
    .put(updateSubject)

    module.exports = router