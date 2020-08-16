const { model, Schema } = require('mongoose');

const bugSchema = new Schema({
    status: String,
    priority: String,
    description: String
});

// Create and export the Bug Model using Mongoose's model() method
module.exports = model('Bug', bugSchema);