import styled from 'styled-components';

export const FirmaConfItemContainer = styled.div`
	display: grid;
	grid-template-columns: 40px 1fr;
	padding: 10px 0;
	border-bottom: 1px solid rgba(139, 139, 139, 0.76);

	.numberOfSign {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		border-right: 1px solid rgba(139, 139, 139, 0.76);
		padding: 0 15px;
	}
`;

export const InputsContainer = styled.div`
	padding-left: 10px;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
	gap: 5px;
	align-self: center;
`;
