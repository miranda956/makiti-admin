var thinky = require('thinky')();
var type   = thinky.type;


// Create a model - the table is automatically created
var Category= thinky.createModel("Category", {
    id: String,
    CategoryName: String,
    CategoryType: String,
  }); 
  
  module.exports= Category;

  