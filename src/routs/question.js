const router = require('express').Router();
const { saveQuestion, searchQuestion,query ,getAllTopics} = require('../controllers/question');

router.get('/search', (req, res) => {
    return searchQuestion(req, res);
});
router.get('/query', (req, res) => {
    return query(req, res);
});
router.post('/savequestion', (req, res) => {
    return saveQuestion(req, res);
})
router.get('/', (req, res) => {
     return res.json({message:'Welcome. To test the search route try this: "https://pencilapi.herokuapp.com/search?q=Biological Molecules"'})
 })
module.exports = router;