const express = require("express");
const router = express.Router();

const {validateBody, isValidId} = require("../../middlewares");
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

router.get("/", ctrlWrapper(getAll));
router.get("/:id", isValidId, ctrlWrapper(getContactById));
router.post("/", validateBody(schema), ctrlWrapper(addContact));
router.put("/:id", isValidId, validateBody(schema), ctrlWrapper(changeContact));
router.patch("/:id/favourite", isValidId, validateBody(updateFavouriteSchema), ctrlWrapper(updateFavourite))
router.delete("/:id", ctrlWrapper(deleteContact))

module.exports = router;
