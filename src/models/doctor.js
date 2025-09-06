'use strict';
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Doctor = sequelize.define('Doctor', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: { type: DataTypes.STRING, allowNull: false },
        specialization: { type: DataTypes.STRING },
        email: { type: DataTypes.STRING, allowNull: false, unique: true }
    }, { tableName: 'doctors', timestamps: true });

    Doctor.associate = (models) => {
        Doctor.belongsToMany(models.Patient, {
            through: models.Mapping,
            foreignKey: 'doctorId'
        });
    };

    return Doctor;
};
