const express = require('express')
const {MynSchema,MynSchema22} = require('./db/mongodb')


const app = express()

app.use(express.urlencoded({ extended: true })) // to parse the data
app.use(express.json()) // to make the content header     application/json

app.use(express.static(__dirname + '/./public'));

app.post('/',(req,res)=>{
    console.log(req.body)
    let mynewSchema = new MynSchema({username:req.body.username , password:req.body.password});
    mynewSchema.save((err,data)=>{
        if (err) res.json({status : false})
        res.json({status:true, data:data})
    })
})

app.post('/1',(req,res)=>{
    console.log(req.body)
    let mynSchema22 = new MynSchema22({userId:req.body.userId , address:req.body.address , email: req.body.email});
    mynSchema22.save((err,data)=>{
        if (err) res.json({status : false})
        res.json({status:true, data:data})
    })
})



app.listen(3000, () =>{
    console.log('listening' )
})

