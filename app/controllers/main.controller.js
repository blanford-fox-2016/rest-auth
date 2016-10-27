const Data = require('./app/models/datas')

module.exports = {
    findUser: findUser,
    checkToken: checkToken,
    showMain: showMain,
    seedData: seedData,
    getDatas: getDatas,
    postData: postData,
    getData: getData,
    editData: editData,
    deleteData: deleteData
}

function findUser(req, res) {
    //find the user

    Data.findOne({ name: req.body.name }, function(err, data) {

        if (err)
            res.send(err)

        if (!data) {
            res.json({ success: false, message: 'Authentication failed. User not found!' })
        } else if (data) {
            //check if password matches
            if (data.password != req.body.password) {
                res.json({ success: false, message: 'Authentication failed. Wrong pass!' })
            } else {
                //if user not found and password is right
                //create token
                var token = jwt.sign(data, app.get('secretku'), {
                    expiresIn: 60 * 60 * 24 // expires in 24 hours
                })

                res.json({
                    success: true,
                    message: 'Enjoy your token',
                    token: token
                })
            }
        }
    })
}

function checkToken(req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token']

    if (token) {
        //verifies secret and checks exp
        jwt.verify(token, app.get('secretku'), function(err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'failed to authenticate token.' })
            } else {
                //if everything's good, save request for use in other routes
                req.decoded = decoded
                next()
            }
        })
    } else {
        //if there's no token
        //return an error
        return res.status(403).send({
            success: false,
            message: 'no token provided'
        })
    }
}

function showMain(req, res) {
    res.send('Ini API nya!')
}

function seedData(req, res) {
    var datas = [
        { name: 'tevinstein', password: 'tevinstein', admin: true },
        { name: 'sahbana', password: 'sahbana', admin: true },
        { name: 'digachandra', password: 'digachandra', admin: false }
    ]

    Data.remove({}, () => {
        for (var i = 0; i < datas.length; i++) {
            var newData = new Data(datas[i])
            newData.save()
        }
    })

    res.send('Database seeded!')
}

function postData(req, res) {
    var data = new Data()
    data.name = req.body.name
    data.password = req.body.password
    data.admin = req.body.admin

    data.save(function(err) {
        if (err)
            res.send(err)

        res.send('data berhasil dibuat!')
    })
}

function getDatas(req, res) {
    Data.find(function(err, datas) {
        if (err)
            res.send(err)

        res.send(datas)
    })
}

function getData(req, res) {
    Data.findById(req.params.id, function(err, data) {
        if (err)
            res.send(err)

        res.send(data)
    })
}

function editData(req, res) {
    Data.findById(req.params.id, function(err, data) {
        if (err)
            res.send(err)

        data.name = req.body.name
        data.password = req.body.password
        data.admin = req.body.admin

        data.save(function(err) {
            if (err)
                res.send(err)

            res.send('data berhasil diupdate!')
        })
    })
}

function deleteData(req, res) {
    Data.remove({
        _id: req.params.id
    }, function(err, data) {
        if (err)
            res.send(err)

        res.send('data berhasil didelete!')
    })
}
