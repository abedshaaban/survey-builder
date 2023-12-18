import express from 'express'
import { updateProfile } from '../controllers/user.controllers'

const router = express.Router()

router.post('/update-profile', updateProfile)

export default router
