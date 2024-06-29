import './App.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/config/themes';
import { Preview } from './components/Preview';
import { Panel } from './components/Panel/Panel';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useBoundStore } from './store/boundStore';
import { ToastContainerStyled } from './styles/config/toastify';
import 'react-pdf/dist/Page/TextLayer.css';

function App() {
	const themeColor = useBoundStore((state) => state.theme);
	return (
		<>
			<ThemeProvider theme={theme[themeColor]}>
				<ToastContainerStyled>
					<ToastContainer autoClose={2000} />
				</ToastContainerStyled>
				<div className="page">
					<Panel />
					<Preview />
				</div>
			</ThemeProvider>
		</>
	);
}

export default App;
