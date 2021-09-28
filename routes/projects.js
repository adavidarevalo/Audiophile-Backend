const express = require("express")
const router = express.Router()
const projectController = require("../controllers/projectController")
const auth = require("../middleware/auth")
const {check} = require("express-validator")

router.post("/",
auth,
projectController.createProject
)
router.get("/",
auth,
projectController.getProjects
)

module.exports = router