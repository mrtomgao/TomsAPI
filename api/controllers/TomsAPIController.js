'use strict';


var mongoose = require('mongoose'),
  Task = mongoose.model('Tasks');

var goose = require('mongoose'), 
  Feedback = mongoose.model('Feedbacks');

exports.create_a_feedback = function(req, res) {
  var new_feedback = new Feedback(req.body);
  new_feedback.save(function(err, feedback) {
    if (err)
      res.send(err);
    res.json(feedback);
  });
};

exports.list_all_feedback = function(req, res) {
  Feedback.find({}, function(err, feedback) {
    if (err)
      res.send(err);
    res.json(feedback);
  });
};


exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.list_all_tasks = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.read_a_task = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_task = function(req, res) {


  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};

