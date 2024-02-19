const express = require('express')
const router = express.Router()

/// get route for the users routes defined
/// https:localhost:3001/users
router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Welcome to the users API',
    success: true,
    data: [],
    metadata: { hostname: req.hostname, method: req.method, path: req.path },
  })
})


/// routes to get a single data  
/// http://localhost:3001/users/1 
router.get('/:id', (req, res, next) => {
  res.status(200).json({
    message: 'Welcome to the user API',
    success: true,
    data: [],
    metadata: {
      hostname: req.hostname,
      method: req.method,
      path: req.path,
      params: req.params,
    },
  })
}) 

/// routes to post a single data 

router.post('/', (req, res, next)=>{ 

    res.status(201).json({
        message : "Successfully created a user", 
        success : true, 
        data : [], 
        metadata : {
            hostname : req.hostname, 
            method : req.method, 
            path : req.path, 
            body : req.body
        }
    });
});

/// routes to update a single data 

router.patch('/:id', (req, res, next)=>{ 

    res.status(200).json({
        message: "Successfully updated a user", 
        success : true,
        data: [] , 
        metadata : { 
            hostname : req.hostname, 
            method : req.method, 
            path : req.path, 
            body : req.body, 
            params : req.params
        }

    });
});

/// put request to update a single data
router.put('/:id', (req, res, next)=>{ 

    res.status(200).json({
        message: "Successfully updated a user", 
        success : true,
        data: [] , 
        metadata : { 
            hostname : req.hostname, 
            method : req.method, 
            path : req.path, 
            body : req.body, 
            params : req.params
        }
        
    });
});

/// delete request to delete a single data
router.delete('/:id', (req, res, next)=>{ 

    res.status(200).json({
        message: "Successfully updated a user", 
        success : true,
        data: [] , 
        metadata : { 
            hostname : req.hostname, 
            method : req.method, 
            path : req.path, 
            body : req.body, 
            params : req.params
        }
        
    });
});

module.exports = router
