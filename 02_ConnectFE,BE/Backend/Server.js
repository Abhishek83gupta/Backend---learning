const express = require('express');
const app =express();

const port = process.env.PORT || 3000;


app.get('/api/jokes',(req,res)=>{
  const jokes = [{
    id : 1,
    title : "A joke",
    content :"This is a joke"
  },
  {
    id : 1,
    title : "A joke",
    content :"This is a joke"
  },
  {
    id : 2,
    title : "A second joke",
    content :"This is second joke"
  },
  {
    id : 3,
    title : "A third joke",
    content :"This is third joke"
  },
  {
    id : 4,
    title : "A fourth joke",
    content :"This is fourth joke"
  },
  {
    id : 5,
    title : "A fifth joke",
    content :"This is fifth joke"
  }
];
res.send(jokes);
});


app.listen(port,()=>{
  console.log(`Server listening on ${port}`);
});