const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api',apiRoutes); // <-- prefixes

router.use((req,res)=>{ // <-- for errant routes that do not exist
    res.status(404).end();
});

module.exports=router;