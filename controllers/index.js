const router = require('express').Router();

const apiRoutes = require('./api');

const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');

// <-- prefixes -->
router.use('/api', apiRoutes); 
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);

router.use((req, res) => { // <-- for errant routes that do not exist
    res.status(404).end();
});

module.exports = router;