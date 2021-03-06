const jwt = require("jsonwebtoken")

module.exports = function(req, res, next){
  const token = req.header("x-auth-token")
  console.log(token)
  if(!token){
    return res.status(401).json({msg: "The token it´s not valid"})
  } 
  try{
    const encryption = jwt.verify(token, process.env.Secret)
    console.log(encryption)
    req.userContainer= encryption.userContainer
    next()
  } catch(error){
    return res.status(401).json({msg: "There was a Error"})
  }
}