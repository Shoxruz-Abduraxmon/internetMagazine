const {Router} = require('express');
const Components = require('../data/baza');
const router = Router();

router.get('/', async (req, res) => {
    let kampaniya = await Components.find()
    res.render('JavaScript' , {
        title: 'Routes',
        isRoutes: true,
        kampaniya 

    });
});


// router.get('/:id', async(req, res) => {
//     const kampaniya = await Components.findById(req.params.id);
//     res.render('maxsulot', {
//         layout: 'ikkinchi',
//         title: `maxsulotlar ${kampaniya.title}` 
//     });
// })

module.exports = router
