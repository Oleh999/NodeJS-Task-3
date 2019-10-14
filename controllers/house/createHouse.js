// // const {provider} = require('../../dataBase');
// //
// // module.exports = async (req,res) => {
// //
// //     const {city,area,price,street} = req.body;
// //
// //     const query = `INSERT INTO houses (city,area,price,street) VALUES(${city},${area},${price},${street})`;
// //
// //     await provider.promise().query(query);
// //
// //     res.render('createHouse');
// //
// // };
// const {provider} = require('../../dataBase');
//
// module.exports = async (req,res) => {
//
//
//     const {city,area,price,street} = req.body;
//
//     const query = `INSERT INTO houses (city,area,price,street) VALUES(?,?,?,?)`;
//
//     await provider.promise().query(query,[city,area,price,street]);
//
//     res.render('createHouse');
//
//
// };
//
//
//
const dataBase = require('../../dataBase').getInstance();

module.exports = async (req,res) => {
    try {
        const houseToCreate = req.body;

        const HouseModel = dataBase.getModel('House');

        await HouseModel.create(houseToCreate);

        res.render('createHouse');

    }catch (e) {
        res.status(400).json(e.message);
    }

};

