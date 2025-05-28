import { prisma } from "./db"
import express from "express"

const app = express()

app.use(express.json())

app.post("/user", (req, res) => {
  const email = req.body.email
  const id = req.body.id

  
})

app.listen(3000)
