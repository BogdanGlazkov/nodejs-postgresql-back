const { Router } = require("express");
const db = require("./controller");

const router = Router();

router.get("/", db.getStudents);

module.exports = router;
