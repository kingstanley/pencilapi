const router = require('express').Router();
const { saveTopic } = require('../controllers/topic');

router.post('/', (req, res) => {
    return saveTopic(req, res);
});

// router.post('/savequestion', (req, res) => {
//     return saveQuestion(req, res);
// })

module.exports = router;