const express = require('express');
const path = require('path');
const db =require("../database/index")
const cors =require("cors")
const PORT = 3000;
const app = express();
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'public')));


app.get('/country',(req,res)=>{
   db.query('SELECT * FROM countries', function(err,result){
    if(err){
    console.log(err)}
    res.send(result)
   })
}
)

app.post('/country',(req,res)=>{
  db.query(`INSERT INTO countries (countryname ,countrydescription) VALUES ("${req.body.countryname}","${req.body.countrydescription}")`,
  (err,result)=>{
    if (err){
      res.send(err)
    }else{
      res.send(result)
    }
  })
})

app.delete('/country/:id',(req,res)=>{
  console.log(req.params)
  db.query(`DELETE FROM countries WHERE id=${req.params.id}`,(err,result)=>{
    if (err){
      console.log(err)
    }else{
      res.send("no way you deleted me")
      console.log("no way you deleted me")
    }
  })
})

app.put('/country/:id',(req,res)=>{
  db.query(`UPDATE countries SET countryname ="${req.body.countryname} ",countrydescription="${req.body.countrydescription}" WHERE id=${req.params.id}`,(err,result)=>{
    if (err){
      console.log(err)
    }else{
      res.send("updated!")
    }
  })
})
app.listen(PORT, () => {
  console.log(`Server listening at localhost:${PORT}!`);
});