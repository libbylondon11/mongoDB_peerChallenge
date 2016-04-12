var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var newAssignment=new Schema({
  ID: {type: Number, unique: true},
  name: String,
  assignmentNumber:{type: Number, required: true, unique: true},
  score: {type: Number, required: true},
  dateCompleted: {type: Date, required: true},
});

var Assignments=mongoose.model('Assignments', newAssignment);

module.exports=Assignments;
