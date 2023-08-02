const {Router} = require('express');
const Components = require('../data/baza');
const router = Router();

router.get('/', async (req, res) => {
    let kampaniya = await Components.find();

    res.render('JavaScript' , {
        title: 'Routes',
        isRoutes: true,
        kampaniya 

    });
});

module.exports = router
