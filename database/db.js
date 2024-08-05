import mongoose from "mongoose";

const connectTodb = (url)=>{
    mongoose.connect(url)
}
export default connectTodb;