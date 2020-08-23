const bmiexpress = require('express');
const app=bmiexpress();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.listen('8080',function()
{
  console.log("BMI Server Started");
})

app.get("/",function(req,res){
  res.sendFile(__dirname+"/bmicalculator.html");
})

app.post("/bmicalculator",function(req,res){
  var wt = parseFloat(req.body.weight);
  console.log(wt);
  var ht = parseFloat(req.body.height);
  console.log(ht);
  var BMI = Math.floor(wt/(ht*ht));
  console.log(BMI);
  if (BMI >24.9){
      res.send("Your BMI is "+BMI+", so you are overweight.");
  }
      if (BMI >=18.5 && BMI <=24.9)
      {
        res.send("Your BMI is "+BMI+", so you have a normal weight.");
      }
  else (BMI <18.5)
  {
      res.send("Your BMI is "+BMI+", so you are underweight.");
  }
  res.send("Your BMI Value is "+BMI);
})
