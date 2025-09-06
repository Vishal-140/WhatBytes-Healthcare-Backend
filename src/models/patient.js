'use strict';
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Patient = sequelize.define('Patient', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: { type: DataTypes.STRING, allowNull: false },
        age: { type: DataTypes.INTEGER },
        gender: { type: DataTypes.STRING },
        history: { type: DataTypes.TEXT },
        createdBy: { type: DataTypes.INTEGER, allowNull: false } 
    }, { tableName: 'patients', timestamps: true });

    Patient.associate = (models) => {
        Patient.belongsTo(models.User, { foreignKey: 'createdBy' });
        Patient.belongsToMany(models.Doctor, {
            through: models.Mapping,
            foreignKey: 'patientId'
        });
    };

    return Patient;
};
