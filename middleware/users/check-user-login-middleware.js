// const {provider} = require('../../dataBase');
//
//
// module.exports = async ( req, res, next) => {
//
//     try {
//
//         const { password,email } = req.body;
//
//     const query = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`;
//         const [checkLoginUser] = await provider.promise().query(query);
//
//         if (!checkLoginUser.length){
//             throw new Error(`Incorrect values`);
//         }
//
//         req.user = checkLoginUser;
//         next();
//
//     } catch (e) {
//
//         res.status(400).json(e.message);
//
//     }
// };
//
// const dataBase = require('../../database').getInstance();
//
// module.exports = async (req, res, next) => {
//     try {
//         const { email, password  } = req.body;
//         const UserModel = dataBase.getModel('User');
//
//         let userExist = await UserModel.findOne({
//             where: {
//                 name,
//                 email,
//                 password
//             },
//             attributes: ['id']
//         });
//
//         if (!userExist) {
//             throw new Error('Incorrect values');
//         }
//
//         req.user = userExist.dataValues;
//
//         next();
//     } catch (e) {
//         res.status(400).json(e.message);
//     }
// };
const dataBase = require('../../dataBase').getInstance();

module.exports = async ( req, res, next) => {
    try {
        const { email, name, password } = req.body;

        const UserModel = dataBase.getModel('User');
        let checkLoginUser = await UserModel.findOne({
            where: {
                email,
                name,
                password
            }
        });
        if (!checkLoginUser){
            throw new Error(`Incorrect values`);
        }

        req.user = checkLoginUser;
        next();

    } catch (e) {

        res.status(400).json(e.message);

    }
};