const router = require('express').Router();

const {user: userMiddleware} = require('../../middleware');
const {user , pages} = require('../../controllers');
// const {} = require('../../controllers/pages');

 router.post('/', userMiddleware.checkUserValidityMiddleware,user.createUser);

 router.get('/findAll',user.findAll);


 router.get('/:user_id',userMiddleware.checkIsUserPresentMiddleware,user.getUserById );


 router.get('/', pages.register);




module.exports = router;