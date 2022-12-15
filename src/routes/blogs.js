const express = require('express');
const router = express.Router();

const blogsController = require('../app/controllers/BlogsController');

router.get('/:slug', blogsController.show);
router.get('/', blogsController.index);


module.exports = router;
