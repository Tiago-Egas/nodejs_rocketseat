const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({message: "Hello, world!"});
})

// localhost:3333
app.listen(3333)