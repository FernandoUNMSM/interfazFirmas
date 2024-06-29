import { useBoundStore } from '../../store/boundStore';
import { PiFileJpgLight, PiFilePngLight, PiFilePdfLight } from 'react-icons/pi';
import { toJpeg, toPng } from 'html-to-image';
import jsPDF from 'jspdf';
import { GrDocumentDownload } from 'react-icons/gr';

export const ExportButton = () => {
	const { refLienzo, widthLienzo, heightLienzo } = useBoundStore();

	const downloadPng = () => {
		if (!refLienzo || !refLienzo.current) return;

		const lienzoCopy: HTMLDivElement = refLienzo.current;
		lienzoCopy.style.margin = '0';

		toPng(lienzoCopy, { cacheBust: true })
			.then((dataUrl) => {
				const link = document.createElement('a');
				link.download = 'my-image-name.png';
				link.href = dataUrl;
				link.click();
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				lienzoCopy.style.margin = '0 20px';
			});
	};

	const downloadJpeg = () => {
		if (!refLienzo || !refLienzo.current) return;

		const lienzoCopy: HTMLDivElement = refLienzo.current;
		lienzoCopy.style.margin = '0';

		toJpeg(lienzoCopy, { cacheBust: true })
			.then((dataUrl) => {
				const link = document.createElement('a');
				link.download = 'my-image-name.jpeg';
				link.href = dataUrl;
				link.click();
			})
			.catch((err) => {
				console.log(err);
			})
			.finally(() => {
				lienzoCopy.style.margin = '0 20px';
			});
	};

	const downloadPdf = async () => {
		if (!refLienzo || !refLienzo.current) return;
		const lienzoCopy: HTMLDivElement = refLienzo.current;
		lienzoCopy.style.margin = '0';
		toPng(refLienzo.current, { cacheBust: true })
			.then((canvas) => {
				const pdf = new jsPDF({ orientation: 'p', unit: 'px', format: [widthLienzo, heightLienzo], hotfixes: ['px_scaling'] });
				pdf.addImage(canvas, 'JPEG', 0, 0, widthLienzo, heightLienzo);
				pdf.save('download.pdf');
			})
			.finally(() => {
				lienzoCopy.style.margin = '0 20px';
			});
	};

	return (
		<div className="optionsContainer">
			<div className="option principal">
				<GrDocumentDownload />
			</div>
			<div className="optionContent toUp">
				<div className="option" onClick={downloadPng}>
					<PiFilePngLight />
				</div>
				<div className="option" onClick={downloadJpeg}>
					<PiFileJpgLight />
				</div>
				<div className="option" onClick={downloadPdf}>
					<PiFilePdfLight />
				</div>
			</div>
		</div>
	);
};
