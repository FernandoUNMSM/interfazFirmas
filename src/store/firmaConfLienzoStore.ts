import { StateCreator } from 'zustand';
import { IFirma, IFirmasConfSlice } from './firmaConfStore';
import { ILienzoSlice } from './lienzoStore';

export interface IFirmaConfLienzoSlice {
	updateWidth: (width: number, id: number) => void;
	updateHeight: (newHeight: number, id: number) => void;
	updatePosition: (newX: number, newY: number, id: number) => void;
	updateWidthGlobal: (width: number) => void;
	updateHeightGlobal: (newHeight: number) => void;
}

export const useFirmaConfLienzoStore: StateCreator<IFirmasConfSlice & ILienzoSlice, [], [], IFirmaConfLienzoSlice> = (
	set,
	get
) => ({
	updateWidth: (newWidth: number, id: number) => {
		const calculatedWidth = newWidth > get().widthLienzo;

		set({
			firmaConf: get().firmaConf.map((conf: IFirma) => (conf.id === id ? { ...conf, width: calculatedWidth ? get().widthLienzo : newWidth } : conf)),
		});
	},
	updateHeight: (newHeight: number, id: number) => {
		const calculatedHeight = newHeight > get().heightLienzo;

		set({
			firmaConf: get().firmaConf.map((conf: IFirma) =>
				conf.id === id ? { ...conf, height: calculatedHeight ? get().heightLienzo : newHeight } : conf
			),
		});
	},
	updateWidthGlobal: (newWidth: number) => {
		const calculatedWidth = newWidth > get().widthLienzo ? get().widthLienzo : newWidth;
		set({
			widthGlobal: calculatedWidth,
			firmaConf: get().firmaConf.map((conf: IFirma) => ({ ...conf, width: calculatedWidth })),
		});
	},
	updateHeightGlobal: (newHeight: number) => {
		const calculatedHeight = newHeight > get().heightLienzo ? get().heightLienzo : newHeight;
		set({
			heightGlobal: calculatedHeight,
			firmaConf: get().firmaConf.map((conf: IFirma) => ({ ...conf, height: calculatedHeight })),
		});
	},
	updatePosition: (newX: number, newY: number, id: number) => {
		const firmaConfItem: IFirma | undefined = get().firmaConf.find((conf: IFirma) => conf.id === id);

		if (!firmaConfItem) return;
		const calculatedWidth = get().widthLienzo - firmaConfItem.width;
		const calculatedHeight = get().heightLienzo - firmaConfItem.height;

		let calculatedPosX: number = newX;
		let calculatedPosY: number = newY;

		if (newX < 0) calculatedPosX = 0;
		if (newY < 0) calculatedPosY = 0;

		if (newX > calculatedWidth) calculatedPosX = calculatedWidth;
		if (newY > calculatedHeight) calculatedPosY = calculatedHeight;


		set({
			firmaConf: get().firmaConf.map((conf: IFirma) => (conf.id === id ? { ...conf, position: { x: calculatedPosX, y: calculatedPosY } } : conf)),
		});
	},
});
