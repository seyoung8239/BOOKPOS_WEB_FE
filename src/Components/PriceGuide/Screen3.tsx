/** @jsxImportSource @emotion/react */
import React from 'react';
import { StyledContainer } from '../../styles/styledComponents';

function Screen3() {
	return (
		<StyledContainer>
			<div
				style={{
					fontSize: '2.5em',
					fontWeight: '700',
					textAlign: 'center',
				}}
			>
				상품별 서비스 유형 비교
			</div>
			<div style={{ height: '15px' }} />
			<div
				style={{
					fontSize: '18px',
					fontWeight: '500',
					textAlign: 'center',
					color: '#777',
				}}
			>
				북포스는 출판사 규모, 소속작가 수, 기능에 따라 다양한 서비스를
				제공합니다.
			</div>
			<div style={{ height: '60px' }} />
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<img src="/img/priceTable1.png" width="70%" alt="priceTable" />
			</div>
		</StyledContainer>
	);
}

export default Screen3;
