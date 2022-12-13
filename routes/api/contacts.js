const express = require("express");
const Joi = require("joi");

const {RequestError} = require("../../helpers");
const {validateBody} = require("../../middlewares");

const router = express.Router();

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});

const {ctrlWrapper} = require("../../helpers")

// const {
//   listContacts,
//   getContactById,
//   addContact,
//   removeContact,
//   updateContact,
// } = require("../../models/contacts");

const {
  getAll,
  getContactById,
  addContact,
  changeContact,
  deleteContact
} = require("../../controllers/contactsControllers");

router.get("/", ctrlWrapper(getAll));
router.get("/:id", ctrlWrapper(getContactById));
router.post("/", validateBody(schema), ctrlWrapper(addContact));
router.put("/:id", validateBody(schema), ctrlWrapper(changeContact));
router.delete("/:id", ctrlWrapper(deleteContact))

// router.get("/:contactId", async (req, res, next) => {
//   const contact = await getContactById(req.params.contactId);
//   contact ? res.json(contact) : next();
// });

// router.post("/", async (req, res, next) => {
//   const { name, email, phone } = req.body;
//     const {error} = schema.validate(req.body);
//         if(error) {
//             throw RequestError(400, error.message)
//         }

//     const result = await addContact({ name, email, phone });
//   if (!result) {
//     return res.status(500).json({ message: "Internal server error" });
//   }
//     res.status(201).json({result})
// });


// router.delete("/:contactId", async (req, res, next) => {
//   const result = await removeContact(req.params.contactId);
//   result
//     ? res.status(200).json({ message: "contact deleted", result })
//     : res.status(404).json({ message: "Not found" });
// });

// router.put("/:contactId", async (req, res, next) => {
  
//   const {error} = schema.validate(req.body);
//       if(error) {
//           throw RequestError(400, error.message)
//       }

//   const result = await updateContact(req.params.contactId, req.body);
//   result
//     ? res.status(200).json({ result })
//     : res.status(404).json({ message: "Not found" });
// });

module.exports = router;
