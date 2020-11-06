const express = require('express')
const controller1 = require('./controller/controller1')
const {MynSchema,MynSchema22} = require('./db/mongodb')

const mysqldb = require('./db/mysql')


const app = express()

app.use(express.urlencoded({ extended: true })) // to parse the data
app.use(express.json()) // to make the content header     application/json

app.use(express.static(__dirname + '/./public'));

app.post('/',controller1.post1)

app.post('/1',controller1.post2)



app.listen(3000, () =>{
    console.log('listening' )
})

