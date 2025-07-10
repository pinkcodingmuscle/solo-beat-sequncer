import express from 'express'
//import dotenv from 'dotenv';

// create instance of express app - main server that 
// will handle all HTTP requests and responses
const app = express();

app.use(express.json())

// define a get route for the root path
app.get('/', (req, res) => {
    res.send('API is running!'); 
});

// // load .env file 
// dotenv.config();

// // set port server from .env file, default to 8000 if none found
// const port = process.env.PORT || 8000;

// app.listen(port, () => {
//     console.log(`Server running on port: ${port}`);
// })