const { Thought, User } = require('../models');
const { db } = require('../models/User');

const thoughtController = {
    addThought({ params, body }, res) {
        console.log(body);
        Thought.create(body)
            .then(({ _id }) => {
                return Thought.findOneAndUpdate(
                    { _id: params.userId },
                    { $push: { thoughts: _id } },
                    { new: true }
                );
            })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this ID!' })
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => res.json(err));
    },

    addReaction({ params, body }, res) {
        Thought.findOneAndUpdate(
            { _id: params.thoughtId },
            { $push: { reactions: body } },
            { new: true, runValidators: true }
        )
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this ID!' })
                    return;
                }
                res.json(dbUserData)
            })
            .catch(err => res.json(err));
    },
    //remove thought

    //remove reaction
};

module.exports = thoughtController;