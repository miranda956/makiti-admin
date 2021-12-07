import express from 'express';
import  bodyparser from 'body-parser';
import  methodoverride from 'method-override';
import logger from 'morgan';
import  session from 'express-session';
import  path from 'path';
import  require'cors';

const PORT=process.env.PORT||5000;




// intializing an instance of express
const app= express();
app.use(cors());
app.use(methodoverride("_method"));
app.use(logger("dev"));
app.use(session({
    secret:'123456',
    // @ts-ignore
    resave:"true",
    // @ts-ignore
    saveUninitialized:"true"
}));
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());

 
const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port} 🔥`);