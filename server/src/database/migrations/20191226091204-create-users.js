'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', { 
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "This field can't be empty."
                },
                len: {
                    args: [6, 20],
                    msg: "This field has to be between 6 and 20 characters."
                }
            }
        },
        fullName: {
            type: Sequelize.STRING,
            allowNull: false,
            isAlpha: true,
            validate: {
                notEmpty: {
                    msg: "This field can't be empty."
                },
                isAlpha: {
                    msg: "This field have to be only with letters."
                }
            }
        },
        email: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "This field can't be empty."
                },
                isEmail: {
                    msg: "This field needs to be an email."
                }
            }
        },
        hashPass: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "This field can't be empty."
                },
                len: {
                    args: [6, 20],
                    msg: "This field has to be between 6 and 20 characters."
                }
            }
        },
        salt: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "This field can't be empty."
                },
                len: {
                    args: [16],
                    msg: "This field has to be with 16 characters."
                }
            }
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "This field can't be empty."
                },
            },
        },
        updatedAt: {
            type: Sequelize.DATE,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "This field can't be empty."
                },
            },
        },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
