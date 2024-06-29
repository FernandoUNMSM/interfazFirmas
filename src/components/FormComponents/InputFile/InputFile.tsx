import { ChangeEvent, useEffect, useRef } from 'react';
import { useBoundStore } from '../../../store/boundStore';
import { CustomInputFile, DeleteImage, InputFileContainer } from './styles';
import { IoCloseSharp } from 'react-icons/io5';

export const InputFile = () => {
	const { imageGlobal, updateImageGlobal } = useBoundStore();
	const inputFIleRef = useRef<HTMLInputElement>(null);

	const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
		const file = (event.target as HTMLInputElement).files;
		const reader = new FileReader();

		reader.onloadend = function () {
			if (typeof reader.result === 'string') updateImageGlobal(reader.result);
		};

		if (file) {
			reader.readAsDataURL(file[0]);
		}
	};

	useEffect(() => {
		if (inputFIleRef.current && !imageGlobal) {
			inputFIleRef.current.value = imageGlobal;
		}
	}, [imageGlobal]);

	return (
		<>
			<InputFileContainer>
				<input type="file" accept="image/png, image/jpeg" id="file-upload" ref={inputFIleRef} onChange={handleImageChange} />
				<CustomInputFile htmlFor="file-upload" imageGlobal={imageGlobal ? true : false}>
					{imageGlobal ? <img src={imageGlobal} alt="Image Preview" style={{ width: '100%', height: 'auto' }} /> : 'Subir imagen'}
				</CustomInputFile>
				<DeleteImage imageGlobal={imageGlobal ? true : false} onClick={() => updateImageGlobal('')}>
					<IoCloseSharp />
				</DeleteImage>
			</InputFileContainer>
		</>
	);
};
