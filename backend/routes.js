const router = require("express").Router();
const authController = require("./controllers/auth-controller");
const activateController = require("./controllers/activate-controller");
const authMiddleware = require("./middlewares/auth-middleware");

router.post("/api/send-otp", authController.sendOtp);
router.post("/api/varify-otp", authController.varifyOtp);
router.post("/api/activate", authMiddleware, activateController.activate);

module.exports = router;
