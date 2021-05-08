module.exports = function (sequelize, DataTypes){
    const Trivia = sequelize.define("Trivia", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          score: DataTypes.INTEGER,
          name: DataTypes.STRING
    });

    return Trivia;
};