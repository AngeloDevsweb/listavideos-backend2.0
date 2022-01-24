const {Router} = require('express')
const router = Router()

const {getVideo, getVideoOne, createVideo, deleteVideo, putVideo}= require('../controllers/video.controller')

router.route('/')
    .get(getVideo)
    .post(createVideo)

router.route('/:id')
    .get(getVideoOne)
    .put(putVideo)
    .delete(deleteVideo)

module.exports = router;