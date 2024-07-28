const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('campus_accreditation', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const Campuses = sequelize.define('Campus', {
    campusName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    kualifikasiDosen: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    kurikulum: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    metodePengajaran: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    publikasi: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    pendanaan: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    kolaborasiPenelitian: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    laboratorium: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    perpustakaan: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    infrastrukturIT: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    workshop: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    timestamps: true
});

sequelize.sync()
    .then(() => {
        console.log('Database & tables created!');
    })
    .catch(err => console.log(err));

module.exports = { Campuses };
