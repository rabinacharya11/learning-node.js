const express = require('express');
const cors  = require('cors'); 
const app = express();  
const userRouter = require('../router/bookRouter'); 
const {connect} = require('../db/db');

// use middleware to form the contract for incoming requests
app.use(express.json());  

// use middleware for url encoding

app.use(express.urlencoded({ extended: true })); 

// use handle middleware to handle core policy 

app.use(cors()); 

app.get('/', (req, res, next) => {    
    res.status(200).json({ message: 'Welcome to the API' });    
}
); 

// routers 

app.use('/users', userRouter);



/// bad url or error handler 
/// with middleware

app.use((req, res, next) => { 

    const error = new Error('Not found'); 
    error.status = 404; 
    next(error);  

}); 

app.use((error, req, res, next) => {
    res.status(error.status || 500); 
    res.json({
        error: {
            message: error.message,
            status : error.status
        }
    }); 
}
);

connect();


module.exports = app;  