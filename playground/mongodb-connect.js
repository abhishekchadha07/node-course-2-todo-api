const MongoClient=require('mongodb').MongoClient;

// var user={name:'Abhishek',age:25};
// var {name}=user;
// console.log(name);

// const {MongoClient,ObjectID}=require('mongodb');
// var Obj=new ObjectID();
// console.log(Obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err)
  {
  return  console.log('Unable to connect to mongodb server');
  }
  console.log('connected to mongodb server');

// db.collection('TodoApp').insertOne({
// text:'Something to do',
// completed:false
// },(err,result)=>{
//   if(err)
//   {
//   return  console.log('Unable to insert to do',err);
//   }
//   console.log(JSON.stringify(result.ops,undefined,2))
// })

// db.collection('Users').insertOne({
//   //_id:123,
//   name:'Abhishek',
//   age:25,
//   location:'India'
// },(err,result)=>{
//   if(err){
//   return console.log('unable to insert user',err);
//   }
// //  console.log(JSON.stringify(result.ops,undefined,2))
// //  console.log(JSON.stringify(result.ops[0]._id,undefined,2))
//     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2))
// })
//
  db.close();
});
