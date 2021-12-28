// @ts-nocheck
var thinky = require('thinky')();
var {type}   = thinky;
var shop= require('./shops');
var cat =require('./categories');
// Create a model - the table is automatically created
var Post= thinky.createModel("Post", {
    id:type.String(), 
    title:type.String(),
    description:type.String(),
    plan:type.String(),
    price:type.Number(),
    negotiable:type.Boolean(),
    catId:String,
    created:Date.now(),
    shopId:type.string(),
    address:type.string(),
    unused:type.Boolean(),
    "last-touch":type.Date(),
    location:type.string(),
    audioId:type.string(),
    
  }); 
  
  Post.belongsTo(shop, "shop", "shopId", "id");
  Post.belongsTo(cat, "cat", "catId", "id");

  
  module.exports= Post;


