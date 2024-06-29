import styled from 'styled-components';

export const SwitchContainer = styled.label<{ checked: boolean }>`
	display: inline-block;
	font-size: 20px;
	height: 1em;
	width: 2em;
	background: ${(props) => (props.checked ? '#bdb9a6' : '#ccc')};
	border-radius: 1em;
	cursor: pointer;
	margin: auto;

	input {
		position: absolute;
		opacity: 0;
    cursor: pointer;
	}

	div {
		height: 1em;
		width: 1em;
		border-radius: 1em;
		background: #fff;
		box-shadow: 0 0.1em 0.3em rgba(0, 0, 0, 0.3);
		-webkit-transition: all 300ms;
		-moz-transition: all 300ms;
		transition: all 300ms;
	}

	input:checked + div {
		-webkit-transform: translate3d(100%, 0, 0);
		-moz-transform: translate3d(100%, 0, 0);
		transform: translate3d(100%, 0, 0);
	}
`;
