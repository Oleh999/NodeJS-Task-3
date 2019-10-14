const express = require('express');
const expHbs = require('express-handlebars');
const path = require('path');
const app = express();

const db = require('./dataBase').getInstance();
db.setModels();

app.use(express.json());
app.use(express.static(path.join(__dirname,'static')));
app.use(express.urlencoded({extended:true}));

app.engine('hbs', expHbs({
    defaultLayout: null,
}));

app.set('view engine','.hbs');
app.set('views',path.join(__dirname,'static'));


let { usersRouter, authRouter,editHouseRouter,editUserRouter,housesRouter } = require('./router');

app.use('/register',usersRouter);
app.use('/auth',authRouter);
app.use('/createHouse',housesRouter);
app.use('/editHouse',editHouseRouter);
app.use('/editUser',editUserRouter);

app.all('*',(req,res)=>{
    res.json('404 NOT FOUND' );
});

app.listen(3000,()=>{
    console.log('3000');
});

