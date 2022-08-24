/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';

import { StyledContainer } from '../../styles/styledComponents';
import { HalfContainer } from '../../styles/styledComponents';

import { css } from '@emotion/react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const youtubeSrc = 'https://www.youtube.com/embed/iDjQSdN_ig8';

function Screen4() {
	return (
		<>
			<StyledContainer bgcolor="#F5F5F5">
				<div style={{ textAlign: 'center' }}>
					<div
						css={css`
							font-size: 44px;
							font-weight: 700;
							@media (min-width: 1200px) {
								font-size: 64px;
							}
						`}
					>
						왜 북포스인가?
					</div>
				</div>
				<div style={{ height: '70px' }}></div>
				<div style={{ display: 'flex' }}>
					<HalfContainer>
						<div
							css={css`
								font-size: 27px;
								font-weight: 600;
								@media (min-width: 1200px) {
									font-size: 36px;
								}
							`}
						>
							작가에게는 투명하고 명확한 정산, 출판사에게는
							효율적이고 생산적인 데이터 회계 관리
						</div>
						<div style={{ height: '30px' }}></div>
						<div
							css={css`
								font-size: 21px;
								@media (min-width: 1200px) {
									font-size: 27px;
								}
							`}
						>
							개발자이기 전에 창작자로서 내 작품이 어느 기간 동안
							얼마나 어떻게 팔렸는지 보고 싶었습니다. 또한
							효율적인 매입, 매출, 입출금, 데이터 분석 시스템을
							필요로 하는 출 판사의 목소리를 생생하게 듣고
							제작하였습니다.
						</div>
						<div style={{ height: '40px' }}></div>
						<Link
							to="/introduction"
							css={css`
								font-size: 17px;
								color: blue;
								display: flex;
								align-items: center;
								text-decoration: none;
							`}
						>
							북포스 소개(링크)
							<ArrowForwardIcon fontSize="small" />
						</Link>
					</HalfContainer>
					<HalfContainer>
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								height: '100%',
							}}
						>
							<iframe
								title="bookpos"
								width="80%"
								height="500px"
								src={youtubeSrc}
							></iframe>
						</div>
					</HalfContainer>
				</div>
			</StyledContainer>
		</>
	);
}

export default Screen4;
