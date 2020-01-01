import { Model, DataTypes } from 'sequelize';

class User extends Model {
    static init(sequelize) {
        super.init({
            fullName: DataTypes.STRING,
            email: DataTypes.STRING,
            hashPass: DataTypes.STRING,
            salt: DataTypes.STRING
        }, {
            sequelize,
            tableName: 'users',
        });
    };
};

module.exports = User;
