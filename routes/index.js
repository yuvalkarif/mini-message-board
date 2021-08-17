var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Shemtov",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Ashtar",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board' , messages: messages });
});

router.get('/new', function(req,res,next){
  res.render('form', { title: 'Mini Message Board' , messages: messages });
});

router.post('/new',function(req,res,next){
  const messageText = req.body.messages;
  const messageUser = req.body.name;
  messages.push({text: messageText,user: messageUser, added: new Date() })
  res.redirect('/');
})


module.exports = router;
