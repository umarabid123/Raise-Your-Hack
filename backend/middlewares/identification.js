const jwt = require("jsonwebtoken");

exports.identifier = (req, res,next) => {

  let token;
  if (req.headers.client === "not-browser"){
    token = req.headers.authorization;
  } else {
    token = req.cookies['Authorized'];
  }
  if (!token) {
    return res.status(403).json({ success: false, message: "Unauthorized" });
  }
  try {
    const userToken = token.split(" ")[1];
    const jwtVerfied = jwt.verify(userToken, process.env.SECRET_KEY);
  if(jwtVerfied){
      req.user = jwtVerfied;
    next()
  }else{
    throw new Error('Error in the token');
  }
  } catch (error) {
    console.log("error occurs:", error);
  }
};
