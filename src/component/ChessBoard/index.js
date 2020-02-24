import React from "react"
import { Container, Row, Col, BoardLine } from "./styled"

export default function ChessBoard({ grid, playerAction }) {
  return (
    <Container>
      {grid.map((col, x) => (
        <Row key={x}>
          {col.map((el, y) => (
            <Col key={y} status={el} onClick={playerAction.bind(this, x, y)}>
              <BoardLine />
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  )
}
