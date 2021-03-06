const express = require('express')
const { getProduct, getProducts , createProduct , editProduct } = require('../controllers/product_controller')


const router = express.Router()

router.get( '/' , getProducts )
router.get( '/:id' , getProduct )
router.route('/create').post( createProduct )

router.put( '/edit/:id' , editProduct ) 



module.exports = router