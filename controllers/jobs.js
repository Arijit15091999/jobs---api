const Job = require('../models/jobs.model')
const asyncWrapper = require('../middlewares/asyncWrapper')
const { StatusCodes } = require('http-status-codes')
const BadRequestError = require('../errors/bad-request-error')

const getAllJobs = asyncWrapper(async (req, res) => {
  const jobs = await Job.find({})
  res.status(StatusCodes.OK).json(jobs)
})

const getJob = asyncWrapper(async (req, res) => {
  const jobId = req.params.id
  const job = await Job.findById(jobId)
  if (!job) {
    return res.status(StatusCodes.BAD_REQUEST).json({ msg: 'Job not found' })
  }
  res.status(StatusCodes.OK).json(job)
})

const updateJob = asyncWrapper(async (req, res) => {
  const { company, position } = req.body
  if (company === '' || position === '') {
    throw new BadRequestError('please provide company name and position')
  }
  const job = await Job.findOneAndUpdate(
    { _id: req.params.id, createdBy: req.user.userId },
    req.body,
    { new: true, runValidators: true }
  )
  if (!job) {
    return res.status(StatusCodes.BAD_REQUEST).json({ msg: 'Job not found' })
  }
  res.status(StatusCodes.OK).json(job)
})

const deleteJob = asyncWrapper(async (req, res) => {
  const job = await Job.findOneAndDelete({
    _id: req.params.id,
    createdBy: req.user.userId
  })
  if (!job) {
    return res.status(StatusCodes.BAD_REQUEST).json({ msg: 'Job not found' })
  }
  res
    .status(StatusCodes.OK)
    .json({ success: true, msg: 'job deleted successfully' })
})

const createJob = asyncWrapper(async (req, res) => {
  const { company, position } = req.body
  if (company === '' || position === '')
    throw new BadRequestError('please prove company name and position')
  const job = await Job.create({ ...req.body, createdBy: req.user.userId })
  res.status(StatusCodes.OK).json(job)
})

module.exports = {
  getAllJobs,
  getJob,
  updateJob,
  deleteJob,
  createJob
}
