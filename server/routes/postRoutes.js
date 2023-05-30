import express from 'express';
import * as dotenv from 'dotenv';
import {v2 as cloudinary} from 'cloudinary';

import Post from '../mongodb/models/post.js';
// make sure the environment variable is populated
dotenv.config();
const router = express.Router();
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
});

// get route to get all post
router.route('/').get(async(req,res)=>{
    try {
        const posts = await Post.find({});
        res.status(200).json({success:true,data:posts});
    } catch (error) {
        res.status(500).json({success:false,message:'fetching posts failed'});

    }

});
// post route to create a post

router.route('/').post(async(req,res)=>{

try {
    const {name,prompt,photo} = req.body;
    console.log(req.body);
    //  upload image to cloudinary and return a photoURL
    const photoURL = await cloudinary.uploader.upload(photo);
    // using the photoURL to create a new post request with name, url, and prompt
    console.log(photoURL.url);
    const newPost = await Post.create({
    name,
    prompt,
    photo:photoURL.url,
    
})
res.status(201).json({success:true,data:newPost});
} catch (error) {
    console.error(error);
    res.status(500).json({success:false,message:'unable to create a post'});
}
});
export default router;