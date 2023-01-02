const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers/auth");
const { ctrlWrapper } = require("../../helpers");

const { validateBody, upload } = require("../../middlewares");
const { userJoiSchema } = require("../../models/user");

const { authenticate } = require("../../middlewares");

router.post("/signup", validateBody(userJoiSchema), ctrlWrapper(ctrl.register));
router.post("/login", validateBody(userJoiSchema), ctrlWrapper(ctrl.login));
router.get("/current", authenticate, ctrlWrapper(ctrl.getCurrent));
router.get("/logout", authenticate, ctrlWrapper(ctrl.logout));
router.patch("/avatars", authenticate, upload.single("avatar"), ctrlWrapper(ctrl.updateAvatar))

module.exports = router;
