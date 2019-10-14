const router = require('express').Router();

const {house: houseMiddleware} = require('../../middleware');
const {house , pages} = require('../../controllers');

router.get('/',pages.editHouse);

router.post('/',houseMiddleware.checkEditHouseValidityMiddleware,house.editHouse );


module.exports = router;