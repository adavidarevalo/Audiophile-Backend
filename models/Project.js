const mongoose = require("mongoose")

const ProjectSchema = mongoose.Schema({
  userCreator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  product: {
    
  },
  date:{
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model("Project", ProjectSchema)