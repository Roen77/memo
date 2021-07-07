
const express = require('express');
const cors = require('cors');
const morgan=require('morgan');
const {sequelize} = require('./models');
const PORT=5000
// router
const userRouter=require('./router/user');
const boardRouter=require('./router/board');
const cardRouter=require('./router/card');
const categoryRouter=require('./router/category');

const app=express()

// db 연결
sequelize.sync()
.then(()=>{
    console.log('db 연결 성공')
})
.catch(err=>console.error(err));

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// router
app.use('/user',userRouter);
app.use('/boards',boardRouter);
app.use('/cards',cardRouter);
app.use('/categorys', categoryRouter);

app.listen(PORT,()=>{
    console.log(`${PORT}번에서 실행중`)
})