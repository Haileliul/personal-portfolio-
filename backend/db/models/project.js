"use strict";
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

module.exports = sequelize.define(
  "project",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    projecttype: {
      type: DataTypes.ENUM("0", "1", "3"),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    img_url: {
      type: DataTypes.STRING,
    },
    url_link: {
      type: DataTypes.STRING,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  },
  {
    freezeTableName: true,
    modelName: "project",
  }
);
