var jwt = require('jsonwebtoken');
require("dotenv/config");
const JWT_SECRET =process.env.JWT_SECRET;
const User =  require("../models/UserAuth");

const fetchuser = async (req, res, next) => {
    // Get the user from the jwt token and add id to req object
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).send({ error: "Please authenticate using a valid token" })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        // took .user from verification data and stored it in req.user
        const userid = data.user.id;
       req.userdetails = await User.findById(userid).select("-password");
        next();
    } catch (error) {
        return res.status(401).send({ error: "Please authenticate using a valid token 2" })
    }

}


module.exports = fetchuser;