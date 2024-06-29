import { IOptionsSlice, useOptionsStore } from './optionsStore';
import { IFirmaConfLienzoSlice, useFirmaConfLienzoStore } from './firmaConfLienzoStore';
import { create } from 'zustand';
import { IFirmasConfSlice, useFirmaStore } from './firmaConfStore';
import { ILienzoSlice, useLienzoStore } from './lienzoStore';

export const useBoundStore = create<IFirmasConfSlice & ILienzoSlice & IFirmaConfLienzoSlice & IOptionsSlice>((...a) => ({
	...useFirmaStore(...a),
	...useLienzoStore(...a),
	...useFirmaConfLienzoStore(...a),
	...useOptionsStore(...a)
}));
