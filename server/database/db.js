const mongoose=require('mongoose')
const keys=require('../config/keys')
console.log(keys.MongoURI);
const connectDB = async () => {
 try {
  await mongoose.connect(
     keys.MongoURI,
     {
       useNewUrlParser: true,
       useCreateIndex: true,
       useFindAndModify: true,
       useUnifiedTopology: true,
     }
   )
   console.log("MongoDB Connection Success")
 } catch (err) {
  console.log(err);
   console.log("MongoDB Connection Failed")
 }
}
module.exports = connectDB