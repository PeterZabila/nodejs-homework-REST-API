const { RequestError } = require("../helpers");
const { Contact } = require("../models/contact");

const getAll = async (req, res) => {
  const contacts = await Contact.find({});
  res.json({ contacts });
};

const getContactById = async (req, res) => {
  const { id } = req.params;
  const contact = await Contact.findById(id);

  if (!contact) {
    throw RequestError(404, `failure, no contacts with id '${id}' found`);
  }
  res.json({ contact, status: "success" });
};

const addContact = async (req, res) => {
  const result = await Contact.create(req.body);

  res.status(201).json(result);
};

const changeContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.json(result);
};

const updateFavourite = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.json(result);
};

const deleteContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndRemove(id);
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.json({
    message: "Contact deleted successfully",
  });
};

module.exports = {
  getAll,
  getContactById,
  addContact,
  changeContact,
  deleteContact,
  updateFavourite,
};
