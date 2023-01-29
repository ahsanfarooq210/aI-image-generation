import express from 'express'
import * as dotenv from 'dotenv'
import post from '../mongodb/models/post.js'
import {v2 as cloudinary } from 'cloudinary'

dotenv.config();
const router=express.Router();


export default router;