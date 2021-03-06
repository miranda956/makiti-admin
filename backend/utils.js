const  jwt = require  ("jsonwebtoken");
const  config = require ("./config/config");

const getToken =(user)=>{
  
    return jwt.sign(
    
        {
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
          },
config.JWT_SECRET,

{
    expiresIn:'48h'
}

    );


}

const isAuth =(req,res,next)=>{
    const token =req.headers.authorization;

    if(token){

        const onlyToken =token.slice(7,token.lenth);
        jwt.verify(onlyToken, config.JWT_SECRET,(err,decode)=>{
            if(err){
                return res.status(401).send({
                    message:"invalid token"
                });
            }
            req.user=decode;
            next();
            return;
        });
    } else {
        return res.status(401).send({
            message:"token not supplied "
        });
    }
};

const isAdmin =(req,res,next)=>{
    console.log(req.user);
    if(req.user&& req.user.isAdmin){
        return next();
    
    }
    return res.status(401).send({
        message:"admin token not valid "
    })
}

module.exports= {getToken,isAuth,isAdmin};
