const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static("public"))

mongoose.connect("mongodb+srv://rahulgurram32_db_user:rahul2006@cluster0.vxjlehu.mongodb.net/SkillConnect")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err))
let events = [
{
title:"Smart India Hackathon 2026",
organizer:"Ministry of Education",
date:"Apr 10 2026",
mode:"offline"
},
{
title:"Web Development Bootcamp",
organizer:"Microsoft Learn",
date:"Mar 20 2026",
mode:"online"
}
]

app.get("/events",(req,res)=>{
res.json(events)
})

app.post("/submit",(req,res)=>{
events.push(req.body)
res.json({message:"Event submitted"})
})

app.listen(3000,()=>{
console.log("Server running at http://localhost:3000")
})
