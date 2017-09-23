const{ObjectID}=require('mongodb')
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {user} = require('./../server/models/user');

// Todo.remove({}).then((result)=>{
//   console.log(result);
// })

// Todo.findOneAndRemove({_id:'59c683e491588502a5508041'}).then((todo)=>{
//
// })
Todo.findByIdAndRemove('59c683e491588502a5508041').then((todo)=>{
  console.log(todo);
})
