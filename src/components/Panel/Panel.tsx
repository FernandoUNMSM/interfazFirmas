import { ChangeEvent } from 'react';
import { PanelSection } from '../PanelSection/PanelSection';
import { InputSimple } from '../FormComponents/Input';
import { PanelContainer, PanelSectionRow, PanelSectionRowItem } from './styles';
import { SelectSimple } from '../FormComponents/SelectSimple';
import { InputFile } from '../FormComponents/InputFile/InputFile';
import { useBoundStore } from '../../store/boundStore';
import { Switch } from '../FormComponents/Switch/Switch';
import { FirmaConfItem } from '../FirmaConfItem/FirmaConfItem';
import { IFirma } from '../../store/firmaConfStore';
import { IoAdd } from 'react-icons/io5';
import { Button } from '../Button/Button';
import { AiOutlineClear } from 'react-icons/ai';

export const Panel = () => {
	const {
		widthLienzo,
		heightLienzo,
		updateWidthLienzo,
		updateHeightLienzo,
		sizeLienzo,
		updateSizeLienzo,
		firmaConf,
		addFirmaConf,
		heightGlobal,
		widthGlobal,
		updateWidthGlobal,
		updateHeightGlobal,
		globalDimensions,
		handleGlobalDimensions,
		removeAllFirmaConf,
		pdfLienzo,
		pdfNumberPage,
		updatePdfNumberPage
	} = useBoundStore();

	return (
		<>
			<PanelContainer>
				<PanelSection title="Lienzo">
					<PanelSectionRow>
						<PanelSectionRowItem>
							<p>Tamaño de hoja</p>
							<SelectSimple data={['A4', 'Carta', 'Custom']} value={sizeLienzo} setValue={updateSizeLienzo} />
						</PanelSectionRowItem>
						<PanelSectionRowItem>
							<InputSimple
								letter="W"
								value={widthLienzo}
								onChange={(e: ChangeEvent<HTMLInputElement>) => updateWidthLienzo(Number(e.target.value))}
								disabled={sizeLienzo !== 'Custom'}
							/>
							<InputSimple
								letter="H"
								value={heightLienzo}
								onChange={(e: ChangeEvent<HTMLInputElement>) => updateHeightLienzo(Number(e.target.value))}
								disabled={sizeLienzo !== 'Custom'}
							/>
						</PanelSectionRowItem>
						{pdfLienzo && (
							<PanelSectionRowItem>
								<p>Numero de Pagina</p>
								<InputSimple
									letter="P"
									value={pdfNumberPage}
									onChange={(e: ChangeEvent<HTMLInputElement>) => updatePdfNumberPage(Number(e.target.value))}
								/>
							</PanelSectionRowItem>
						)}
					</PanelSectionRow>
				</PanelSection>
				<PanelSection title="Firmas">
					<PanelSectionRow>
						<PanelSectionRowItem>
							<p>Fondo de firma</p>
							<InputFile />
						</PanelSectionRowItem>
						<PanelSectionRowItem>
							<p>Tamaño Global</p>
							<Switch checked={globalDimensions} handleChecked={handleGlobalDimensions} />
						</PanelSectionRowItem>
						{globalDimensions && (
							<PanelSectionRowItem>
								<InputSimple
									letter="W"
									value={widthGlobal}
									onChange={(e: ChangeEvent<HTMLInputElement>) => updateWidthGlobal(Number(e.target.value))}
								/>
								<InputSimple
									letter="H"
									value={heightGlobal}
									onChange={(e: ChangeEvent<HTMLInputElement>) => updateHeightGlobal(Number(e.target.value))}
								/>
							</PanelSectionRowItem>
						)}
						<PanelSectionRowItem>
							<Button onClick={removeAllFirmaConf}>
								<AiOutlineClear />
								Limpiar Firmas
							</Button>
							<Button onClick={() => addFirmaConf()}>
								<IoAdd />
								Agregar Firma
							</Button>
						</PanelSectionRowItem>
					</PanelSectionRow>
					{firmaConf.map((conf: IFirma, index: number) => (
						<FirmaConfItem conf={conf} index={index} key={index} />
					))}
				</PanelSection>
			</PanelContainer>
		</>
	);
};
