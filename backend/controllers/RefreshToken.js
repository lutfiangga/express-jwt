import dotenv from 'dotenv';
import Users from "../models/UserModel.js";
import jwt from "jsonwebtoken";
dotenv.config();
export const refreshToken = async (req, res) => {

    const RefreshToken = process.env.REFRESH_TOKEN_SECRET
    const PrivateToken = process.env.ACCESS_TOKEN_SECRET

    try {
        const refreshToken = req.cookies.refreshToken;
        if (!refreshToken) return res.sendStatus(401);
        const user = await Users.findAll({
            where: {
                refresh_token: refreshToken,
            },
        });
        if (!user[0]) return res.sendStatus(403);
        jwt.verify(refreshToken, RefreshToken, (err, decoded) => {
            if (err) return res.sendStatus(403);
            const userId = user[0].id;
            const name = user[0].name;
            const email = user[0].email;
            const accessToken = jwt.sign({ userId, name, email }, PrivateToken, {
                expiresIn: "60s",
            });
            res.json({ accessToken });
        });
    } catch (error) {
        console.log(error);
    }
}