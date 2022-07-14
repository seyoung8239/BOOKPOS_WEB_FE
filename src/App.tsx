import { ThemeProvider } from '@mui/system';
import React from 'react';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';
import Routes from './pages/Routes';

import theme from './styles/theme';

function App() {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<Header />
				<Routes />
				<Footer />
			</ThemeProvider>
		</div>
	);
}

export default App;
