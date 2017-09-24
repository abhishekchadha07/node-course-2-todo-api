var mongoose=require('mongoose');
const validator=require('validator')
const jwt=require('jsonwebtoken')
const _=require('lodash')
// {
//   email:'abhishekchadha37@yahoo.in',
//   password:'myPass123',
//   tokens:[{
//     access:'auth',
//     token:'asdasfadfjfjajejje'
//   }]
// }

var UserSchema=new mongoose.Schema({

    email:{
      type:String,
    required:true,
    minLength:5,
    unique:true,
    validate:{
  validator:validator.isEmail,
    message:`{Value} is not a valid email`
  }},
  password:{
    type:String,
    require:true,
    minLength:6
  },
  tokens:[{
    access:{
  type:String,
  required:true
    },
    token:{
      type:String,
      required:true
    }
  }]
})

UserSchema.methods.toJSON=function(){
  var user=this;
  var userObject=user.toObject();
  return _.pick(userObject,['_id','email']);
}

UserSchema.methods.generateAuthToken=function(){
var user=this;
var access='auth';
var token=jwt.sign({_id:user._id.toHexString(),access},'abc123').toString();
user.tokens.push({
  access,token

});
user.save().then(()=>{
  return token;
})
};
var User=mongoose.model('User',UserSchema)

// var userTodo=new user({
//   Email:'abhishekchadha37@yahoo.in'
// })
//
// userTodo.save().then((doc)=>{
//   console.log('Saved Email',doc)
// },(e)=>{
//   console.log('Unable to Save Email',e)
// })
module.exports={User};
