import User from '../models/User';
import crypto from 'crypto';
import config from '../../../config';

function encrypt(text, config) {
    const algorithm = config.hash.algorithm;
    const key = Buffer.from(config.hash.key, 'utf8');
    const salt = crypto.randomBytes(16);

    let cipher = crypto.createCipheriv(algorithm, key, salt);
    let encrypted = cipher.update(text);
    encrypted += cipher.final('hex');
    return { salt: salt.toString('hex'), hashPass: encrypted.toString('hex') };
}

function decryptPass(password, salty, config) {
    const salt = Buffer.from(salty, 'hex');
    const encryptedText = Buffer.from(password, 'hex');
    const key = Buffer.from(config.hash.key, 'utf8');
    const algorithm = config.hash.algorithm;

    let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), salt);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}

module.exports = {    
    async index(req, res) {
        const users = await User.findAll();

        return res.json(users);
    },

    async create(req, res) {
        const { fullName, email, password } = req.body;

        const { salt, hashPass } = encrypt(password, config);

        console.log(salt, hashPass);

        const user = await User.create({ fullName, email, hashPass, salt });

        return res.json(user);
    },

    async update(req, res) {
        const { fullName, email } = req.body;
        const user = await User.findOne({
            where: {
                email: email,
            },
            order: [[ 'createdAt', 'DESC' ]],
        });

        if (!user) { 
            return res.status(400).json({ error: 'User not found' }); 
        } else {
            await user.update({ fullName, email });
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
            const pass = await decryptPass(user.hashPass, user.salt, config);
            return res.status(200).json({ 
                id: user.id, 
                fullName: user.fullName, 
                email: user.email, 
                password: pass,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt
            }); 
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
