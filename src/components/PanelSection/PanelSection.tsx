import { PanelSectionContainer, PanelSectionTitle } from './styles';

type Props = {
	title: string;
	children: React.ReactNode;
};

export const PanelSection = ({ title, children }: Props) => {
	return (
		<PanelSectionContainer>
			<PanelSectionTitle>
				<h1>{title}</h1>
			</PanelSectionTitle>
			{children}
		</PanelSectionContainer>
	);
};
