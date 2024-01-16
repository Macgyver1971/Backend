let express  = require("express")
let app = express()
let path = require("path")

app.listen(8080,()=>{
  console.log("Server started on 8080")
})

app.set("view engine","ejs")
app.set("views",path.join(__dirname,"/views"))


app.get("/",(req,res)=>{
  res.render("home")
})

app.get("/ig/:username",(req,res)=>{
  let {username} = req.params
  res.render("insta",{username})
})

app.get("/search",(req,res)=>{
  let {q} = req.query
  res.send(q)
})

app.get("")