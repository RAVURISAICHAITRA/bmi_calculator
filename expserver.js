const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
    res.send("welcome")
})
app.get("/about", function (req, res) {
    res.send("this is about page")
})
app.get("/contact", function (req, res) {
    res.send("this is contact us page")
})
app.get("/calculator", function (req, res) {
    res.sendFile(__dirname + "/index.html")
})
app.post("/calculator", function (req, res) {
    console.log(req.body);
    let n1 = Number(req.body.v1);
    let n2 = Number(req.body.v2);
    let sum = n1 + n2;
    res.send("the sum of two numbers is "+sum);
})
app.get("/bmi", function (req, res) {
    res.sendFile(__dirname + "/bmi.html")
})
app.post("/bmi", function (req, res) {
    let we = Number(req.body.weight);
    let he = Number(req.body.height);
    let bmi = we /(he*he);
    res.send("The bmi of your body is : "+bmi);
})
app.listen(3000,function(req,res){
    console.log("Server is running")
});