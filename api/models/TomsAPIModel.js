'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

var FeedbackSchema = new Schema({
  name: {
    type: String,
    required: 'BTW Who you is?'
  },
  comment: {
    type: [{
      type: String,
      required: 'Write something here.'
    }]
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'live']
    }],
    default: ['pending']
  },
  created_date: {
    type: Date,
    default: Date.now
  }
});


module.exports = mongoose.model('Tasks', TaskSchema);
module.exports = mongoose.model('Feedbacks', FeedbackSchema);