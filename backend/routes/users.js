'use strict';

let model = require("../models/staff");
var r = require('rethinkdb');

const { getToken, isAuth } = require('../utils');
module.exports=(app)=>{

    app.post('/api/v1/login', async (req, res) => {
        const signinUser = r.table("Staff")
        .pluck("_id":req.body.id, "name")
        if (signinUser) {
          res.send({
            _id: signinUser.id,
            name: signinUser.name,
            email: signinUser.email,
            isAdmin: signinUser.isAdmin,
            token: getToken(signinUser),
          });
        } else {
          res.status(401).send({ message: 'Invalid Email or Password.' });
        }
      });

      

}