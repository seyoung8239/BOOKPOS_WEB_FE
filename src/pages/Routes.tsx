import {
	BrowserRouter as Router,
	Routes as RouteWrapper,
	Route,
} from 'react-router-dom';
import Main from './Main';
import Introduction from './Introduction';
import PriceGuide from './PriceGuide';
import News from './News';
import EstimationInquiry from './EstimationInquiry';

function Routes() {
	return (
		<Router>
			<RouteWrapper>
				<Route path="/" element={<Main />} />
				<Route path="/introduction" element={<Introduction />} />
				<Route path="/price-guide" element={<PriceGuide />} />
				<Route path="/news" element={<News />} />
				<Route
					path="/estimation-inquiry"
					element={<EstimationInquiry />}
				/>
			</RouteWrapper>
		</Router>
	);
}

export default Routes;
