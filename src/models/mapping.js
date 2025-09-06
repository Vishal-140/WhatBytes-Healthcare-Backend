'use strict';
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Mapping = sequelize.define('Mapping', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        patientId: { type: DataTypes.INTEGER, allowNull: false },
        doctorId: { type: DataTypes.INTEGER, allowNull: false }
    }, { tableName: 'mappings', timestamps: true });

    return Mapping;
};
