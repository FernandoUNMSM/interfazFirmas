import styled from 'styled-components';

export const InputItemContainer = styled.div`
	position: relative;
	height: 30px;
	text-align: left;
	width: 100%;
	display: flex;
	align-items: center;
	span {
		padding: 0 8px;
		width: 15px;
		border-right: 0.5px solid rgba(139, 139, 139, 0.76);
		text-align: center;
	}
	input {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

		background-color: transparent;
		color: ${(props) => props.theme.textColor.primary};
		outline: none;
		border: 0.5px solid transparent;
		padding-left: 40px;
		transition: 0.1s;
		border-radius: 3px;
		&:hover {
			border: 0.5px solid rgba(139, 139, 139, 0.76);
		}
		&::-webkit-inner-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}
		&:focus {
			border: 0.5px solid rgba(52, 127, 247, 1);
		}
		&:disabled {
			background-color: ${(props) => props.theme.background.disabled};
			color: ${(props) => props.theme.textColor.primary};
			cursor: not-allowed;
		}
	}
`;
