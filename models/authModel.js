const mongoose = require("mongoose");
const TableSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});
const Table = mongoose.model("authModel", TableSchema);
module.exports = Table;