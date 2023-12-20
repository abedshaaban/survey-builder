import express from 'express'
import {
  updateProfile,
  getUser,
  getSurvey,
  getSurveyByID
} from '../controllers/user.controllers.js'

const router = express.Router()

router.post('/get-user', getUser)
router.post('/update-profile', updateProfile)
router.post('/get-survey', getSurvey)
router.post('/get-survey-by-id', getSurveyByID)

export default router
