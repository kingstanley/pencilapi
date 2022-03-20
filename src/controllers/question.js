const questionModel = require('../models/question');
const topic = require('../models/topic');
const topicModel = require('../models/topic');

const saveQuestion = async(req, res) => {
    const question = req.body;
    // console.log("question",question)
    const saved = await questionModel.insertMany(question);
    return res.status(201).json(saved);
}
/**
 * A function that fetches the decendants of a topic passed via query parameter q and find every question containing any of its decendants in its annotations
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const searchQuestion = async (req, res) => {
    const query = req.query.q;
    const topics = await(await topicModel.find({ path: { $regex: query, $options: 'i' } })).map((topic) => topic['topic']);
    const questions = await questionModel.find({ annotations: { $in: topics } },{questionNo:1,_id:0});
     
    
    return res.json(questions);
}
/**
 * A function that fetches a topic (passed via query parameter q) with its decendants and find every question containing the topic or any of its decendants in its annotations. Returns the list of questions found
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const query =async (req, res) => {
    const query = req.query.q; 
    let topics = await (await topicModel.find({
        $or: [{ path: { $regex: query, $options: 'i' } },
        { topic: query }]
    }, { topic: 1, _id: 0 })).map((topic) => topic['topic']);
    const questions = await questionModel.find({annotations: { $in: topics }},{questionNo:1,_id:0}); 
    return res.json(questions);
}
module.exports.saveQuestion = saveQuestion;
module.exports.searchQuestion = searchQuestion;
module.exports.query = query; 
 