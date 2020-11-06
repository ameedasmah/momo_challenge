const {MynSchema,MynSchema22} = require('../db/mongodb')

module.exports = {
    post1: (req, res) => {

        console.log(req.body)
        let mynewSchema = new MynSchema({ username: req.body.username, password: req.body.password });
        mynewSchema.save((err, data) => {
            if (err) res.json({ status: false })
            res.json({ status: true, data: data })
        })

    },
    post2: (req, res) => {

        console.log(req.body)
        let mynSchema22 = new MynSchema22({ userId: req.body.userId, address: req.body.address, email: req.body.email });
        mynSchema22.save((err, data) => {
            if (err) res.json({ status: false })
            res.json({ status: true, data: data })
        })

    }
}