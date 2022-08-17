import { Routes as RouteWrapper, Route } from 'react-router-dom';
import Main from './Main';
import Introduction from './Introduction';
import PriceGuide from './PriceGuide';
import News from './News';
import EstimationInquiry from './EstimationInquiry';
import EstimationInquiryForm from './EstimationInquiryForm';
import EstimationInquiryTerms from './EstimationInquiryTerms';

function Routes() {
	return (
		<RouteWrapper>
			<Route path="/" element={<Main />} />
			<Route path="/introduction" element={<Introduction />} />
			<Route path="/price-guide" element={<PriceGuide />} />
			<Route path="/news" element={<News />} />
			<Route path="/estimation-inquiry" element={<EstimationInquiry />} />
			<Route
				path="/estimation-inquiry-form"
				element={<EstimationInquiryForm />}
			/>
			<Route
				path="/estimation-inquiry-terms"
				element={<EstimationInquiryTerms />}
			/>
		</RouteWrapper>
	);
}

export default Routes;
