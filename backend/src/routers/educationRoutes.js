const {
  addEducation,
  getAllEducation,
  getOneEducation,
  UpdateOneEducation,
  deletOneEducation,
} = require("../controllers/educationController");
const { authentication } = require("../controllers/authController");

const router = require("express").Router();

router.route("/").get(getAllEducation);
router.route("/addEducation").post(addEducation);
router.route("/:educationId").get(getOneEducation);
router.route("/:educationId").put(UpdateOneEducation);
router.route("/:educationId").delete(deletOneEducation);
module.exports = router;
