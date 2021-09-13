const router = require('express').Router();
const { addThought, getThought, removeThought, addReaction, removeReaction } = require('../../controllers/thought-controllers');

// /api/thoughts
router
    .route('/thoughts')
    .get(getThought)
    .post(addThought)

router
    .route('/thoughts/:thoughtId')
    //.get(getThoughtById)
    //.put(updateThought)
    .delete(removeThought)

// /api/thoughts/:thoughtId/reactions
router
    .route('/thoughts/:thoughtId/reactions')
    .post(addReaction)
    .delete(removeReaction)

module.exports = router;
