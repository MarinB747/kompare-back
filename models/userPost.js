import mongoose from "mongoose";
const userSchema = mongoose.Schema({
  ime: String,
  prezime: String,
  email: String
});

const userPost = mongoose.model("userPost", userSchema);
export default userPost;
