const {Router} = require('express');
const Components = require('../data/baza');
const router = Router();

router.get('/', (req, res) => {
    res.render('Components' , {
        title: 'Canpania',
        isCanpania: true
    });
});

router.post('/', (req, res) => {
    console.log(req.body);

kampaniya = new Components(req.body.img, req.body.name, req.body.vazifasi, req.body.maosh);

kampaniya.save()
    res.redirect('/JavaScript');
})

module.exports = router
