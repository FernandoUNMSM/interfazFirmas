import { RefObject } from 'react';
import { StateCreator } from 'zustand';

export interface ILienzoSlice {
	widthLienzo: number;
	heightLienzo: number;
	sizeLienzo: string;
	zoomLienzo: number;
	pdfLienzo: File | string;
	pdfNumberPage: number;
	refLienzo: RefObject<HTMLDivElement> | null;
	updateWidthLienzo: (width: number) => void;
	updateHeightLienzo: (newHeight: number) => void;
	updateSizeLienzo: (size: string) => void;
	updateZoomLienzo: (newZoom: number) => void;
	updateRefLienzo: (newRef: RefObject<HTMLDivElement> | null) => void;
	updatePdfLienzo: (newPdf: File) => void;
	removePdfLienzo: () => void;
	updatePdfNumberPage: (newNumberPage: number) => void;
}

interface ISize {
	widthLienzo: number;
	heightLienzo: number;
}

export const useLienzoStore: StateCreator<ILienzoSlice> = (set, get) => ({
	widthLienzo: 595,
	heightLienzo: 842,
	sizeLienzo: 'A4',
	refLienzo: null,
	zoomLienzo: 100,
	pdfLienzo: '',
	pdfNumberPage: 1,
	updateWidthLienzo: (newWidth: number) => set({ widthLienzo: newWidth }),
	updateHeightLienzo: (newHeight: number) => set({ heightLienzo: newHeight }),
	updateSizeLienzo: (newSize: string) => {
		const sizes: { [id: string]: ISize } = {
			A4: {
				widthLienzo: 595,
				heightLienzo: 842,
			},
			Carta: {
				widthLienzo: 612,
				heightLienzo: 791,
			},
			Custom: {
				widthLienzo: get().widthLienzo,
				heightLienzo: get().heightLienzo,
			},
		};
		set({ sizeLienzo: newSize, widthLienzo: sizes[newSize].widthLienzo, heightLienzo: sizes[newSize].heightLienzo });
	},
	updateZoomLienzo: (newZoom: number) => set({ zoomLienzo: newZoom }),
	updateRefLienzo: (newRef: RefObject<HTMLDivElement> | null) => set({ refLienzo: newRef }),
	updatePdfLienzo: (newPdf: File | string) => set({ pdfLienzo: newPdf }),
	removePdfLienzo: () => set({ pdfLienzo: '' }),
	updatePdfNumberPage: (newNumberPage: number) => set({ pdfNumberPage: newNumberPage }),
});
