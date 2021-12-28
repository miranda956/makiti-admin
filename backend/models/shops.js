var thinky =require('thinky')();
var {type}= thinky;
var cat= require('./categories');
var Shop = thinky.createModel("Shop",{
id:type.String(),
created:Date.now(),
ownerId:type.string(),
name:type.string(),
description:type.string(),
ccode:type.String(),
phone:type.string(),
email: type.string().email(),  // a string that is a valid email
address:type.string(),
location:type.string(),
countryId:type.string(),
stateId:type.string(),
cityId:type.string(),
status:type.Boolean(),
"shop-number":type.string(),
slug:type.string(),
plan:type.string(),
note:type.Number,
notes:type.string(),
catId:type.string(),
audioId:type.string(),
"has-logo":type.Boolean(),
profile:type.string(),
"has-cover":type.boolean(),
cover:type.string()

})

Shop.belongsTo(cat, "cat", "catId", "id");

module.exports = Shop;