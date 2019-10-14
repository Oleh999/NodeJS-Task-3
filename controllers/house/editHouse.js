const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {

        const { house_id } = req.body;

        const parameters = req.body;

        const HouseModel = dataBase.getModel('House');

        await HouseModel.update(parameters,{
            where: {
                id: house_id
            }});


        res.json('House was edited');
    } catch (e) {
        res.status(400).json(e.message);
    }
};


