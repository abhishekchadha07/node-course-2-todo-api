//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err)
  {
  return  console.log('Unable to connect to mongodb server');
  }
  console.log('connected to mongodb server');

// db.collection('TodoApp').findOneAndUpdate({
//   _id:new ObjectID('59bad0482785fa7243b5cfd9')
// },{
//   $set:{
//     complete:false
//   }
// },{
//   returnOriginal:false
// }).then((result)=>{
//   console.log(result);
// })

db.collection('Users').findOneAndUpdate({
  name:'Akshay'
},{
  $inc:{
age:1
  }
},{
  returnOriginal:false
}).then((result)=>{
  console.log(result);
})

  //db.close();
});
