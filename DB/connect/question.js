// db/models/Joke.js
import mongoose from "mongoose";

const { Schema } = mongoose;

const questionSchema = new Schema(
  {
    question: { type: String },
    answer: { type: String },
    category: { type: String },
    bookmark: { type: Boolean, default: false },
  },
  {
    collection: "questions",
  }
);

const Question =
  mongoose.models.Question || mongoose.model("Question", questionSchema);

export default Question;
