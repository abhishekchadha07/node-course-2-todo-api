const {ObjectID}=require('mongodb')
const {Todo}=require('./../../models/todo');
const {User}=require('./../../models/user');
const jwt=require('jsonwebtoken')
const userOneId=new ObjectID();
const userTwoId=new ObjectID();
const users=[{
_id:userOneId,
email:'abhishekchadha37@yahoo.in',
password:'userOnepass',
tokens:[{
  access:'auth',
  token:jwt.sign({_id:userOneId,access:'auth'},'abc123').toString()
}]
},{
  _id:userTwoId,
  email:'abhi@yahoo.in',
  password:'userTwopass',

}]


const todos=[{
  _id:new ObjectID(),
  text:'First test Todo'
},{
  _id:new ObjectID(),
  text:'Sexond test todo',
  completed:true,
  completedAt:55
}];


const populateUsers=(done)=>{
  User.remove({}).then(()=>{
    var userOne=new User(users[0]).save();
    var userTwo=new User(users[1]).save();

    return Promise.all([userOne,userTwo])
  }).then(()=>done());
}
const populateTodos=(done)=>{
Todo.remove({}).then(()=>{
  return  Todo.insertMany(todos);
}).then(()=>done());
}

module.exports ={todos,populateTodos,users,populateUsers}
