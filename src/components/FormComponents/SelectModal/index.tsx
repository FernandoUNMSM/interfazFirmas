import { useRef, useEffect } from 'react';

import { SelectModalContainer, OptionsContainer } from './styles';
import { useModal } from '../../../hooks/useModal';

interface Props {
	buttonElement: string | JSX.Element | JSX.Element[];
	width: string;
	closeOnSelect?: boolean;
	buttonWidth?: string;
	toUp?: boolean;
	disabled?: boolean;
	children: string | JSX.Element | JSX.Element[];
}

export default function SelectModal({
	buttonElement,
	width,
	closeOnSelect = true,
	buttonWidth = 'auto',
	toUp = false,
	disabled = false,
	children,
}: Props) {
	const optionsRef = useRef<HTMLDivElement>(null);

	const [isOpen, open, close] = useModal();

	useEffect(() => {
		const handleClickOutside = (ev: Event) => {
			if (isOpen && optionsRef.current && !optionsRef.current.contains(ev.target as Node)) {
				close();
			}
		};

		window.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [optionsRef, isOpen]); //eslint-disable-line

	return (
		<SelectModalContainer buttonWidth={buttonWidth}>
			<div onClick={disabled ? () => {} : open} style={{ width: buttonWidth }}>
				{buttonElement}
			</div>
			<OptionsContainer
				width={width}
				style={{ display: isOpen ? 'initial' : 'none' }}
				ref={optionsRef}
				className={`selectModalContainer ${toUp && 'openUp'}`}
			>
				<div className="options" onClick={closeOnSelect ? close : null}>
					{children}
				</div>
			</OptionsContainer>
		</SelectModalContainer>
	);
}
