const{SHA256}=require('crypto-js')
const jwt=require('jsonwebtoken')

var data={
  id:11
}

var token=jwt.sign(data,'123abc');
console.log(token)

var decoded=jwt.verify(token,'123abc');
console.log('decoded',decoded);
// var message='I am User number 7'
// var hash=SHA256(message).toString();
// console.log(`Message : ${message}`);
// console.log(`Hash : ${hash}`);
//
// var data={
//   id:7
// };
//
// var token={
//   data,
//   hash:SHA256(JSON.stringify(data)+'Somesecret').toString()
// }
//
//
// // token.data.id=5;
// // token.hash=SHA256(JSON.stringify(token.data)).toString();
//
// var resulthash=SHA256(JSON.stringify(token.data)+'Somesecret').toString();
//
// if(resulthash===token.hash){
//   console.log('Data was not changed')
// }
// else{
//   console.log('Data was changes , do not trust !!!')
// }
