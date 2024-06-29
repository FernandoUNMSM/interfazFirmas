import styled from 'styled-components';

export const InputFileContainer = styled.div`
	margin: auto;
	position: relative;
	input[type='file'] {
		display: none;
	}
`;

export const CustomInputFile = styled.label<{ imageGlobal: boolean }>`
	border: 0.5px solid rgba(139, 139, 139, 0.76);
	font-size: 0.9em;
	display: inline-flex;
	cursor: pointer;
	box-sizing: border-box;
	padding: ${(props) => (!props.imageGlobal ? '6px 12px' : 0)};
`;

export const DeleteImage = styled.div<{ imageGlobal: boolean }>`
	display: ${(props) => (props.imageGlobal ? 'flex' : 'none')};
	position: absolute;
	top: 0;
	right: 0;
	z-index: 100;
	width: 30px;
	height: 30px;
	font-size: 30px;
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		background-color: rgba(139, 139, 139);
	}
`;
