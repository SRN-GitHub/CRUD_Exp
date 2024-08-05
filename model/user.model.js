import { model, Schema } from "mongoose";


const userSchema = new Schema({
    FirstName: 'String',
    LastName: 'String',
    Email: {type: String},
    Password: {type: String, minLength: [8, 'Password Must contain At least 8 Characters']},
    Phone: {type: Number, maxLength: [10, 'Phone Number Must contain 10 Digits']},
})

const UserCollection = model('users', userSchema)  // Creating Collection
export default UserCollection;