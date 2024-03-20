const router = require('express').Router();
const User = require('../../models/User');

// prepend with /api/delete
router.delete('/:id', (req, res) => {
    User.destroy({
        where: { id: req.params.id }
    })
        .then(num => {
            if (num == 1) {
                res.send({ message: "user deleted sucessfully!" });
            } else {
                res.send({ message: `cannot delete user with id=${req.params.id}. maybe user was not found` });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `error deleting id=${req.params.id}`
            });
        });
});

module.exports = router