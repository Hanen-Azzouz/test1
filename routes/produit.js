var express = require('express');
//const productEntity = require('../model/productEntity');
var router = express.Router();
var Produit=require('../model/productEntity');


/* Affichet les produits  */
router.get('/', function(req, res, next) {  
 Produit.find(function(err,data){
if(err)throw err;

res.render('showproducts.twig',{data});

 });

});
//1: Ajout d'un nouveau produit
router.get('/formadd',function(req,res,next){
res.render('ajouter.twig');

});
//2: action d'ajout dans hanendb
router.post('/addaction',function(req,res,next){
var newProduct=new Produit({
  designation:req.body.nom,
  type:req.body.type,
  prix:req.body.price
});
newProduct.save();
res.redirect('/produits');


});

//supprimer un produit
router.get('/delete/:id',(req,res,next)=>{
var identifiant=req.params.id;
Produit.findOneAndRemove({_id:identifiant},function(err){});
res.redirect('/produits')

});

//modifier un produit
router.get('/update/:id',(req,res,next)=>{

  var identif=req.params.id;
  Produit.findById({_id : identif},function(err,data)
 {if(err)throw err;
  res.render('formupdate.twig',{data});

 });
  
});
router.post('/updateaction',(req,res,next)=>{
var ident=req.body.secretid;
Produit.findById({_id:ident},function(err,data){
data.designation=req.body.nom;
data.type=req.body.type;
data.prix=req.body.price;
data.save();
});
res.redirect('/produits/');
});
//chercher par designation et type et prix
router.post('/searchAction',(req,res,next)=>{

 var search1=req.body.searchnom;
  var search2=req.body.searchtype;

  Produit.find({type:search2},function(err,data){
    if(err)throw err;
    res.render('showproducts.twig',{data})
  });
});
  /*recherche avec 2 critéres
  Produit.find({designation:search1,type:search2},function(err,data){
    if(err)throw err;
    res.render('showproducts.twig',{data})
  });
});*/


module.exports = router;
