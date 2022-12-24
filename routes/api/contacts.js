const express = require("express");
const router = express.Router();

const {validateBody, isValidId, authenticate} = require("../../middlewares");
const {updateFavouriteSchema, schema} = require("../../models/contact")
const {ctrlWrapper} = require("../../helpers");

const {
  getAll,
  getContactById,
  addContact,
  changeContact,
  deleteContact,
  updateFavourite
} = require("../../controllers/contactsControllers");

router.get("/", authenticate, ctrlWrapper(getAll));
router.get("/:id", authenticate, isValidId, ctrlWrapper(getContactById));
router.post("/", authenticate, validateBody(schema), ctrlWrapper(addContact));
router.put("/:id", authenticate, isValidId, validateBody(schema), ctrlWrapper(changeContact));
router.patch("/:id/favourite", authenticate, isValidId, validateBody(updateFavouriteSchema), ctrlWrapper(updateFavourite))
router.delete("/:id", authenticate, ctrlWrapper(deleteContact))

module.exports = router;
