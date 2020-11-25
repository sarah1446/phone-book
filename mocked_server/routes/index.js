var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const mockedData = [
  {name : "정성운", phoneNumber: "01012997235", profileImage:"https://storage.googleapis.com/snuper-static/mock_users/1.svg"},
  {name : "기길동", phoneNumber: "01026648657", profileImage:"https://storage.googleapis.com/snuper-static/mock_users/2.svg"},
  {name : "박네오", phoneNumber: "01024423567", profileImage:"https://storage.googleapis.com/snuper-static/mock_users/3.svg"},
  {name: "김행건", phoneNumber: "01073848654", profileImage: "https://storage.googleapis.com/snuper-static/mock_users/4.svg"},
  {name: "이비서", phoneNumber: "01067798324",profileImage:"https://storage.googleapis.com/snuper-static/mock_users/5.svg"},
  {name: "차민규", phoneNumber: "01077554435", profileImage: "https://storage.googleapis.com/snuper-static/mock_users/6.svg"},
  {name: "성시은", phoneNumber: "01044560049", profileImage: "https://storage.googleapis.com/snuper-static/mock_users/7.svg"},
  {name: "탁재훈", phoneNumber: "01019984734", profileImage: "https://storage.googleapis.com/snuper-static/mock_users/8.svg"},
  {name: "허재화", phoneNumber: "01099287645", profileImage: "https://storage.googleapis.com/snuper-static/mock_users/9.svg"},
  {name: "조재현", phoneNumber: "01039453326", profileImage: "https://storage.googleapis.com/snuper-static/mock_users/10.svg"},
  {name: "백상현", phoneNumber: "01055152235", profileImage: "https://storage.googleapis.com/snuper-static/mock_users/11.svg"},
  {name: "이가현", phoneNumber: "01088123435", profileImage: "https://storage.googleapis.com/snuper-static/mock_users/12.svg"},
];

/* GET home page. */
router.get('/user/list', function(req, res, next) {
  res.send(mockedData);
});

module.exports = router;
