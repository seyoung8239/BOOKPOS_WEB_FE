/** @jsxImportSource @emotion/react */
import React from 'react';

import { StyledContainer } from '../../styles/styledComponents';
import { primaryColor } from '../../styles/colors';

import styled from '@emotion/styled';
import Button, { ButtonProps } from '@mui/material/Button';

import { css } from '@emotion/react';

const CenteredDiv = styled.div`
	text-align: center;
	width: 500px;
	font-size: 24px;
`;

const PrimaryButton = styled(Button)<ButtonProps>({
	backgroundColor: primaryColor,
});

function Screen1() {
	return (
		<StyledContainer wd="100%">
			<div
				css={css`
					padding: 50px;
					display: flex;
					flex-direction: column;
					align-items: center;
				`}
			>
				<img src="/img/bookpos1.png" width="500px" alt="intro1" />
				<div
					css={css`
						height: 50px;
					`}
				/>
				<CenteredDiv>
					웹소설‧웹툰 저작물 관리부터 수익 정산, 출판사 인세 회계,
					업종별 맞춤 기능까지! 북포스와 함께 투명하고 효율적인 CMS를
					경험해 보세요.
				</CenteredDiv>
				<div
					css={css`
						height: 30px;
					`}
				/>
				<PrimaryButton variant="contained">
					사용가이드 다운로드
				</PrimaryButton>
				<div
					css={css`
						height: 120px;
					`}
				/>
				<img src="/img/bookpos2.png" width="600px" alt="intro2" />
				<div
					css={css`
						color: #727272;
					`}
				>
					콘텐츠관리, 정산, 통계, 커뮤니티, 결재, 회계
				</div>
				<div
					css={css`
						font-size: 24px;
						font-weight: 700;
						margin-top: 20px;
					`}
				>
					작가와 출판사를 위한 CMS 북포스
				</div>
			</div>
		</StyledContainer>
	);
}

export default Screen1;
