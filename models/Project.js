const mongoose = require("mongoose")

const ProjectSchema = mongoose.Schema({
  userCreator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  price:{
    type: String,
    require: true
  },
  project: {
    type: Object,
    require: true
  },
  date:{
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model("Project", ProjectSchema)