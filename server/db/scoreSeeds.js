module.exports = async (db) => {
  await db.Score.bulkCreate([
    { username: "def", score: 0, isHigh: true },
    { username: "def", score: 0, isHigh: true },
    { username: "def", score: 0, isHigh: true },
    { username: "def", score: 0, isHigh: true },
    { username: "def", score: 0, isHigh: true },
    { username: "def", score: 0, isHigh: false },
    { username: "def", score: 0, isHigh: false },
    { username: "def", score: 0, isHigh: false },
    { username: "def", score: 0, isHigh: false },
    { username: "def", score: 0, isHigh: false }
  ]);
};
