const express = require('express')
const  bodyParser = require('body-parser')
const app= express();
app.use(bodyParser.urlencoded({extended:true}));
app.use( express.static(__dirname+"/public"))
app.set('view engine', 'ejs');

//variable
let resultString="";
let weight
let height 
let age


app.get('/',function(req,res){
    
   
    res.render('bmi', {result: resultString, inputWeight: weight, inputHeight: height, inputAge: age});
    resultString="";
    age=null
    height =null
    weight=null
})

app.post('/', function(req,res){
    age= req.body.age;
    weight = Number(req.body.weight);
    height = Number(req.body.height);
    let bmi = weight/((height/100)*(height/100));
    resultString=`Your BMI Result is: ${bmi.toFixed(1)}`;

    res.redirect('/');
})




app.listen(3000, ()=>{
    console.log('listening on port 3000');
})