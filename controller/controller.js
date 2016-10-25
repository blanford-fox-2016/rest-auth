var models = require('../models')
var user = models.users
var jwt = require('jsonwebtoken');


module.exports = {
  getToken:function(req,res,next){
    var username = req.body.username
    password = req.body.password
    var token = jwt.sign({ foo: 'bar' }, 'shhhhh', { expiresIn: 600 });
    user.findOne({
      where:{
        username:username,
        password:password
      }
    }).then(function(user) {
      if(user){
      res.json(token)
    }else{
      res.json({
        msg:"data not found!!"
      })
    }
    })

  },
  displayAll: function(req, res, next) {
    user.findAll({
    }).then(function (user) {
      res.json(user)
    });
  },
  displayOne:function(req,res,next){
          user.findOne({
            where:{
              id:req.params.id
            }
          }).then(function(user) {
            res.json(user)
          })
  },
  delete:function(req, res, next) {
          user.destroy({where:{
            id : req.params.id
          }}).then(res.send('data berhasil dihapus'))
  },
  create:function(req,res,next) {
      user.create({
        username:req.body.username,
        email:req.body.email
      }).catch(function (err) {
        res.send(err.message)
      }).then(res.send('berhasil'))
  },
  updateUser:function(req,res,next){
          user.update({
            username:req.body.username,
            email:req.body.email
          },{where:{
            id:req.params.id
          }}).then(res.send('data berhasil di update'))
      }
}


// updateUser:function(req,res,next){
//   var token = req.query.token
//   if(token){
//     jwt.verify(token, 'shhhhh', function(err, decoded) {
//       if (err) {
//         res.json(err)
//       }else{
//         user.update({
//           username:req.body.username,
//           email:req.body.email
//         },{where:{
//           id:req.params.id
//         }}).then(res.send('data berhasil di update'))
//       }
//     });
//   }else{
//     res.json({
//       msg:"token tidak ditemukan!"
//     })
//   }
// }
