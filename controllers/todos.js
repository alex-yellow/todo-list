const {Router} = require('express');
const Todo = require('../models/Todo');
const router = Router();

router.get('/', async function(req, res){
    const todos = await Todo.find({})
    res.render('index', {
        title: 'Todos list',
        isIndex: true,
        todos
    });
});

router.get('/create', function(req, res){
    res.render('create', {
        title: 'Create todo',
        isCreate: true
    });
});

module.exports = router;