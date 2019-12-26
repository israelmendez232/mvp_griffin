import User from '../models/User';

module.exports = {
    async findOne(req, res) {
        const { email } = req.params;
        const user = await User.findOne({
            where: {
                email: email,
            },
            order: [ [ 'createdAt', 'DESC' ]],
        });

        return res.json(user);
    },
    
    async index(req, res) {
        const users = await User.findAll();

        return res.json(users);
    },

    async store(req, res) {
        const { name, email } = req.body;

        const user = await User.create({ name, email });

        return res.json(user);
    }
};
