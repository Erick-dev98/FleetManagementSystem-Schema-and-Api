import express from "express";
const app = express();

// Make an api request using express server
app.get("/", (req,res)=>{
    res.json("Hello this is the backend")
})

app.listen(5000, ()=>{
    console.log("API working!")
});
