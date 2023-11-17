
import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv'
import mongoose, { Connection } from 'mongoose'
import { ConnectOptions } from 'mongodb';
import cors from 'cors'

//For env File 
dotenv.config()

const app: Application = express()
app.use(express.json())
app.use(cors())

const port = process.env.PORT || 8000

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

// connect to endpoint with test posts
mongoose.connect('mongodb://localhost:27017/test-posts')
  .then(() => {
    console.log("Connected to MongoDB /test-posts")
  })
  .catch(e => console.log('an error occured in /test-posts/ ', e))

const TestPost = require('./models/test-posts')
console.log('TestPost: ', TestPost)

// list out our posts. If we make a request to :3001, it's gonna find out TestPosts, and we're gonna find it using our model which connected to our mongoose database
app.get('/test-posts', async (req, res) => {
  const testPosts = await TestPost.find()
  
  res.json(testPosts)
})

app.post('/test-posts/new', async (req, res) => {
  try {
    console.log('req 1: ', req.query);
    console.log('req 2: ', req.body);
    const testPost = await new TestPost({
      text: req.body.text
    });

    await testPost.save();
    res.json(testPost);
  } catch (error) {
    console.error('Error in POST /test-posts/new:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(3001, () => {
  console.log(`Server is started at http://localhost:3001`);
})