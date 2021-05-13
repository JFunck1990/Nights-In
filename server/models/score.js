module.exports = function (sequelize, DataTypes) {
  const Score = sequelize.define('Score', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    isHigh: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  });

  return Score;
};
