const {Router} = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('Components' , {
        title: 'Canpania',
        isCanpania: true
    });
});


module.exports = router
