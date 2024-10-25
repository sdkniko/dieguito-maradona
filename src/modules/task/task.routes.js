const express = require("express");
const taskService = require("./task.service");

const router = express.Router();

// GET /api/task
router.get("/api/task", async (req, res) => {
  // #swagger.tags = ['Task']
  try {
    let allTasks = await taskService.findAll(); // Llama a la función findAll
    return res.status(200).send(allTasks); // Envía todas las tareas

  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});


// GET /api/task/:id
router.get("/api/task/:id",  async (req, res) => {
  // #swagger.tags = ['Task']
  try {
    const userId = req.params.id;
    const user = await taskService.findOneById(userId);
    return res.status(200).send(user);

  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

// POST /api/task
router.post("/api/task", async (req, res) => {
  // #swagger.tags = ['Task']
  try {
    const newUser = req.body;
    console.log(newUser);
    const user = await taskService.save(newUser);
    return res.status(201).send(user);

  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

// PUT /api/task/:id
router.put("/api/task/:id",  async (req, res) => {
  // #swagger.tags = ['Task']
  try {
    const userId = req.params.id;
    const updatedUser = req.body;
    const user = await taskService.update(userId, updatedUser);
    return res.status(200).send(user);

  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

// DELETE /api/task/:id
router.delete("/api/task/:id", async (req, res) => {
  // #swagger.tags = ['Task']
  try {
    const userId = req.params.id;
    await taskService.remove(userId);
    return res.status(200).send("Usuario eliminado correctamente.");

  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

module.exports = router;