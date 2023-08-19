import express from "express"

const app = express()
const port = 1000

app.get('/', (request, response) => {
  response.json({});
});

app.listen(port, () => {
  console.log(`[Server]: running on port ${port}`);
});
