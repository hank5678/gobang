import React, { useState, useCallback, useEffect, useMemo } from "react"
import ChessBoard from "./component/ChessBoard"
import range from "lodash/range"

const DEFAULT_GRID = []

for (let i = 0; i < 15; i++) {
  DEFAULT_GRID.push(range(0, 15, 0))
}

const getWinner = values => {
  const hasWinner = values.every(el => el === values[0] && el !== 0)
  if (hasWinner) {
    return values[0]
  } else {
    return undefined
  }
}

function App() {
  const [grid, setGrid] = useState(DEFAULT_GRID)
  const [playerId, setPlayerId] = useState(1)
  const [winner, setWinner] = useState()
  const gameover = useMemo(() => winner !== undefined, [winner])

  const playerAction = useCallback(
    (x, y) => {
      if (!gameover) {
        setGrid(grid => {
          return grid.map((el, id) => {
            if (id === x) {
              return [...el].map((_, id) => (id === y ? playerId : _))
            } else {
              return [...el]
            }
          })
        })
        setPlayerId(playerId => (playerId === 1 ? 2 : 1))
      }
    },
    [playerId, gameover]
  )

  useEffect(() => {
    // 贏法1: 橫向5個
    for (let x = 0; x < grid.length; x++) {
      for (let y = 0; y < grid[x].length; y++) {
        const a = grid[x][y]
        const b = grid[x][y + 1]
        const c = grid[x][y + 2]
        const d = grid[x][y + 3]
        const e = grid[x][y + 4]
        const values = [a, b, c, d, e]
        const winner = getWinner(values)
        if (winner !== undefined) {
          console.log("遊戲結束：橫向連線")
          setWinner(winner)
        }
      }
    }

    // 贏法2: 直向5個
    for (let x = 0; x < grid.length; x++) {
      for (let y = 0; y < grid[x].length; y++) {
        const a = grid[x] ? grid[x][y] : undefined
        const b = grid[x + 1] ? grid[x + 1][y] : undefined
        const c = grid[x + 2] ? grid[x + 2][y] : undefined
        const d = grid[x + 3] ? grid[x + 3][y] : undefined
        const e = grid[x + 4] ? grid[x + 4][y] : undefined
        const values = [a, b, c, d, e]
        const winner = getWinner(values)
        if (winner !== undefined) {
          console.log("遊戲結束：直向連線")
          setWinner(winner)
        }
      }
    }

    // 贏法3: 斜向(左上右下)5個
    for (let x = 0; x < grid.length; x++) {
      for (let y = 0; y < grid[x].length; y++) {
        const a = grid[x] ? grid[x][y + 0] : 0
        const b = grid[x + 1] ? grid[x + 1][y + 1] : 0
        const c = grid[x + 2] ? grid[x + 2][y + 2] : 0
        const d = grid[x + 3] ? grid[x + 3][y + 3] : 0
        const e = grid[x + 4] ? grid[x + 4][y + 4] : 0
        const values = [a, b, c, d, e]
        const winner = getWinner(values)
        if (winner !== undefined) {
          console.log("遊戲結束：斜向(左上右下)連線")
          setWinner(winner)
        }
      }
    }

    // 贏法4: 斜向(右上左下)5個
    for (let x = 0; x < grid.length; x++) {
      for (let y = 0; y < grid[x].length; y++) {
        const a = grid[x] ? grid[x][y + 4] : 0
        const b = grid[x + 1] ? grid[x + 1][y + 3] : 0
        const c = grid[x + 2] ? grid[x + 2][y + 2] : 0
        const d = grid[x + 3] ? grid[x + 3][y + 1] : 0
        const e = grid[x + 4] ? grid[x + 4][y] : 0
        const values = [a, b, c, d, e]
        const winner = getWinner(values)
        if (winner !== undefined) {
          console.log("遊戲結束：斜向(右上左下)連線")
          setWinner(winner)
        }
      }
    }
  }, [grid])

  return (
    <div>
      <p>現在輪到：玩家{playerId}</p>
      <ChessBoard grid={grid} playerAction={playerAction} gameover={gameover} />
      {gameover && <p>遊戲結束，玩家{winner}獲勝</p>}
    </div>
  )
}

export default App
