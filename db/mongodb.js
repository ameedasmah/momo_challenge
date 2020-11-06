const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://netninja:test1234@cluster0.zafas.mongodb.net/ameed2?retryWrites=true&w=majority', {useNewUrlParser: true})
.then(()=>console.log("hi Zameel , fuk you"))
.catch(()=>console.log('err zameel'));

const schema = mongoose.Schema({
    username: String,
    password : String
  });
  
  const schema2 = mongoose.Schema({
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MynSchema"
      },
      address : String,
      email: String
  })
  const MynSchema= mongoose.model('MynSchema', schema);
  const MynSchema22= mongoose.model('MynSchema22', schema2);
  // Explicitly create the collection before using it
  // so the collection is capped.
 

  module.exports.MynSchema=MynSchema;
  module.exports.MynSchema22=MynSchema22;