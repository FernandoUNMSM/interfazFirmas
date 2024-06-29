import styled from 'styled-components';

export const ButtonStyled = styled.button`
	font-weight: 300;
	width: 100%;
	height: 38px;
	border: 0.5px solid transparent;
	font-size: 0.9em;
	cursor: pointer;
	padding: 10px 8px;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 0.3s;
	border-radius: 3px;

	svg {
		margin-right: 7px;
		font-size: 1.4em;
	}

	&.buttonWithoutAction {
		background: transparent;
		color: ${(props) => props.theme.textColor.primary};
		border: 0.5px solid rgba(139, 139, 139, 0.76);
	}

	&.buttonWithAction {
		color: ${(props) => props.theme.textColor.primary};
    background: ${(props) => props.theme.background.button};
		&:hover {
			filter: brightness(0.9);
		}
	}
`;
