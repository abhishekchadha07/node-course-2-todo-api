var mongoose=require('mongoose');

var user=mongoose.model('user',{
  Email:{
    type:String,
  required:true,
  minLength:5
  }
})

// var userTodo=new user({
//   Email:'abhishekchadha37@yahoo.in'
// })
//
// userTodo.save().then((doc)=>{
//   console.log('Saved Email',doc)
// },(e)=>{
//   console.log('Unable to Save Email',e)
// })
module.exports={user};
