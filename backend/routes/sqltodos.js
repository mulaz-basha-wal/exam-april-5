var express = require("express");
var router = express.Router();
const todoModel = require("../mysqlmodels/todos");

router.get("/", (req, res) => {
  todoModel.findAll().then(
    function (todos) {
      res.status(200).json(todos);
    },
    function (error) {
      res.status(500).json(error);
    }
  );
});

router.post("/create", (req, res) => {
  const { todo, desc, status } = req.body;
  todoModel
    .create({ todo, description: desc, status })
    .then((product) => res.status(200).json(product));
});

module.exports = router;
