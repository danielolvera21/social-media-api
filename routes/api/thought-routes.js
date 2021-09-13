const router = require('express').Router();
const { addThought, getThought, removeThought, addReaction, removeReaction } = require('../../controllers/thought-controllers');

// /api/thoughts
router
    .route('/api/thoughts')
    .get(getThought)
    .post(addThought)

router
    .route('/api/thoughts/:thoughtId')
    //.get(getThoughtById)
    //.put(updateThought)
    .delete(removeThought)

// /api/thoughts/:thoughtId/reactions
router
    .route('/api/thoughts/:thoughtId/reactions')
    .post(addReaction)
    .delete(removeReaction)

module.exports = router;
