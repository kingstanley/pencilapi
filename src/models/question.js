const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    questionNo: {type:Number},
    annotations:{type: Array},
    // question: {type:String},
    
});
// QuestionSchema.index('question');
QuestionSchema.index('annotations');
module.exports = mongoose.model('question', QuestionSchema); 