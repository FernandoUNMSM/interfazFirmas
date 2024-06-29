import { ChangeEvent } from 'react';
import { useBoundStore } from '../../store/boundStore';
import { InputSimple } from '../FormComponents/Input';
import { FirmaConfItemContainer, InputsContainer } from './styles';
import { IFirma } from '../../store/firmaConfStore';

interface Props {
	conf: IFirma;
	index: number;
}

export const FirmaConfItem = ({ conf, index }: Props) => {
	const { updateWidth: updateWidthFirma, updateHeight: updateHeightFirma, updatePosition, globalDimensions } = useBoundStore();

	return (
		<FirmaConfItemContainer>
			<div className="numberOfSign">{index + 1}</div>
			<InputsContainer>
				<InputSimple
					letter="X"
					value={conf.position.x}
					disabled={conf.blocked}
					onChange={(e: ChangeEvent<HTMLInputElement>) => updatePosition(Number(e.target.value), conf.position.y, conf.id)}
				/>
				<InputSimple
					letter="Y"
					value={conf.position.y}
					disabled={conf.blocked}
					onChange={(e: ChangeEvent<HTMLInputElement>) => updatePosition(conf.position.x, Number(e.target.value), conf.id)}
				/>
				{!globalDimensions ? (
					<>
						<InputSimple
							letter="W"
							value={conf.width}
							disabled={conf.blocked}
							onChange={(e: ChangeEvent<HTMLInputElement>) => updateWidthFirma(Number(e.target.value), conf.id)}
						/>
						<InputSimple
							letter="H"
							value={conf.height}
							disabled={conf.blocked}
							onChange={(e: ChangeEvent<HTMLInputElement>) => updateHeightFirma(Number(e.target.value), conf.id)}
						/>
					</>
				) : (
					<></>
				)}
			</InputsContainer>
		</FirmaConfItemContainer>
	);
};
