var mongoose = require ("mongoose");
var worktable = new mongoose.Schema({
  
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    district:{
        type:String,
    },
    state:{
        type:String,
    },
    contact:{
        type:String,
    },
    address:{
        type:String,
    },
   
});
module.exports = mongoose.model("Table", worktable)