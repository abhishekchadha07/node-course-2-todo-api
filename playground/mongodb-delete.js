//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err)
  {
  return  console.log('Unable to connect to mongodb server');
  }
  console.log('connected to mongodb server');

// //deletemany
// db.collection('TodoApp').deleteMany({text:'eat lunch'}).then((result)=>{
//   console.log(result)
// })
// //deleteone
// db.collection('TodoApp').deleteOne({text:'Eat lunch'}).then((result)=>{
//   console.log(result)
// })
// //findone and delete
// db.collection('TodoApp').findOneAndDelete({completed:false}).then((result)=>{
//   console.log(result)
// })

// db.collection('Users').deleteMany({name:'Abhishek'}).then((result)=>{
//    console.log(result)
//  })

db.collection('Users').findOneAndDelete({
_id:new ObjectID('59af04df800e07187c08e853')
}).then((result)=>{
  console.log(result)
})

  //db.close();
});
