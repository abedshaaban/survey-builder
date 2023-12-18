import express from 'express'
import { updateProfile, getUser } from '../controllers/user.controllers.js'

const router = express.Router()

router.post('/get-user', getUser)
router.post('/update-profile', updateProfile)

export default router
