const express=require('express');
const controller=require('../controllers/user.controller');


const router=express.Router();
/* GET Methods */

// Root Router
router.get('/',controller.index);
// Search Router
router.get('/search',controller.search);
// Create Router
router.get('/create',controller.create);
// Post Create Router
router.post('/create',controller.postCreate);
// Details Users Router
router.get('/:id',controller.get);




module.exports=router;