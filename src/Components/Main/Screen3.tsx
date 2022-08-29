/** @jsxImportSource @emotion/react */
import React from 'react';

import { bgTripleColor } from '../../styles/colors';
import { StyledContainer } from '../../styles/styledComponents';
import { HalfContainer } from '../../styles/styledComponents';

import { css } from '@emotion/react';

import GuideRequestForm from './GuideRequestForm';

function Screen3() {
	return (
		<>
			<StyledContainer bgcolor={bgTripleColor}>
				<div style={{ display: 'flex', height: '80%' }}>
					<HalfContainer>
						<div
							css={css`
								font-size: 35px;
								font-weight: 700;
							`}
						>
							북포스 이용가이드 자료신청
						</div>
						<div style={{ height: '30px' }}></div>
						<div
							css={css`
								font-size: 27px;
								font-weight: 500;
							`}
						>
							기업(출판사), 저작자(작가)에 맞춰 북포스 활용법과
							자료를 제공합니다.
						</div>
						<div css={{ height: '30px' }}></div>
						<div css={{ fontSize: '21px', fontWeight: 400 }}>
							출판사 규모, 성격, 콘텐츠에 맞는 적합한 상품을
							상담해드립니다.
						</div>
						<div css={{ fontSize: '21px', fontWeight: 400 }}>
							도입문의 bookpos@gmail.com 또는 카카오톡 @bookpos_
						</div>
						<img
							src="/img/guide_book.png"
							width="180px"
							alt="intro1"
							style={{
								display: 'block',
								marginTop: '20px',
								marginLeft: 'auto',
								marginRight: 'auto',
							}}
						/>
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
