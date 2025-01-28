const postModel = require("../Models/postModel")
const userModel = require("../Models/usermodel")


exports.createpost = async (req, res) => {
    try {
        const { title, description, image,user } = req.body
        if (!title) {
            return res.status(400).send({ message: 'title is required', success: false })
        }
        if (!description) {
            return res.status(400).send({ message: 'description is required', success: false })
        }
        if (!image) {
            return res.status(400).send({ message: 'image is required', success: false })
        }
        if (!user) {
            return res.status(400).send({ message: 'User Id is required', success: false })
        }

        const existinguser =await userModel.findById(user)
        if(!existinguser){
            return res.status(400).send({ message: 'User not found', success: false })
        }
        const newpost = await postModel.create({
            title,description,image,user
        })
        await newpost.save()
        existinguser.post.push(newpost)//newpost is automatically converted to its _id when pushed into the array because MongoDB stores references by ObjectId.
        await existinguser.save()
        return res.status(201).send({ message: 'Post created successfully', success: true,newpost})
    } catch (error) {
        console.log(error);
        
        return res.status(500).send({ message: 'Error in Creating Post', success: false, error })
    }

}

exports.getAllpost = async (req, res) => {
    const allpost = await postModel.find().populate('user','username');
    return res.status(200).send({ message: 'All post are visible', success:true,allpost })
}

exports.updatepost = async (req, res) => {
    try {
        const { id } = req.params
        console.log(id);
        
        const { title, description, image } = req.body
        const post = await postModel.findByIdAndUpdate(id,{ ...req.body },{ new: true })
        return res.status(200).send({message: 'Post is updated',success:true,post})
    }catch (error) {
     return res.status(500).send({message:'Error in updating',success:false,error})
    }
}

exports.deletepost=async(req,res)=>{
   try{
    const {id} =req.params
    const post =await postModel.findByIdAndDelete(id).populate('user')
    if(!post){
        return res.status(400).send({message:'Post not exists',success:false})
    }
    post.user.post.pull(post._id)//used to remove the id from array of the post created
    await post.user.save()
    return res.status(200).send({message:'Post is deleted',success:true})
   }catch(error){
    return res.status(500).send({message:'Error in deleting',success:false})
   }
}

exports.getpost=async(req,res)=>{
    try{
    const {id} =req.params
    const post=await postModel.findById(id)
    return res.status(200).send({message:'Post extracted successfully',success:true,post})
    }catch(error){
        return res.status(500).send({message:'Error in extracting post',success:false,error}) 
    }
}

exports.getPostsByUserId = async (req, res) => {
    try {
      const { id } = req.params; // This is the userId
      const posts = await postModel.find({ user: id }).populate('user','username'); // Assuming `user` field stores the userId in your posts collection
      if (posts.length === 0) {
        return res.status(404).send({ message: 'No posts found for this user', success: false });
      }
      return res.status(200).send({ message: 'Posts extracted successfully', success: true, posts });
    } catch (error) {
      return res.status(500).send({ message: 'Error in extracting posts', success: false, error });
    }
  };
  