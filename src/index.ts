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
  try {
    const posts = await prisma.Post.findMany({
      where: {
        id: email
      },
    })

app.listen(3000)
