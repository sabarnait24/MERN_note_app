const jwt = require("jsonwebtoken");
const secret = "shb@mk15fg!hf8&&7";
const Auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (token) {
      const decodedtoken = token.split(" ")[1];

      const user = jwt.verify(decodedtoken, secret);

      req.userId = user.id;
    } else {
      return res.status(401).send({ msg: "unauth user" });
    }

    next();
  } catch (error) {
    console.log(error);
    return res.status(401).send({ msg: "unauth user" });
  }
};

module.exports = Auth;
