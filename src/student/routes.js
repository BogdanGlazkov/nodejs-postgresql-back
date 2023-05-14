const { Router } = require("express");
const db = require("./controller");

const router = Router();

router.get("/", db.getStudents);
router.post("/", db.addStudent);
router.get("/:id", db.getStudentById);

module.exports = router;
