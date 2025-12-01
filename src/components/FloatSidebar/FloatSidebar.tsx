import { FloatSidebarContainer } from './style';
import { FaPalette } from 'react-icons/fa';
import { CiDark, CiLight, CiZoomIn, CiZoomOut } from 'react-icons/ci';
import { useBoundStore } from '../../store/boundStore';
import { VscJson } from 'react-icons/vsc';
import { TbZoomScan } from 'react-icons/tb';
import { RiFileCloseLine } from 'react-icons/ri';
import { ExportButton } from '../ExportButton/ExportButton';
import { InputFilePDF } from '../FormComponents/InputFilePDF';
import { IoGridOutline } from "react-icons/io5";
import { TbBoxAlignBottomLeftFilled, TbBoxAlignBottomRightFilled, TbBoxAlignTopLeftFilled, TbBoxAlignTopRightFilled } from "react-icons/tb";

export const FloatSidebar = () => {
	const { theme, originPosition, updateOriginPosition, updateTheme, updateZoomLienzo, zoomLienzo, removePdfLienzo, pdfLienzo } = useBoundStore();
	return (
		<FloatSidebarContainer>
			<div className="optionsContainer">
				<div className="option principal">
					<FaPalette />
				</div>
				<div className="optionContent">
					<div className={`option ${theme === 'light' ? "active" : ""}`} onClick={() => updateTheme('light')}>
						<CiLight />
					</div>
					<div className={`option ${theme === 'dark' ? "active" : ""}`} onClick={() => updateTheme('dark')}>
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
					<IoGridOutline />
				</div>
				<div className="optionContent">
					<div className={`option ${originPosition === 'left-top' ? "active" : ""}`} onClick={() => updateOriginPosition('left-top')}>
						<TbBoxAlignTopLeftFilled />
					</div>
					<div className={`option ${originPosition === 'left-bottom' ? "active" : ""}`} onClick={() => updateOriginPosition('left-bottom')}>
						<TbBoxAlignBottomLeftFilled />
					</div>
					<div className="option">
						<TbBoxAlignTopRightFilled   />
					</div>
					<div className="option">
						<TbBoxAlignBottomRightFilled  />
					</div>
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
