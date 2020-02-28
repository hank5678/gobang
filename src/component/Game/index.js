import React, { useState, useCallback, useEffect, useMemo } from "react"
import ChessBoard from "component/ChessBoard"
import checkWinner from "util/CheckWinner"
import createTwoDimensionalArray from "util/CreateTwoDimensionalArray"

const DEFAULT_GRID = createTwoDimensionalArray(15, 15, 0)

export default function Game() {
  const [grid, setGrid] = useState(DEFAULT_GRID)
  const [playerId, setPlayerId] = useState(1)
  const [winner, setWinner] = useState(0)
  const gameover = useMemo(() => winner !== 0, [winner])

  const playerAction = useCallback(
    (x, y) => {
      if (!gameover && grid[x][y] === 0) {
        setGrid(grid => grid.map((el, id) => (id === x ? [...el].map((_, id) => (id === y ? playerId : _)) : [...el])))
        setPlayerId(playerId => (playerId === 1 ? 2 : 1))
      }
    },
    [playerId, gameover, grid]
  )

  const resetGame = useCallback(() => {
    setGrid(DEFAULT_GRID)
    setWinner(0)
    setPlayerId(1)
  }, [])

  useEffect(() => {
    const winner = checkWinner(grid)
    winner && setWinner(winner)
  }, [grid])

  return (
    <div>
      <p>現在輪到：玩家{playerId}</p>
      <ChessBoard grid={grid} playerAction={playerAction} gameover={gameover} />
      {gameover && (
        <>
          <p>遊戲結束，玩家{winner}獲勝</p>
          <button onClick={resetGame}>重新開始</button>
        </>
      )}
    </div>
  )
}
