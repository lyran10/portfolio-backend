const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const app = express()
const router = express.Router
const sendEmail = require("./utils/sendEmail")
const bodyParser = require("body-parser")

dotenv.config()

app.use(express.json())
// app.use(bodyParser.json())
app.use(cors());

// app.get("/",(req,res) => {
//   res.send("yoo")
// })

app.post("/api/sendemail",async(req,res) => {
 const {subject,from,msg} = req.body.person

 try {
  await sendEmail(subject,msg,from,from)
  res.status(200).json({msg : "success"})
 } catch (error) {
  console.log(error)
 } 
})

app.listen(process.env.PORT,() => {
  console.log(`listening ${process.env.PORT}`)
})
