module.exports = function name(sequelize, DataTypes) {
  const Invite = sequelize.define("Invite", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING
  })
  return Invite;
}