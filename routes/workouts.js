const express = require("express");
const router = express.Router();
//GET
router.get("/", (req, res) => {
  res.json({ type: "GET" });
});
//GET-SINGLE
router.get("/:id", (req, res) => {
  res.json({ type: "GET SINGLE" });
});
//POST
router.post("/", (req, res) => {
  res.json({ type: "POST" });
});
//DELETE
router.delete("/:id", (req, res) => {
  res.json({ type: "DELETE" });
});
//PATCH
router.patch("/", (req, res) => {
  res.json({ type: "PATCH" });
});
module.exports = router;
