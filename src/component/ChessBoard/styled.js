import styled from "styled-components"
import wood from "./wood.png"

const getChessColor = status => {
  switch (status) {
    case 0:
      return "transparent"
    case 1:
      return "radial-gradient(circle at 70% 30%, #999 0%, #111 60%)"
    case 2:
      return "radial-gradient(circle at 70% 30%, #FFF 0%,#CCC 60%)"
    default:
      return "transparent"
  }
}

export const Container = styled.div`
  position: relative;
  max-width: 600px;
  background: #e7be83;
  background-image: url(${wood});
  background-repeat: repeat;
  background-size: 100% auto;
  border-radius: 8px;
`

export const BoardLine = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background: #000000;
    transform: translateY(-50%);
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    width: 1px;
    height: 100%;
    background: #000000;
    transform: translateX(-50%);
  }
`

export const Row = styled.div`
  position: relative;
  display: flex;

  &:first-child {
    ${BoardLine} {
      &::after {
        top: 50%;
        height: 50%;
      }
    }
  }
  &:last-child {
    ${BoardLine} {
      &::after {
        top: 0;
        height: 50%;
      }
    }
  }
`

export const Col = styled.div`
  position: relative;
  flex: 1;
  box-sizing: border-box;
  &::before {
    content: "";
    display: block;
    padding-top: 100%;
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    border-radius: 50%;
    background: ${props => getChessColor(props.status)};
  }

  &:first-child {
    ${BoardLine} {
      &::before {
        left: 50%;
        width: 50%;
      }
    }
  }
  &:last-child {
    ${BoardLine} {
      &::before {
        left: 0;
        width: 50%;
      }
    }
  }
`
