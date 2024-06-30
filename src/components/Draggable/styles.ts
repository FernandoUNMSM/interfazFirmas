import styled, { css, keyframes } from 'styled-components';
import { IFirma } from '../../store/firmaConfStore';

const animation = keyframes`
  from {
    opacity: 0;
  }
  to {
    transform: none;
    opacity: 1;
  }
`;
export const DraggableContainer = styled.div<{ conf: IFirma }>`
	z-index: 1000;
	cursor: pointer;
	&:hover > .draggableItemControl {
		display: block;
	}
	&:hover {
		z-index: 10000;
	}
`;

export const DraggableItem = styled.div<{ conf: IFirma }>`
	display: flex;
	position: absolute;
	left: ${(props) => props.conf.position.x}px;
	top: ${(props) => props.conf.position.y}px;
	background: #ccc;
	background-image: url(${(props) => props.conf.image});
	background-size: 100% 100%;
	width: ${(props) => props.conf.width}px;
	height: ${(props) => props.conf.height}px;
	cursor: pointer;
	transition: opacity 0.3s;
	z-index: -1;
	${(props) => {
		if (props.conf.blocked)
			return css`
				user-select: none;
				pointer-events: none;
			`;
	}}
	&:hover > div {
		display: block;
	}
`;

export const DraggableItemControl = styled.div<{ conf: IFirma }>`
	animation: ${animation} 0.3s ease;
	position: absolute;
	opacity: 1;
	max-width: 40px;
	width: 24px;
	top: 0;
	right: 100%;
	background-color: ${(props) => props.theme.background.secondary};
	color: ${(props) => props.theme.textColor.primary};
	display: none;
	padding: 5px 8px;
	.numberOfSign {
		font-size: 1.5em;
		border-bottom: 1px solid rgba(139, 139, 139, 0.76);
	}
	.actionIcons {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		margin-top: 10px;

		.icon {
			cursor: pointer;
			font-size: 18px;
			&.lock {
				margin-top: 10px;
			}
			&:hover {
				color: #afa;
			}
		}
	}
`;
