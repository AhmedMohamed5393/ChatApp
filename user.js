var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username:{
    type: String,
    unique: true,
    required: true,
    minlength: 5,
    maxlength: 50,
    trim: true
  },
  password:{
    type: String,
    required: true,
    minlength: 2,
    maxlength: 1024
  }
})

var Users = mongoose.model("users", UserSchema);
module.exports = Users;


