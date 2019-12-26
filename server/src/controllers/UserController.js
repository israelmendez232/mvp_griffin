import User from '../models/User';

module.exports = {    
    async index(req, res) {
        const users = await User.findAll();

        return res.json(users);
    },

    async create(req, res) {
        const { name, email } = req.body;

        const user = await User.create({ name, email });

        return res.json(user);
    },

    async update(req, res) {
        const { name, email } = req.body;
        const user = await User.findOne({
            where: {
                email: email,
            },
            order: [[ 'createdAt', 'DESC' ]],
        });

        if (!user) { 
            return res.status(400).json({ error: 'User not found' }); 
        } else {
            await user.update({ name, email });
            return res.status(200).json({ message: 'User UPDATED successfully.', user: user }); 
        }
    },

    async read(req, res) {
        const { email } = req.params;
        const user = await User.findOne({
            where: {
                email: email,
            },
            order: [[ 'createdAt', 'DESC' ]],
        });
        
        if (!user) { 
            return res.status(400).json({ error: 'User not found' }); 
        } else {
            return res.status(200).json(user); 
        }
    },

    async delete(req, res) {
        const { email } = req.params;

        const user = await User.findOne({
            where: {
                email: email,
            },
            order: [[ 'createdAt', 'DESC' ]],
        });

        if (!user) { 
            return res.status(400).json({ error: 'User not found' }); 
        } else {
            await user.destroy(user);
            return res.status(200).json({ message: 'User DELETED successfully.' }); 
        }
    }
};
