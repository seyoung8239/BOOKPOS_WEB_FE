/** @jsxImportSource @emotion/react */
import React from 'react';

import { Link } from 'react-router-dom';

import { StyledContainer } from '../../styles/styledComponents';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { css } from '@emotion/react';

function Screen5() {
	return (
		<>
			<StyledContainer wd="100%" style={{ display: 'flex', marginTop: '120px' }}>
				<div
					css={css`
						display: flex;
						align-items: center;
						justify-content: center;
					`}
				>
					<img src="/img/intro3.png" alt="" width="70%" />
				</div>
				<div>
					<div
						css={css`
							font-size: 21px;
							color: #777;
							margin-bottom: 10px;
						`}
					>
						BOOKPOS SERVICE
					</div>
					<div
						css={css`
							font-size: 24px;
							font-weight: 600;
							margin-bottom: 10px;
						`}
					>
						출판사 규모, 성격, 콘텐츠에 적합한 서비스 제공
					</div>
					<div
						css={css`
							font-size: 17px;
							color: #777;
							margin-bottom: 25px;
						`}
					>
						<div>#BASIC(작가 50인 이하, 소규모)</div>
						<div>#SPECIAL(작가 300인 이하, 중규모)</div>
						<div>
							#PREMIUM(작가 300인 이상, 경리회계가 필요한 중대형
							규모)
						</div>
					</div>
					<Link
						to="/price-guide"
						css={css`
							font-size: 16px;
							font-weight: bold;
							color: blue;
							display: flex;
							align-items: center;
							text-decoration: none;
						`}
					>
						가격 안내
						<ArrowForwardIcon fontSize="small" />
					</Link>
				</div>
			</StyledContainer>
		</>
	);
}

export default Screen5;
