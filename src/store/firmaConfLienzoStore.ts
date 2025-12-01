import { StateCreator } from 'zustand';
import { IFirma, IFirmasConfSlice } from './firmaConfStore';
import { ILienzoSlice } from './lienzoStore';
import { calcSignPositions } from '../utilities/calcPositions';

export interface IFirmaConfLienzoSlice {
	updateWidth: (width: number, id: number) => void;
	updateHeight: (newHeight: number, id: number) => void;
	updatePosition: (newX: number, newY: number, id: number, newXParsed?: number, newYParsed?: number) => void;
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
	updatePosition: (newX: number, newY: number, id: number, newXParsed: number | null = null, newYParsed: number | null = null) => {
		const firmaConfItem: IFirma | undefined = get().firmaConf.find((conf: IFirma) => conf.id === id);

		if (!firmaConfItem) return;

		const result = calcSignPositions(get(), firmaConfItem, newX, newY, newXParsed, newYParsed);
		if (!result) return;

		const {calculatedPosX, calculatedPosY, calculatedPosXParsed, calculatedPosYParsed} = result;

		set({
			firmaConf: get().firmaConf.map((conf: IFirma) => (conf.id === id ? { ...conf, position: { x: calculatedPosX, y: calculatedPosY }, positionParsed: {x: calculatedPosXParsed, y: calculatedPosYParsed} } : conf)),
		});
	},
});
