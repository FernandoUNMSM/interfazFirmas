import styled from "styled-components";

export const PreviewContainer = styled.div`
  width: fit-content;
  height: auto;
  margin: 20px auto;
`

export const OverflowContainer = styled.div`
  position: relative;
  height: auto;
  width: auto;
  min-height: 100vh;
	background: ${(props) => props.theme.background.primary};
  overflow: auto;
  align-content: center;
  &::-webkit-scrollbar {
    height: 10px;
		width: 10px;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #cbcbcb;
	}

	&::-webkit-scrollbar-thumb:hover {
		background-color: #909090;
	}
`

export const ScaleContainer = styled.div<{zoom: number}>`
  overflow: hidden;
  height: auto;
  width: auto;
  zoom: ${(props) => props.zoom}%;
`