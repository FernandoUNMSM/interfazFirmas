import styled from "styled-components";

export const DroppableContainer = styled.div<{width: number, height: number }>`
  display: flex;
  position: relative;
  background: #fff;
  margin: 0 20px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`