var mongoose=require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true }).then(()=>{

}).catch(err=>{
  console.error('App starting error:', err.stack);
        process.exit(1);
});
//mongoose.connect(process.env.MONGODB_URI||mongodb:abhishekchadha37:Abhi94632@ds147454.mlab.com:47454/todoapp)
module.exports={mongoose}

// process.env.NODE_ENV==='production'
// process.env.NODE_ENV==='development'
// process.env.NODE_ENV==='test'
