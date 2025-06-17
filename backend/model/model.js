const mongoose=require('mongoose')

const userschema=new mongoose.Schema({
  username:{
    type:String,
    required:true
  },
  email:{
    type:String,
    requiredd:true
  },
  password:{
    type:String,
    required:true
  },
  CreatedAt:{
    type:Date,
    default:Date.now
  }
})

const User=mongoose.model('User',userschema)

const orderSchema = new mongoose.Schema({
  name:        { type: String, required: true },
  useremail:   { type: String, required: true },
  useraddress: { type: String, required: true },
  orders:      { type: Array, required: true },
  createdAt:   { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', orderSchema);


module.exports = { User, Order };