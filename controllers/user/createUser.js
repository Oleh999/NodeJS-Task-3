const dataBase = require('../../dataBase').getInstance();

module.exports = async (req,res) => {
try {
    const userToCreate = req.body;

    const UserModel = dataBase.getModel('User');

    await UserModel.create(userToCreate);

    res.render('login');

}catch (e) {
    res.status(400).json(e.message);
}

};

