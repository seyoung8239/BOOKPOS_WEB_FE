import React from 'react';

import { bgTripleColor } from '../../styles/colors';
import { StyledContainer } from '../../styles/styledComponents';
import { HalfContainer } from '../../styles/styledComponents';

import { Typography } from '@mui/material';
import styled from '@emotion/styled';

import GuideRequestForm from './GuideRequestForm';

function Screen3() {
	return (
		<>
			<StyledContainer bgColor={bgTripleColor}>
				<div style={{ display: 'flex', height: '80%' }}>
					<HalfContainer>
						<Typography variant="h2">
							북포스 이용가이드 자료신청
						</Typography>
						<div style={{ height: '50px' }}></div>
						<Typography variant="h3">
							기업(출판사), 저작자(작가)에 맞춰 북포스 활용법과
							자료를 제공합니다.
						</Typography>
						<Typography variant="h3"></Typography>
						<div style={{ height: '50px' }}></div>
						<Typography variant="h4">
							출판사 규모, 성격, 콘텐츠에 맞는 적합한 상품을
							상담해드립니다.
						</Typography>
						<Typography variant="h4">
							도입문의 bookpos@gmail.com 또는 카카오톡 @bookpos_
						</Typography>
					</HalfContainer>
					<HalfContainer>
						<GuideRequestForm />
					</HalfContainer>
				</div>
			</StyledContainer>
		</>
	);
}

export default Screen3;
