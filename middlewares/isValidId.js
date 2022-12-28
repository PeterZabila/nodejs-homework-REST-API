const { isValidObjectId } = require("mongoose");

const { RequestError } = require("../helpers");

const isValidId = (req, res, next) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    next(RequestError(404, "Invalid id"));
  }
  next();
};

module.exports = isValidId;
