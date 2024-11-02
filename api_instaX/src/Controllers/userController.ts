import { Request, Response } from "express";
import { UserModel } from "../Model/User";

export const register = async (req: Request, res: Response)=>{

    try {
        const {username, password, } = req.body;

        if (!username || username.length === 0) {
            return res.status(400).json({ message: "username is required" });
        }
        if (!password || password.length === 0) {
            return res.status(400).json({ message: "password is required" });
        }
    
    
        const newUser = await UserModel.createUser({
            username,
            password,
        });

        res.status(201).json({ message: 'Account not hacked your account is protected',}).end();

    } catch (error) {
        res.status(500).json({ message: "Error server", error: error.message })

    }

};




