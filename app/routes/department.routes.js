module.exports = app => {
  const departments = require("../controllers/department.controller.js");

  var router = require("express").Router();

  router.get("/", departments.findAll);

  app.use("/api/departments", router);
};
