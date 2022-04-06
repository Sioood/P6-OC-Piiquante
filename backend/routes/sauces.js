const express = require("express");
const router = express.Router();

const SaucesCtrl = require("../controllers/sauces");

router.get("/", SaucesCtrl.getSauces);
router.get(":id", SaucesCtrl.getOneSauce);
router.post("/", SaucesCtrl.createSauce);
// router.post(":id/like", SaucesCtrl.);
router.put(":id", SaucesCtrl.updateSauce);
router.delete(":id", SaucesCtrl.deleteSauce);

module.exports = router;
