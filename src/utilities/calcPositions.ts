import { ILienzoSlice } from "../store/lienzoStore";
import { IFirma, IFirmasConfSlice } from '../store/firmaConfStore';
import { IPosition } from "../models/IPosition";

export const calcSignPositions = (state: IFirmasConfSlice & ILienzoSlice, firmaConfItem: IFirma, newX: number, newY: number, newXParsed: number | null = null, newYParsed: number | null = null) => {
    const originPosition = state.originPosition;

    const { position, height, width } = firmaConfItem;

    const calculatedWidth = state.widthLienzo - width;
    const calculatedHeight = state.heightLienzo - height;

    let originCoordinates: IPosition = { x: 0, y: 0 };

    let calculatedPositions = {
        calculatedPosX: newX,
        calculatedPosY: newY,
        calculatedPosXParsed: newXParsed || 0,
        calculatedPosYParsed: newYParsed || 0,
    };

    switch (originPosition) {
        case "left-bottom":
            originCoordinates = { x: 0, y: state.heightLienzo };
            if (newY != position.y) calculatedPositions.calculatedPosY = originCoordinates.y - newY - height;

            if (!newXParsed) calculatedPositions.calculatedPosXParsed = newX;
            if (!newYParsed) calculatedPositions.calculatedPosYParsed = originCoordinates.y - newY - height;

            if (calculatedPositions.calculatedPosXParsed < 0) {
                calculatedPositions.calculatedPosX = 0;
                calculatedPositions.calculatedPosXParsed = 0;
            }
            if (calculatedPositions.calculatedPosYParsed < 0) {
                calculatedPositions.calculatedPosY = originCoordinates.y - firmaConfItem.height;
                calculatedPositions.calculatedPosYParsed = 0;
            }

            if (calculatedPositions.calculatedPosXParsed > calculatedWidth) {
                calculatedPositions.calculatedPosX = calculatedWidth;
                calculatedPositions.calculatedPosXParsed = calculatedWidth;
            }
            if (calculatedPositions.calculatedPosYParsed > calculatedHeight) {
                calculatedPositions.calculatedPosY = 0;
                calculatedPositions.calculatedPosYParsed = calculatedHeight;
            }

            break;
        case "left-top":
            if (!newXParsed) calculatedPositions.calculatedPosXParsed = newX;
            if (!newYParsed) calculatedPositions.calculatedPosYParsed = newY;

            if (calculatedPositions.calculatedPosXParsed < 0) calculatedPositions.calculatedPosX = 0;
            if (calculatedPositions.calculatedPosYParsed < 0) calculatedPositions.calculatedPosY = 0;

            if (calculatedPositions.calculatedPosXParsed > calculatedWidth) calculatedPositions.calculatedPosX = calculatedWidth;
            if (calculatedPositions.calculatedPosYParsed > calculatedHeight) calculatedPositions.calculatedPosY = calculatedHeight;

            break;
        default:
            break;
    }

    return calculatedPositions;
};

export const calcInitialSignPosition = (state: IFirmasConfSlice & ILienzoSlice) => {
    const originPosition = state.originPosition;

    let originCoordinates: IPosition = { x: 0, y: 0 };

    let position: IPosition = {
        x: 0,
        y: 0,
    }

    switch (originPosition) {
        case "left-bottom":
            originCoordinates = { x: 0, y: state.heightLienzo };
            position.y = originCoordinates.y - state.heightGlobal
            break;
        case "left-top":
            break;
        default:
            break;
    }

    return position;
};


export const reCalcSignPositions = (state: IFirmasConfSlice & ILienzoSlice) => {
	const firmaConfItem: IFirma[] = state.firmaConf;

    const originPosition = state.originPosition;
    let originCoordinates: IPosition = { x: 0, y: 0 };



    firmaConfItem.forEach((firmaConf: IFirma) => {
        let positionParsed: IPosition = {...firmaConf.positionParsed}

        switch (originPosition) {
            case "left-bottom":
                originCoordinates = { x: 0, y: state.heightLienzo };
                positionParsed.y = originCoordinates.y - firmaConf.position.y - firmaConf.height
                break;
            case "left-top":
                positionParsed.x = firmaConf.position.x
                positionParsed.y = firmaConf.position.y
                break;
            default:
                break;
        }
        firmaConf.positionParsed = positionParsed;
    })


}