import express from 'express'
import * as dotenv from 'dotenv'
import corse from 'cors'

import connectDB from './mongodb/connect';

dotenv.config();


const app = express();
app.use(corse())
app.use(express.json({limit:'50mb'}));


app.get('/',async (req,res)=>{
    res.send('hellow from dalle backend')
})

const startServer = async ()=>{

    try {
        
    }catch (err){

    }

    app.listen(8080,()=>{console.log('server has started on port 8080')})
}

startServer();