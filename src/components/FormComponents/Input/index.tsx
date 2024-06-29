import { ChangeEvent, useRef } from 'react';
import { InputItemContainer } from './styles';

type Props = {
	letter: string;
	value?: string | number;
	disabled?: boolean;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const InputSimple = ({ letter, disabled = false, ...rest }: Props) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const changeValue = (event: ChangeEvent<HTMLInputElement>) => {
		const { onChange } = rest;

		if (inputRef.current) {
			if (inputRef.current.value.charAt(0) == '0') inputRef.current.value = (event.nativeEvent as InputEvent).data || '0';
		}

		if (onChange) onChange(event);
	};

	return (
		<InputItemContainer>
			<span>{letter}</span>
			{disabled ? <input type="number" disabled {...rest} /> : <input type="number" {...rest} ref={inputRef} onChange={changeValue} />}
		</InputItemContainer>
	);
};
