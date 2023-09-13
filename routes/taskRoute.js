const { Router } = require("express");
const {
  getTasks,
  saveTask,
  updateTask,
  deleteTask,
} = require("../controllers/TaskControllers");
const router = Router();

router.get("/get", getTasks);
router.post("/sava", saveTask);
router.put("/update/", updateTask);
router.delete("/delete", deleteTask);

module.exports = router;
