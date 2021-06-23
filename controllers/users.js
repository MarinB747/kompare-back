import mongoose from "mongoose";
import userPost from "../models/userPost.js";

export const getUsers = async (req, res) => {
  try {
    const userPosts = await userPost.find();
    res.status(200).json(userPosts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  const user = req.body;
  const newUser = new userPost(user);
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No user with that id");
  await userPost.findByIdAndRemove(id);
  res.json({ message: "Post deleted successfully" });
};
