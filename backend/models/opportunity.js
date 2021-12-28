var thinky = require('thinky')();
var {type}  = thinky;

var Opportunity =thinky.createModel("",{
id:type.String(),
name:type.string(),
phone:type.Number(),
city:type.string(),
street:type.string(),
zipcode:type.string(),
website:type.string(),
logoId:type.String(),
intrestedIn:type.string(),
source:type.string(),
assignedTo:type.string(),
status:type.string()


})

module.exports=Opportunity;