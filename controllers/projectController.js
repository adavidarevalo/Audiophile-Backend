const Project = require("../models/Project")
const {validationResult} = require("express-validator")
const connectDataBase = require("../config/db")

exports.createProject = async(req, res) =>{
  const Errors = validationResult(req)
  if(!Errors.isEmpty()){
    return res.status(400).json({Errors: Errors.array()})
  }
  try{
    const project = new Project(req.body)
    console.log(req.body)
    project.userCreator = req.userContainer.id
    project.products = req.body.product
    project.save()
    res.json(project)
  } catch (error){
    console.log(error)
    res.status(500).send("There are Error")
  }
}

// get all projects
exports.getProjects = async (req, res)=>{
  try {
    const project = await Project.find({userCreator: req.userContainer.id})
    res.json({project})
  } catch (error) {
    console.log(error)
    res.status(500).send("There was a mistake")
  }
}
