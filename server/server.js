var express=require('express')
var bodyparser=require('body-parser')
var {mongoose}=require('./db/mongoose')

var {Todo}=require('./models/todo')
var {user}=require('./models/user')
const{ObjectID}=require('mongodb')
var app=express();

const port=process.env.PORT || 3000;
app.use(bodyparser.json());
app.post('/todos',(req,res)=>{
//console.log(req.body)
var todo=new Todo({
  text:req.body.text,
  completed:req.body.completed
});
todo.save().then((doc)=>{
res.send(doc)
},(e)=>{
  res.status(400).send(e)
});
});

app.get('/todos',(req,res)=>{
  Todo.find().then((todos)=>{
    res.send({todos})
  },(e)=>{
res.status(400).send(e);
  });
});

app.get('/todos/:id',(req,res)=>{

var id=req.params.id;
if(ObjectID.isValid(id))
{

  Todo.findById(id).then((todo)=>{
if(todo){
res.send({todo})
}
else{
  return res.status(404).send();
}
  }).catch((e)=>{
     res.status(400).send();
  })
}
else
  {
  return  res.status(404).send();
  }

})
app.listen(port,()=>{
  console.log(`Started on port ${port}`)
});

module.exports={app};
//save new Something
