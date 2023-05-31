const router = require("express").Router();
const authController = require("./controllers/auth-controller");
const activateController = require("./controllers/activate-controller");
const authMiddleware = require("./middlewares/auth-middleware");
const roomsControllers = require("./controllers/rooms-controllers");

router.post("/api/send-otp", authController.sendOtp);
router.post("/api/verify-otp", authController.varifyOtp);
router.post("/api/activate", authMiddleware, activateController.activate);
router.post("/api/logout", authMiddleware, authController.logout);
router.post("/api/rooms", authMiddleware, roomsControllers.create);

router.get("/api/refresh", authController.refresh);
router.get("/api/rooms", authMiddleware, roomsControllers.index);
router.get("/api/room/:roomId", authMiddleware, roomsControllers.show);

module.exports = router;
