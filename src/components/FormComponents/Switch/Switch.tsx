import { SwitchContainer } from "./styles"

interface Props {
  checked: boolean,
  handleChecked: (status: boolean) => void;
}

export const Switch = ({ checked, handleChecked }: Props) => {
	return (
		<SwitchContainer checked={checked}>
			<input type="checkbox" checked={checked} onChange={(e) => handleChecked(e.target.checked)} /> <div></div>
    </SwitchContainer>
	);
};
