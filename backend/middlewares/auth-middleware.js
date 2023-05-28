const tokenService = require("../services/token-service");

module.exports = async function (req, res, next) {
  try {
    const { accesstoken } = req.cookies;

    if (!accesstoken) {
      throw new Error();
    }
    const userData = await tokenService.varifyAccessToken(accesstoken);
    if (!userData) {
      res.json({ message: "no user found" });
    }

    req.user = userData;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "invalid token" });
  }
};
