const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, 'please provide a company name'],
      maxlength: 50
    },
    position: {
      type: String,
      required: [true, 'please provide a position name'],
      maxlength: 100
    },
    status: {
      type: String,
      enum: ['pending', 'interviewed', 'decilned'],
      default: 'pending'
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: 'true'
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Job', JobSchema)
