'use strict';
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: { isEmail: true }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.ENUM('admin', 'doctor', 'patient'),
            defaultValue: 'patient'
        }
    }, { tableName: 'users', timestamps: true });

    User.associate = (models) => {
        User.hasMany(models.Patient, { foreignKey: 'createdBy' });
        User.hasMany(models.Mapping, { foreignKey: 'userId' });
    };

    return User;
};
