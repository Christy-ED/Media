const jwt = require('jsonwebtoken');

function auth(req, res, next){
   const token = req.headers.auth?.split(" ")[1];
   if(!token)return res.status(401).json({message:'Access denied'});
   try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    next();
   } catch (error) {
    res.status(403).json({message:'Invalid token'});
   }
}

module.exports = auth;