import { StateCreator } from 'zustand';
import { ILienzoSlice } from './lienzoStore';
import { IPosition } from '../models/IPosition';
import { calcInitialSignPosition } from '../utilities/calcPositions';

export interface IFirma {
	id: number;
	width: number;
	height: number;
	position: IPosition;
	image: string;
	blocked: boolean;
	positionParsed: IPosition;
}

export interface IFirmasConfSlice {
	firmaConf: IFirma[];
	globalDimensions: boolean;
	widthGlobal: number;
	heightGlobal: number;
	imageGlobal: string;
	updateBlocked: (status: boolean, id: number) => void;
	removeFirmaConf: (id: number) => void;
	removeAllFirmaConf: () => void;
	addFirmaConf: () => void;
	updateImageGlobal: (newImage: string) => void;
	handleGlobalDimensions: (status: boolean) => void;
}

export const useFirmaStore: StateCreator<IFirmasConfSlice & ILienzoSlice, [], [], IFirmasConfSlice> = (set, get) => ({
	firmaConf: [],
	globalDimensions: true,
	imageGlobal: '',
	widthGlobal: 70,
	heightGlobal: 50,
	blocked: false,
	updateBlocked: (status: boolean, id: number) => {
		set({
			firmaConf: get().firmaConf.map((conf: IFirma) => (conf.id === id ? { ...conf, blocked: status } : conf)),
		});
	},
	removeFirmaConf: (id: number) => {
		set({
			firmaConf: get().firmaConf.filter((conf: IFirma) => conf.id !== id),
		});
		set({
			firmaConf: get().firmaConf.map((conf: IFirma, index: number) => ({ ...conf, id: index + 1 })),
		});
	},
	removeAllFirmaConf: () => {
		set({
			firmaConf: [],
		});
	},
	addFirmaConf: () => {
		const basicFirmaConf: IFirma = {
			id: 0,
			width: get().widthGlobal,
			height: get().heightGlobal,
			blocked: false,
			image: get().imageGlobal,
			position: calcInitialSignPosition(get()),
			positionParsed: {
				x: 0,
				y: 0,
			},
		};

		const localFirmaConf = get().firmaConf;
		const newConfFirma = { ...basicFirmaConf, id: localFirmaConf.length + 1 };

		set({ firmaConf: localFirmaConf.concat(newConfFirma) });
	},
	handleGlobalDimensions: (status: boolean) =>
		set({
			firmaConf: get().firmaConf.map((conf: IFirma) => ({ ...conf, width: get().widthGlobal, height: get().heightGlobal })),
			globalDimensions: status,
		}),
	updateImageGlobal: (image: string) => {
		set({
			imageGlobal: image,
			firmaConf: get().firmaConf.map((conf: IFirma) => ({ ...conf, image: image })),
		});
	},
});
