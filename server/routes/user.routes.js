import express from 'express'
import { updateProfile, getUser, getSurvey } from '../controllers/user.controllers.js'

const router = express.Router()

router.post('/get-user', getUser)
router.post('/update-profile', updateProfile)
router.post('/get-survey', getSurvey)

export default router
