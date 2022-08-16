/** @jsxImportSource @emotion/react */
import React from 'react';
import { StyledContainer } from '../../styles/styledComponents';

function Screen4() {
	return (
		<StyledContainer wd='100%'>
			<div
				style={{
					textAlign: 'center',
					fontSize: '3em',
					fontWeight: '700',
					color: 'blue',
				}}
			>
				FAQ
			</div>
			<div style={{ height: '10px' }}></div>
			<div
				style={{
					textAlign: 'center',
					fontSize: '21px',
					fontWeight: '500',
					color: '#888',
				}}
			>
				제품 및 가격 관련하여 더 궁금하신 사항이 있으신가요?
			</div>
			<div style={{ height: '50px' }}></div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<img src="/img/faqTable.png" width="70%" alt="priceTable" />
			</div>
		</StyledContainer>
	);
}

export default Screen4;
