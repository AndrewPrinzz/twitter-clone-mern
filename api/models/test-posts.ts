import mongoose from "mongoose"

// specify our schema
const TestPostsSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  timestamp: {
    type: String,
    default: Date.now()
  }
})

// we create the modal. We've got schema
const TestPost = mongoose.model("TestPost", TestPostsSchema)

module.exports = TestPost

