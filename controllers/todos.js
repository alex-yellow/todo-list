const {Router} = require('express');
const router = Router();

router.get('/', function(req, res){
    res.render('index', {
        title: 'Todos list',
        isIndex: true
    });
});

router.get('/create', function(req, res){
    res.render('create', {
        title: 'Create todo',
        isCreate: true
    });
});

module.exports = router;