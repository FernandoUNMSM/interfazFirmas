import styled from 'styled-components';

export const PanelContainer = styled.div`
	color: ${(props) => props.theme.textColor.primary};
	padding: 15px;
	background: ${(props) => props.theme.background.secondary};
	overflow: auto;
	.inputItem {
		position: relative;
		margin: 0 10px;
		height: 30px;
		text-align: left;
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
			color: #fff;
			outline: none;
			border: 0.5px solid transparent;
			padding-left: 35px;
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
		}
	}

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
`;

export const PanelSectionRow = styled.div`
	width: 100%;
	font-size: 0.9em;
	border-bottom: 1px solid rgba(139, 139, 139, 0.76);
`;
export const PanelSectionRowItem = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
	align-items: center;
	gap: 10px;
	text-align: left;
	margin-bottom: 12px;
	p {
		margin: 0;
		font-size: .9em;
	}
`;
