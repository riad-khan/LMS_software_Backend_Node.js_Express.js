const express = require('express');
const authorization = require('../middlewares/authorization');
const router = express.Router();
const {createNotice,getCourseNotices} = require('../controllers/NoticeController')

router.route('/:id')
    .get(getCourseNotices);

router.route('/create')
    .post(createNotice);

module.exports = router