import { NextFunction, Request, Response } from "express";
import redisClient from '../redis'

// A simple rate limiter
const rateLimiter = async (req: Request, res: Response, next: NextFunction)=>{
        const ipAddress = req.ip
        try{
            let response = await redisClient.incrementData(ipAddress)
            // Setting a limit of 50 requests
            if(response > 50){
                res.status(429).send("Too many requests")
                return true
            }
            // Limit expires after 5 seconds
            redisClient.expireData(ipAddress, 5)
            next()
        }catch(err){
            throw(err)
        }
}

export default rateLimiter;