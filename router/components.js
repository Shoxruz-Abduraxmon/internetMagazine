const {Router} = require('express');
const Components = require('../data/baza');
const router = Router();

router.get('/', (req, res) => {
    res.render('Components' , {
        title: 'Canpania',
        isCanpania: true
    });
});

router.post('/', async (req, res) => {
    console.log(req.body);

// kampaniya = new Components(req.body.img, req.body.name, req.body.vazifasi, req.body.maosh);

const kampaniya = new Kampaniya({
    img: req.body.img,
    name: req.body.name,
    vazifasi: req.body.vazifasi,
    maosh: req.body.maosh
});

try{
    await kampaniya.save()
    res.redirect('/JavaScript');
}catch (err) {
    console.log(err);
}


})

module.exports = router
