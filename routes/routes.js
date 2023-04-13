var express=require('express');

var router=express.Router();
var {getUsers,getUser,createUser,updateUser,deleteUser}=require('../controllers/user');

router.route('/users').get(getUsers);
router.route('/user/:id').get(getUser);
router.route('/createUser').post(createUser);
router.route('/deleteUser/:id').delete(deleteUser);
router.route('/updateUser/:id').put(updateUser);

module.exports=router;