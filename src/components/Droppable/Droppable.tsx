import { DroppableContainer } from './styles';
import { useBoundStore } from '../../store/boundStore';
import { useEffect, useRef } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

type Props = {
	children: string | JSX.Element | JSX.Element[];
};

const PDFViewer = () => {
	const { pdfLienzo, pdfNumberPage } = useBoundStore();
	return (
		<div style={{ overflow: 'hidden', userSelect: 'none' }}>
			<Document file={pdfLienzo}>
				<Page pageNumber={pdfNumberPage} />
			</Document>
		</div>
	);
};

export function Droppable({ children }: Props) {
	const { widthLienzo, heightLienzo, updateRefLienzo, pdfLienzo } = useBoundStore();
	pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString();

	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		updateRefLienzo(ref);
	}, [ref]); //eslint-disable-line

	return (
		<DroppableContainer ref={ref} width={widthLienzo} height={heightLienzo}>
			{pdfLienzo && <PDFViewer />}
			{children}
		</DroppableContainer>
	);
}
