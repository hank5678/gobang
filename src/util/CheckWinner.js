const getWinner = values => {
  const hasWinner = values.every(el => el === values[0] && el !== 0)
  if (hasWinner) {
    return values[0]
  } else {
    return 0
  }
}

export default grid => {
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      let a, b, c, d, e, winner
      // 贏法1: 橫向5個
      a = grid[x][y]
      b = grid[x][y + 1]
      c = grid[x][y + 2]
      d = grid[x][y + 3]
      e = grid[x][y + 4]
      winner = getWinner([a, b, c, d, e])
      if (winner) {
        console.log("遊戲結束：橫向連線")
        return winner
      }
      // 贏法2: 直向5個
      a = grid[x] ? grid[x][y] : 0
      b = grid[x + 1] ? grid[x + 1][y] : 0
      c = grid[x + 2] ? grid[x + 2][y] : 0
      d = grid[x + 3] ? grid[x + 3][y] : 0
      e = grid[x + 4] ? grid[x + 4][y] : 0
      winner = getWinner([a, b, c, d, e])
      if (winner) {
        console.log("遊戲結束：直向連線")
        return winner
      }
      // 贏法3: 斜向(左上右下)5個
      a = grid[x] ? grid[x][y + 0] : 0
      b = grid[x + 1] ? grid[x + 1][y + 1] : 0
      c = grid[x + 2] ? grid[x + 2][y + 2] : 0
      d = grid[x + 3] ? grid[x + 3][y + 3] : 0
      e = grid[x + 4] ? grid[x + 4][y + 4] : 0
      winner = getWinner([a, b, c, d, e])
      if (winner) {
        console.log("遊戲結束：斜向(左上右下)連線")
        return winner
      }
      // 贏法4: 斜向(右上左下)5個
      a = grid[x] ? grid[x][y + 4] : 0
      b = grid[x + 1] ? grid[x + 1][y + 3] : 0
      c = grid[x + 2] ? grid[x + 2][y + 2] : 0
      d = grid[x + 3] ? grid[x + 3][y + 1] : 0
      e = grid[x + 4] ? grid[x + 4][y] : 0
      winner = getWinner([a, b, c, d, e])
      if (winner) {
        console.log("遊戲結束：斜向(右上左下)連線")
        return winner
      }
    }
  }
}
