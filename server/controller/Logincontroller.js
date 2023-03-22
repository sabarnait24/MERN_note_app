const { User } = require("../db/model");
const bcrypt = require("bcrypt");
const saltRounds = 10;
var jwt = require("jsonwebtoken");
const secret = "shb@mk15fg!hf8&&7";

const getDetails = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await User.findById(id);
    const { password, cpassword, firstname, ...rest } = Object.assign(
      {},
      data.toJSON()
    );
    return res.status(200).send(rest);
  } catch (error) {
    res.status(500).send({ msg: "not found" });
  }
};

const loginUser = async (req, res) => {
  try {
    const existuser = await User.findOne({ email: req.body.email });
    console.log(existuser);
    if (!existuser) {
      return res.status(401).send("Invalid Credentials");
    }
    const passwordcheck = await bcrypt.compare(
      req.body.password,
      existuser.password
    );
    // console.log(passwordcheck);
    if (!passwordcheck) {
      return res.status(401).send("Invalid Credentials");
    }
    const token = jwt.sign(
      {
        email: existuser.email,
        id: existuser._id,
      },
      secret,
      { expiresIn: "24h" }
    );
    res.status(200).send({ existuser, token });
    
  } catch (error) {
    res.status(201).send(error);
  }
};

const registerUser = async (req, res) => {
  try {
    const existuser = await User.findOne({ email: req.body.email });

    if (existuser) {
      return res.status(200).send("user already exists");
    }
    const password = req.body.password;
    const cpassword = req.body.cpassword;
    if (password !== cpassword) {
      return res.status(401).send("Passwords are not matching");
    }
    const newPassword = await bcrypt.hash(password, saltRounds);
    const data = new User({
      firstname: req.body.firstname,
      email: req.body.email,
      password: newPassword,
      cpassword: newPassword,
    });

    const savedata = await data.save();
    console.log(savedata);
    return res.status(201).send(savedata);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const updateDetails = async (req, res) => {
  try {
    const id = req.userId;

    if (id) {
      const { email, password ,cpassword } = req.body;
      if(password!==cpassword){
        return res.status(201).send({ msg: "password not matching" });
      }
      const updatepassword = await bcrypt.hash(password, saltRounds);
      const newData = {
        email,
        password: updatepassword,
        cpassword: updatepassword,
      };
      const newBody = await User.findByIdAndUpdate(id, newData, { new: true });

      return res.status(201).send({ msg: "updated successfully" });
    } else {
      return res.status(201).send({ msg: "not updated" });
    }
  } catch (error) {
    return res.status(500).send(error);
  }
};


module.exports = {
  getDetails,
  loginUser,
  registerUser,
  updateDetails,
 
};
