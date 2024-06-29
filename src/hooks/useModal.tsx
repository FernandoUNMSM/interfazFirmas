import { useState } from 'react';

export const useModal = () => {
	const [isOpen, setIsOpen] = useState(false);

	const openModal: any = () => setIsOpen(true);
	const closeModal: any = () => setIsOpen(false);

	return [isOpen, openModal, closeModal];
};
