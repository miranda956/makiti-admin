var thinky = require('thinky')();
var {type}  = thinky;
var Role = require("./roles");
var Staff= thinky.createModel("Category", {
    id: String,
    staffName: String,
    staffNo: String,
    roleId:type.string(),
    password:type.String(),
  }); 
  
Staff.hasOne(Role,"role","roleId","id");
module.exports= Staff;
