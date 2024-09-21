const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://nirmaladitya0303:BhuI9hYEmVfxVsPo@scribblenest.o7yut.mongodb.net/?retryWrites=true&w=majority&appName=ScribbleNest')

const userSchema = mongoose.Schema ({
  username : String,
  name : String,
  age : Number,
  email : String ,
  password : String ,
  profilepic :{
    type:String,
    default : "default.webp"
  },
  posts:[
    {
      type : mongoose.Schema.Types.ObjectId,ref:"post"
    }
  ],
})

module.exports= mongoose.model('user',userSchema)