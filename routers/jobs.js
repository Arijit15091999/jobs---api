const express = require('express')
const router = express.Router()
const {
  getAllJobs,
  getJob,
  deleteJob,
  updateJob,
  createJob
} = require('../controllers/jobs')

router.route('/').get(getAllJobs).post(createJob)
router.route('/:id').patch(updateJob).get(getJob).delete(deleteJob)

module.exports = router
