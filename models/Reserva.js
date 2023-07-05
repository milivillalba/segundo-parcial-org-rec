// TODO: Crear modelo de datos de Reserva
const { DataTypes, sequelize } = require("../database");

const Reserva = sequelize.define(
  "reservas",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    codigo: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      defaultValue: new Date().getTime(),
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    fecha_hora_salida: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    fecha_hora_llegada: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    lugar_vuelo: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    numero_vuelo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dni_pasajero: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    telefono_pasajero: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },

    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: "reservas",
  }
);

// Crear tabla si no existe ({force: true} borra y crea la tabla)
Reserva.sync({ force: false }).then(() => {
  console.log("Tabla de Reservas creada");
});

module.exports = Reserva;
