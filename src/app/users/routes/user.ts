// Core Modules
import express from 'express';

// Controller
import {createUser, delteUser, updateUser, users, userById} from "../controllers/user"


// Initialization
const router = express.Router()

router.post('/create-user', createUser);
router.delete('/delete-user', delteUser);
router.put('/update-user', updateUser);
router.get('/users', users);
router.get('/user/:id', userById)

export default router;