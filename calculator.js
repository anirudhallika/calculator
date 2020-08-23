const expresstest = require("express");
const app = expresstest();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000,function(){
  console.log("server started on port3000");
})
// app.get("/",function(req,res){
//   res.send("<h1>hello world</h1>");
// });
app.get("/",function(req,res){
  //console.log(__dirname+"/index.html");
  res.sendFile(__dirname+"/index.html");
});

// app.post("/",function(req,res){
//   //console.log(req.body.num1);
// var a = Number(req.body.num1);
// var b = Number(req.body.num2);
// var c = a+b;
//   res.send("The result of calculation is "+c);
// })

app.post('/addition', function (req, res) {
  var a = Number(req.body.num1);
  var b = Number(req.body.num2);
  var c = a+b;
  res.send("The result of addition is "+c);
});

app.post('/substract', function (req, res) {
  var a = Number(req.body.num1);
  var b = Number(req.body.num2);
  var c = a-b;
  res.send("The result of substraction is "+c);
});

app.post('/multiply', function (req, res) {
  var a = Number(req.body.num1);
  var b = Number(req.body.num2);
  var c = a*b;
  res.send("The result of multiplication is "+c);
});

app.post('/divide', function (req, res) {
  var a = Number(req.body.num1);
  var b = Number(req.body.num2);
  var c = a/b;
  res.send("The result of division is "+c);
});
