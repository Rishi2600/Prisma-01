import { prisma } from "./db"
import express from "express"

const app = express()

app.use(express.json())

app.post("/user", async (req, res) => {
  const { email, name } = req.body

  try {
    const user = await prisma.User.create({
      data: {
        email: email,
        name: name
      }
    })
  } catch(e) {
    console.log(e)
    res.send("unable to create user")
  }
  
})

app.get("/user", (req, res) => {
  res.json({
    message: "user details fetched"
  })
})

app.post("/posts", async (req, res) => {

  const { name, email, description, userId } = req.body 
  
  try {
    const posts = await prisma.Post.findMany({
      where: {
        id: email
      },
    })

    if(!posts) {
      const post = await prisma.Post.create({
        name: name,
        email: email,
        description: description,
        userId: userId
      })
      res.send(post)
    } esle {
    console.log("posts available")
      
  } catch(e){
      console.log(e)
      res.json({
        message: "unable to create post
      })
  }

app.listen(3000)
