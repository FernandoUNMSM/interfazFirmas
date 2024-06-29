import { FloatSidebarContainer } from './style';
import { FaPalette } from 'react-icons/fa';
import { CiDark, CiLight, CiZoomIn, CiZoomOut } from 'react-icons/ci';
import { useBoundStore } from '../../store/boundStore';
import { VscJson } from 'react-icons/vsc';
import { TbZoomScan } from 'react-icons/tb';
import { RiFileCloseLine } from 'react-icons/ri';
import { ExportButton } from '../ExportButton/ExportButton';
import { InputFilePDF } from '../FormComponents/InputFilePDF';

export const FloatSidebar = () => {
	const { updateTheme, updateZoomLienzo, zoomLienzo, removePdfLienzo, pdfLienzo } = useBoundStore();
	return (
		<FloatSidebarContainer>
			<div className="optionsContainer">
				<div className="option principal">
					<FaPalette />
				</div>
				<div className="optionContent">
					<div className="option" onClick={() => updateTheme('light')}>
						<CiLight />
					</div>
					<div className="option" onClick={() => updateTheme('dark')}>
						<CiDark />
					</div>
				</div>
			</div>
			<div className="optionsContainer">
				<div className="option principal">
					<VscJson />
				</div>
			</div>
			<div className="optionsContainer">
				<div className="option principal">
					<TbZoomScan />
				</div>
				<div className="optionContent toUp">
					<div className="option" onClick={() => zoomLienzo !== 150 && updateZoomLienzo(zoomLienzo + 25)}>
						<CiZoomIn />
					</div>
					<div className="option" onClick={() => zoomLienzo !== 50 && updateZoomLienzo(zoomLienzo - 25)}>
						<CiZoomOut />
					</div>
				</div>
			</div>
			<ExportButton />
			<InputFilePDF />
			{pdfLienzo && (
				<div className="optionsContainer">
					<div className="option principal" onClick={removePdfLienzo}>
						<RiFileCloseLine />
					</div>
				</div>
			)}
		</FloatSidebarContainer>
	);
};
