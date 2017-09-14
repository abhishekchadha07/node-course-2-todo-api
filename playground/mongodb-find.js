//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err)
  {
  return  console.log('Unable to connect to mongodb server');
  }
  console.log('connected to mongodb server');

// db.collection('TodoApp').find({
// //  completed:false
// _id:new ObjectID('59af0124f2cdc41e4c246a3c')
// }).toArray().then((docs)=>{
// console.log('Todos');
// console.log(JSON.stringify(docs,undefined,2));
// },(err)=>{
//   console.log('unable to fetch data',err)
// })

// db.collection('TodoApp').find().count().then((count)=>{
// console.log(`Todos :${count}`);
// },(err)=>{
//   console.log('unable to fetch data',err)
// })

db.collection('Users').find({
 name:'Abhishek'
}).toArray().then((docs)=>{
console.log('Todos');
console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
  console.log('unable to fetch data',err)
})

  //db.close();
});
