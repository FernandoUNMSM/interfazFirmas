import { GrDocumentUpload } from 'react-icons/gr';
import { InputFilePDFContainer } from './styles';
import { useBoundStore } from '../../../store/boundStore';
import { ChangeEvent, useRef } from 'react';

export const InputFilePDF = () => {
	const { updatePdfLienzo } = useBoundStore();
	const inputFIleRef = useRef<HTMLInputElement>(null);

	const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
		const file = (event.target as HTMLInputElement).files;
		const reader = new FileReader();

		reader.onloadend = function () {
			if (typeof reader.result === 'string') updatePdfLienzo(reader.result);
		};

		if (file) {
			reader.readAsDataURL(file[0]);
		}
	};

	return (
		<InputFilePDFContainer>
			<input type="file" accept="application/pdf,application/vnd.ms-excel" id="pdf-upload" ref={inputFIleRef} onChange={handleImageChange} />
			<div className="optionsContainer">
				<label htmlFor="pdf-upload">
					<div className="option principal">
						<GrDocumentUpload />
					</div>
				</label>
			</div>
		</InputFilePDFContainer>
	);
};
