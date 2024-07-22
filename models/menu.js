const mongoose = require("mongoose");


const menuItem = new mongoose.Schema({
    name:{
    type :String,
    required :true
 },
 price:{
    type :Number,
    required :true
 },
 taste:{
    type :String,
    enum : ['sweet' , 'spicy' , 'sour' ],
    required :true
 },
 is_drink: {
    type : Boolean,
    default:false
 },
 ingredients : {
    type : [String],
  
 },
 sales :{
    type :Number,
    default: 0
 },

});

const MenuItem = mongoose.model("MenuItem" , menuItem);

module.exports = MenuItem;