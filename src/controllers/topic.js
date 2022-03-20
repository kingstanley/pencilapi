const topicModel = require('../models/topic');
const {topics} = require('../topic_with_path');
const saveTopic = async (req, res) => {
    const topic = req.body; 
    const saved = await topicModel.insertMany(topics);
     ;
    return res.json(saved)
}

module.exports.saveTopic = saveTopic;