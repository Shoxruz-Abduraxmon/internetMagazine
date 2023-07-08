const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('Components' , {
        title: 'Canpania',
        isCanpania: true
    });
});

router.post('/', (req, res) => {
    console.log(req.body);

    res.redirect('/JavaScript');
})

module.exports = router
