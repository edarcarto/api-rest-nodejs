'use sctrict';

const express = require('express');
const ProductCtrl = require('../controllers/product');
const auth = require('../middlewares/auth');
const UserCtrl = require('../controllers/user');
const api = express.Router();

api.get('/products',auth,ProductCtrl.getProducts);
api.get('/product/:productId',ProductCtrl.getProduct);
api.post('/product',ProductCtrl.saveProduct);
api.put('/product/:productId',ProductCtrl.updateProudct);
api.delete('/product/:productId',ProductCtrl.deleteProduct);
//users
api.post('/signup',UserCtrl.signUp);
api.post('/signin',UserCtrl.signIn);
api.get('/private',auth,function(req,res){
  res.status(200).send({ message: 'Tienes acceso'});
});

module.exports = api;
