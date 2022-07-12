import { ThemeProvider } from '@mui/system';
import React from 'react';
import Header from './Layouts/Header';
import Routes from './pages/Routes';

import theme from './styles/resizeFont';

function App() {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<Header />
				<Routes />
			</ThemeProvider>
		</div>
	);
}

export default App;
