import styled from 'styled-components';

export const InputFilePDFContainer = styled.div`
	position: relative;
	input[type='file'] {
    display: none;
	}
  label {
    cursor: pointer;
    &:hover {
			filter: brightness(0.9);
    }
  }
  button{
    pointer-events: none;
  }
`;
