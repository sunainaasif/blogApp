import Blogs from "../models/Blogs";

export const getAllBlogs = async(req, res, next)=>{
    let blogs;
    try {
        blogs= await Blogs.find()
    } catch (err) {
        return console.log(err)
    }
    if(!blogs){
        return res.status(404).json({message: "No blog found"})
    }
    return res.status(200).json({blogs})
}