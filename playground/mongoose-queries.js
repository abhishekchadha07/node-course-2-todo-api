const{ObjectID}=require('mongodb')
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {user} = require('./../server/models/user');
// var id='59beb7deeb66d24d5cef631f1';
//
// if(!ObjectID.isValid(id)){
//   console.log('Id Not Valid')
// }
//
// Todo.find({
//   _id:id
// }).then((todos)=>{
//   console.log('Todos',todos)
// })
//
// Todo.findOne({
//   _id:id
// }).then((todo)=>{
//   console.log('Todo',todo)
// })
//
// Todo.findById(id).then((todo)=>{
//   if(!todo){
//   return  console.log('Id Not Found');
//   }
//   console.log('Todo By id',todo)
// }).catch((e)=>console.log(e));

var id='59bc2b0e137ff90904166ee2';

user.findById(id).then((users)=>{
  if(!users){
    console.log('User Not found')
  }
  console.log('users',users)
},(e)=>{
  console.log(e)
});
