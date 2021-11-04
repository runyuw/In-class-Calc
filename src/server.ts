import * as express from 'express';
const app = express();

// allow cross-origin requests
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
 
app.get("/calculator", (request, response) => {
  const op = request.query.op as string;
  const arg1 =  request.query.arg1 as string;
  const arg2 =  request.query.arg2 as string;
  console.log(`received a request to perform an ${op} operation with operands ${arg1} and ${arg2}`);
  let result: number| string;
  switch (op) {
    case "add": {
      result = Number(arg1)+ Number(arg2);
      break
    }
    case "subtract": {
      result = Number(arg1) - Number(arg2);
      break
    }
    case "multiply": {
      result = Number(arg1) * Number(arg2);
      break
    }
    case "divide": {
      result = Number(arg1) / Number(arg2);
      break
    }
    default:{
      result = "invalid operator."
    }
  }
   // TODO: do some real calculations here..
  console.log(`computed result = ${result}`);
  const obj = { result: result };
  response.writeHead(200, {"Content-Type": "application/json"});
  response.end(JSON.stringify(obj));
});

const server = app.listen(8000, function () {  
console.log("Server started. Point your browser at: http://localhost:8000/calculator?op=add&arg1=33&arg2=22");
})