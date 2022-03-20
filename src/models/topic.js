const mongoose = require('mongoose');
 
const TopicSchema = new mongoose.Schema(
   { topic: String,
    path: String}
);
TopicSchema.index('topic');
TopicSchema.index('path')
module.exports = mongoose.model('topic', TopicSchema);

