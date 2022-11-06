// Core Modules
import express from 'express';

// Controller
import {createOrganization, deleteOrganization, updateOrganization, Organizations, OrganizationById} from "../controllers/organization"


// Initialization
const router = express.Router()

router.post('/create-organization', createOrganization);
router.delete('/delete-organization', deleteOrganization);
router.put('/update-organization', updateOrganization);
router.get('/organizations', Organizations);
router.get('/organization/:id', OrganizationById)

export default router;