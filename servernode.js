const express = require('express');
const app = express();

const port = 8080;

var id = 1630902599;
var age = "twenty";
var mascots = [
    { name : "Cat" , Location : "BKK" , birth_year : 2000 },
    { name : "Dog" , Location : "LDN" , birth_year : 2010 },
    { name : "Bird" , Location : "TYO" , birth_year : 2020 }
];


var icon = [
    {img : "Images/icons8-facebook.svg" ,top : "grittamet wilai" ,buttom : "Facebook"},
    {img : "Images/icons8-instagram.svg" ,top : "gritz.vv" ,buttom : "Instagram"},
    {img : "Images/icons8-music.svg" ,top : "Music"}

];
var feature = [
    {img : "Images/programing.svg" ,top : "Programming" ,bottom : "Talk is cheep show me the code." },
    {img : "Images/robotics.svg" ,top : "Robotics" ,bottom : "Learn from yesterday live for today and hope for tomorrow." }
];

var herofont = "555 Be heroes of your own Stories.";

app.set('view engine','ejs')
app.use(express.static('public'));

app.get("/get",(req,res) =>{
    res.send ("This is get method");
})

app.get("/",(req,res) =>{
    res.render('index',{studentid : id , age : age , objmascots : mascots})
})

app.get("/index2",(req,res) =>{
    res.render('index2', {objfeature : feature, herofont : herofont, objicon : icon} )
})

app.listen(port,() => {
    console.log ("Server is Listening on port: ",port)
})