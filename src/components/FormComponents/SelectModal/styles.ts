import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  from {
    transform: translateY(8px);
    opacity: 0;
  }
  to {
    transform: none;
    opacity: 1;
  }
`;

export const SelectModalContainer = styled.div<{ buttonWidth: string }>`
	position: relative;
	display: inline-flex;
	height: 30px;
	width: ${(props) => props.buttonWidth};
	.buttonSelectInput {
		border: 0.5px solid rgba(139, 139, 139, 0.76);
		color: ${(props) => props.theme.textColor.primary};
		border-radius: 4px;
		padding: 0px 0.5rem;
		height: 100%;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 10px;
		p {
			user-select: none;
			color: ${(props) => props.theme.textColor.primary};
			font-size: 0.9em;
		}
		&.withError {
			margin-bottom: 0;
		}
	}
`;

export const OptionsContainer = styled.div<{ width: string }>`
	position: absolute;
	z-index: 230;
	right: 0;
	top: 100%;
	&.openUp {
		top: inherit;
		bottom: 100%;
	}
	animation: ${animation} 0.3s ease;
	min-width: ${(props) => props.width};
	border-radius: 5px;
	background-color: ${(props) => props.theme.background.primary};
	.options {
		width: 100%;
		background-color: ${(props) => props.theme.background.primary};
		z-index: 990;
		border-radius: 5px;
		max-height: 265px;
		overflow: auto;
	}
	.optionItem {
		padding: 10px 15px;
		font-size: 13px;
		cursor: pointer;
		transition: 0.1s;
		display: flex;
		align-items: center;
		user-select: none;
		color: ${(props) => props.theme.textColor.primary};
		&:hover {
			background-color: ${(props) => props.theme.background.optionHover};
			color: ${(props) => props.theme.textColor.secondary};
		}
	}
`;
