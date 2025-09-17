import mongoose from "mongoose";

const magsSchema = new mongoose.Schema({
  publication: { type: String, required: true },
  title: { type: String },
  fullDate: { type: String },
  pubMonth: { type: String },
  pubYear: { type: String },
  volume: { type: String },
  issue: { type: String },
  pages: { type: String },
  createdAt: { type: Date}
});

const Mag = mongoose.models.Mag || mongoose.model("Mag", magsSchema);
export default Mag;