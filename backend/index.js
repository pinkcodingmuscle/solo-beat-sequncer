import dotenv from 'dotenv';
import app from './server.js';

async function main () {
    // load .env file 
    dotenv.config();

    // set port server from .env file, default to 8000 if none found
    const port = process.env.PORT || 8000;

    try{
        app.listen(port, () => {
        console.log(`Server running on port: ${port}`);
        })
    }catch(e){
        // if above step fails log error and app exists with code 1
        console.error(e);
        process.exit(1);
    }
}
main().catch(console.error);