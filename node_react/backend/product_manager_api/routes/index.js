var express = require('express');
var router = express.Router();

const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sanpham',
  password: 'sondt1610',
  port: 5432,
})

router.get('/', function(req, res, next) { });
//api get data from postgreSql
router.get('/getdata01', function(req, res, next) {

  pool.query('SELECT * FROM product_info', (error, response) => {
    if(error){
      console.log(error);
    }else{
      res.send(response.rows);
    }
    //pool.end()
  })
});
router.get('/add', function(req, res, next) {
  res.render('add', {});
});
router.post('/add', function(req, res, next) {
  var product_name = req.body.product_name,
  product_price = req.body.product_price,
  image = req.body.image;
  pool.query("insert into product_info (product_name, product_price, image) values ($1, $2, $3)", [product_name, product_price, image], (error, response) => {
    if(error){
      res.send(error);
    }else{ 
      res.send('Đã insert dữ liệu thành công ' + product_name + product_price + image);
    }
  })
});

module.exports = router;
