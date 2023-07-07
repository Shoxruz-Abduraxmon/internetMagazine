const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('JavaScript' , {
        title: 'Routes',
        isRoutes: true 

    });
});

module.exports = router
