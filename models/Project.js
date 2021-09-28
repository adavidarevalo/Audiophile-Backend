const mongoose = require("mongoose")

const ProjectSchema = mongoose.Schema({
  userCreator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  products: {
    type: Object,
    require: true
  },
  price: {
    type: String,
    require: true,
    trim: true
  },
  date:{
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model("Project", ProjectSchema)