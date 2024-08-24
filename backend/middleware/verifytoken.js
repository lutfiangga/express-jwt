import dotenv from 'dotenv';
import jwt from "jsonwebtoken";
dotenv.config();

export const verifyToken = ( req, res, next) => {

    const PrivateToken = process.env.ACCESS_TOKEN_SECRET

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(token === null) return res.sendStatus(401);
    jwt.verify(token, PrivateToken,  (err, decode) => {
    if(err) return res.sendStatus(403);
    req.email = decode.email;
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
})

}