const router = require("express").Router();
const authController = require("./controllers/auth-controller");
const activateController = require("./controllers/activate-controller");
const authMiddleware = require("./middlewares/auth-middleware");

router.post("/api/send-otp", authController.sendOtp);
router.post("/api/verify-otp", authController.varifyOtp);
router.post("/api/activate", authMiddleware, activateController.activate);
router.post("/api/logout", authMiddleware, authController.logout);

router.get("/api/refresh", authController.refresh);

module.exports = router;
