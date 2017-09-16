var mongoose=require('mongoose');

var Todo=mongoose.model('Todo',{
  text:{
    type:String,
    required:true,
    minLength:1,
    trim:true
  },
  completed:{
    type:Boolean,
    default:false
  },
  completedAt:{
    type:Number,
    default:null
  }
})

module.exports={Todo};
// var newTodo=new Todo({
//   text:'Cook Dinner'
// })
//
//
// newTodo.save().then((doc)=>{
//   console.log('Saved Todo',doc)
// },(e)=>{
//   console.log('Unable To save')
// })
//
//
// var newTodo2=new Todo({
//   text:'Something to do'
//   // text:'My Todo',
//   // completed:false,
//   // completedAt:25
// })
//
// newTodo2.save().then((doc)=>{
//   console.log('Saved Todo2',doc)
// },(e)=>{
//   console.log('unable to save Todo2',e)
// })
