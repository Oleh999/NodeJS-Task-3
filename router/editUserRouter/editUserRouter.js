const router = require('express').Router();

const {user: userMiddleware} = require('../../middleware');
const {user , pages} = require('../../controllers');

router.get('/',pages.editUser);

router.post('/',userMiddleware.checkEditUserValidityMiddleware,user.editUser );


module.exports = router;