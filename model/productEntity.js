
var mongoose = require('mongoose');
var Schema=mongoose.Schema;
var Product=new Schema({
                        designation:String,
                        type:String,
                        prix:Number
                       } );
    module.exports=mongoose.model('produits',Product);                  