/** @jsxImportSource @emotion/react */
import React from 'react';
import { StyledContainer } from '../../styles/styledComponents';
import { css } from '@emotion/react';

import { primaryColor, secondaryColor, tripleColor } from '../../styles/colors';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const priceData: productBoxType[] = [
	{
		title: 'BASIC',
		tcolor: tripleColor,
		desc: '소속 작가 50인 이하 소규모 및 스타트업 출판사(에이전시)',
		price: '150,000',
		options: {
			capacity: '용량 : 총 100GB*용량 추가 불가',
			initialPrice: '250,000',
		},
	},
	{
		title: 'SPECIAL',
		tcolor: secondaryColor,
		desc: '소속 작가 300인 이하 중규모 출판사(에이전시)',
		price: '300,000',
		options: {
			capacity: '용량 : 총 300GB*용량 추가 기능',
			initialPrice: '500,000',
		},
	},
	{
		title: 'PREMIUM',
		tcolor: primaryColor,
		desc: '소속 작가 300인 이하 중대형 출판사(에이전시)',
		price: '450,000',
		options: {
			capacity: '용량 : 총 500GB*용량 추가 기능',
			initialPrice: '1,000,000',
		},
	},
];

interface productBoxType {
	title: string;
	tcolor: string;
	desc: string;
	price: string;
	options: options;
}

interface options {
	capacity: string;
	initialPrice: string;
}

const ProductBox: React.FC<{ data: productBoxType }> = ({ data }) => {
	const { title, tcolor, desc, price, options } = data;
	return (
		<div
			css={css`
				background-color: white;
				width: 220px;
				border-radius: 20px;
				padding: 30px 25px;
				font-size: 17px;
			`}
		>
			<div
				css={css`
					color: ${tcolor};
					font-weight: 700;
					font-size: 2em;
					margin-bottom: 30px;
				`}
			>
				{title}
			</div>
			<div
				css={css`
					font-size: 1.1em;
				`}
			>
				{desc}
			</div>
			<div
				css={css`
					color: #888;
					font-size: 0.8em;
				`}
			>
				약정 1년 단위
			</div>
			<div style={{ height: '10px' }} />
			<div>
				월
				<span
					css={css`
						font-size: 1.8em;
						font-weight: 700;
					`}
				>
					{price}원
				</span>
			</div>
			<div style={{ height: '10px' }} />
			<div
				css={css`
					background-color: #eee;
					padding: 10px;
					font-weight: 400;
					border-radius: 10px;
					font-size: 1em;
				`}
			>
				<div style={{ fontSize: '0.9em' }}>{options.capacity}</div>
				<div style={{ height: '10px' }} />
				<div style={{ fontSize: '0.9em' }}>
					설치비: {options.initialPrice}원/최초 1회
				</div>
				<div style={{ height: '10px' }} />
				<div style={{ fontSize: '0.9em' }}>계정 제한: 무제한</div>
			</div>
			<div style={{ height: '20px' }} />
			<Link
				to="/estimation-inquiry"
				style={{
					textDecoration: 'none',
				}}
			>
				<Button>
					<div style={{ fontSize: '1.2em' }}>
						견적문의 및 도입 신청
					</div>
				</Button>
			</Link>
		</div>
	);
};

function Screen1() {
	return (
		<>
			<StyledContainer bgcolor="#EEE" wd="100%">
				<div
					css={css`
						font-size: 2.5em;
						font-weight: 800;
						text-align: center;
						margin-bottom: 15px;
					`}
				>
					제품 및 가격안내
				</div>
				<div
					css={css`
						font-size: 17px;
						font-weight: 400;
						text-align: center;
						color: #888;
						margin-bottom: 40px;
					`}
				>
					규모 환경 예산에 맞게 도입할 수있는 다양한 유형의 제품을
					합리적인 가격으로 제공합니다.
				</div>
				<div
					css={css`
						display: flex;
						align-items: center;
						justify-content: center;
						gap: 15px;
					`}
				>
					{priceData.map((pd, i) => (
						<ProductBox key={i} data={pd} />
					))}
				</div>
				<div style={{ height: '70px' }}></div>
				<div style={{ fontWeight: 600 }}>
					- 부가세 별도, 월 비용 기준
				</div>
				<div>
					<div
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							width: '600px',
						}}
					>
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignContent: 'center',
								backgroundColor: tripleColor,
								width: '60px',
								height: '20px',
								borderRadius: '12px',
								fontSize: '14px',
								lineHeight: '20px',
								color: 'white',
								textAlign: 'center',
							}}
						>
							이벤트 1
						</div>
						<div>
							베타서비스 오픈 이벤트 1개월 사용료 무료(22. 12.
							31까지)
						</div>
						<div style={{ color: '#555' }}>
							1년 약정(무통보 자동 갱신)
						</div>
					</div>
				</div>
			</StyledContainer>
		</>
	);
}

export default Screen1;
