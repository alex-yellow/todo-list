const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const todoRoutes = require('./controllers/todos')

const PORT = process.env.PORT || 3000;

const app = express();
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(todoRoutes);

async function start(){
    try {
        await mongoose.connect('mongodb://localhost:27017', {
            useNewUrlParser: true,
            useUnifiedTopology: true 
        });  
        app.listen(PORT, function(){
            console.log('Server has been started');
        });  
    } catch (error) {
        console.log(error);
    }
}

start();

