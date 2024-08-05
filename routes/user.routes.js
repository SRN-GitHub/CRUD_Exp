import express from 'express';
import {createUser, deleteUser, getSingleUser, getUser, updateUser} from '../controller/user.controller.js';


let router = express.Router()

router.post('/create', createUser)  
router.get('/getUser', getUser)
router.get('/getSingleUser/:id', getSingleUser)
router.put('/updateUser/:id', updateUser)
router.delete('/deleteUser/:id',deleteUser)



export default router;