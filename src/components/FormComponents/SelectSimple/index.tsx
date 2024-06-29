import SelectModal from '../SelectModal';

interface Props {
	selectText?: string,
	data: string[],
	value: string,
	setValue: (newValue: string) => void,
	toUp?: boolean
}


export function SelectSimple({ selectText = 'Select', data, value, setValue, toUp = false }: Props) {

	const selectValue = (value: string) => {
		setValue(value);
	};

	return (
		<>
			<SelectModal
				buttonElement={
					<div className={`buttonSelectInput`}>
						<p>{data.find((item: string) => item.toString() === value.toString()) || selectText}</p>
					</div>
				}
				buttonWidth="100%"
				width="100%"
				toUp={toUp}
			>
				{data.map((item: string, index: number) => (
					<div className="optionItem" onClick={() => selectValue(item)} key={index}>
						{item.toString()}
					</div>
				))}
			</SelectModal>
		</>
	);
}
