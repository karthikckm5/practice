var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Timmavaidya@123",
  database: "timma"
});



const express = require("express");

const app = express();
app.use(express.json());
app.get("/",function(req,res)
{
  res.send(" bhcbhjb");
})


app.get("/email/:emailID", function(req,res){
    var  email= req.params.emailID;
    console.log(email);
    //res.send(email);
    con.connect(function(err) {
      if (err) throw err;
      //Select all customers and return the result object:
      con.query("SELECT points FROM users where email = '"+email+"'", function (err, result, fields) {
        if (err) throw err;
        res.send(result);
         
      });
    });

});

app.post("/update", function(req,res){
 
  var data = req.body;
      var name =req.body[0].name;
      var email=req.body[0].email;
      var password =req.body[0].password;
      var points =req.body[0].points;
  con.connect(function(err) {
    if (err) throw err;
    //Select all customers and return the result object:
    con.query("insert into users values('"+name+"','"+email+"','"+password+"',"+points+");", function (err, result, fields) {
      if (err) throw err;
      
      res.send(" success!");
       
    });
  });

});







app.listen(3001, function(){

  console.log("Server is running");

}
);
