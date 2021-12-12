var jwt = require('jsonwebtoken');
require("dotenv/config");
const JWT_SECRET_Admin=process.env.JWT_SECRET_Admin;

const fetchadmin = (req, res, next) => {
    // Get the user from the jwt token and add id to req object
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).send({ error: "Please authenticate using a valid token" })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET_Admin);
        // took .user from verification data and stored it in req.user
        req.admin = data.admin;
        next();
    } catch (error) {
        return res.status(401).send({ error: "Please authenticate using a valid token admin 2" })
    }

}


module.exports = fetchadmin;