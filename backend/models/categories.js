var thinky = require('thinky')();
var type   = thinky.type;

var {r}= thinky
// Create a model - the table is automatically created
var Category= thinky.createModel("Category", {
    id: type.string(),
    CategoryName: type.string(),
    CategoryType: type.string(),
    createdAt:type.date().default(r.now())
  }); 
  
  module.exports= Category;

  