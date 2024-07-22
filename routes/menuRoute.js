const express = require("express");
const router = express.Router();
const MenuItem = require("./../models/menu");

router.get("/", async (req, res) => {
  try {
    const Allproducts = await MenuItem.find();
    console.log(Allproducts);
    res.status(200).send({
      message: "All Products Are Here ",
      status: true,
      Allproducts,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({
      message: "Try again",
      status: false,
    });
  }
});

router.get("/:taste", async (req, res) => {
  try {
    const taste = req.params.taste;

    if (taste == "sweet" || taste == "spicy" || taste == "sour") {
      const item = await MenuItem.find({ taste: taste });
      console.log(item);
      res.status(200).send({
        message: "All Products Are Here ",
        status: true,
        item,
      });
    } else {
      res.status(404).send({
        message: "Could Not Find",
        status: true,
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({
      message: "Try again",
      status: false,
      err,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newMenu = new MenuItem(data);
    const response = await newMenu.save();
    console.log(response);
    res.status(200).send({
      message: "Saved SuccessFul",
      status: true,
      response,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({
      message: "Try again",
      status: false,
    });
  }
});

module.exports = router;
