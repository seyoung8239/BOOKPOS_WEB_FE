import { ThemeProvider } from '@mui/system';
import React from 'react';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';
import Routes from './pages/Routes';
import FloatingKakao from './Layouts/FloatingKakao';

import theme from './styles/theme';

function App() {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<Header />
				<Routes />
				<Footer />
				<FloatingKakao />
			</ThemeProvider>
		</div>
	);
}

export default App;
