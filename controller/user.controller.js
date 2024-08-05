import UserCollection from "../model/user.model.js";


//*     CREATE USER
const createUser = async (req,res,next)=>{
    try {
        const  { FirstName, LastName, Email, Password, Phone } = req.body
        const user = new UserCollection({ FirstName, LastName, Email, Password, Phone })
         await user.save()
         return res.status(201).json({success:true, message:'User Created Successfully', user})
    } catch (error) {
        return res.status(500).json({success:false, message:'Internal Server Error'})
    }
}

//*     GET ALL USER
const getUser = async (req,res,next)=>{
    try {
        const user = await UserCollection.find()
        if(user.length === 0){
            return res.status(404).json({success:false, message:'No User Found'})
        }else{
            return res.status(200).json({success:true, message:'User Fetched Successfully', user})
        }
    } catch (error) {
        return res.status(500).json({success:false, message:'Internal Server Error'})

    }
}

//*     GET SINGLE USER
const getSingleUser = async (req,res,next)=>{
    try {
        const id = req.params.id
        const getAuser = await UserCollection.findById(id)
        if(!getAuser){
            return res.status(404).json({success:false, message:'User Not Found'})
            }else{
                return res.status(200).json({success:true, message:'User Fetched Successfully', getAuser})}
    } catch (error) {
        return res.status(500).json({success:false, message:'Internal Server Error'})
    }
}

//*     UPDATE USER
const updateUser = async (req,res,next)=>{
    try {
        const id = req.params.id
        const userUpdate = await UserCollection.findByIdAndUpdate(id,req.body,{new:true})
        if(!userUpdate){
            return res.status(404).json({success:false, message:'User Not Found'})
            }else{
                return res.status(200).json({success:true, message:'User Updated Successfully', userUpdate})}
    } catch (error) {
        return res.status(500).json({success:false, message:'Internal Server Error'})
    }
}

//*     DELETE USER
const deleteUser = async (req,res,next)=>{
    try {
        const id = req.params.id
        const deleteUser = await UserCollection.findByIdAndDelete(id)
        if(!deleteUser){
                return res.status(401).json({success:false, message:'User Not Found'})
            }else{
                return res.status(200).json({success:true, message:'User Deleted Successfully',deleteUser})
            }
    } catch (error) {
        return res.status(500).json({success:false, message:'Internal Server Error'})
    }
}

export { createUser, deleteUser, getSingleUser, getUser, updateUser };