/** @jsxImportSource @emotion/react */
import React from 'react';

import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { StyledContainer } from '../../styles/styledComponents';
import { bgSecondaryColor } from '../../styles/colors';

interface CardType {
	desc: string;
	label: string;
}

const cardData = [
	{
		desc: '담당자에게 묻지 않아도 언제 어디서든 확인할 수 있는 정산 내역',
		label: '<<데이터 통계>>',
	},
	{
		desc: '플랫폼 수수료 출판사 수수료 선인세 차감내력 일자별 판매, 취소 내역',
		label: '<<데이터 통계>>',
	},
	{
		desc: '작품별, 플랫폼별 회차별, 형태별 무엇이 얼마나 어느 기간 동안팔렸나?',
		label: '<<데이터 통계>>',
	},
];

const CardList = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	row-gap: 20px;
	column-gap: 20px;
	margin: auto;
	justify-items: center;
`;

const StyledCard = styled.div`
	width: 170px;
	height: 200px;
	background-color: ${bgSecondaryColor};
	border-radius: 20px;
	padding: 30px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

function Screen2() {
	return (
		<>
			<StyledContainer wd="100%" style={{ padding: '100px' }}>
				<div
					css={css`
						font-size: 32px;
						text-align: center;
						margin-bottom: 80px;
						font-weight: 700;
						display: flex;
						align-items: center;
						justify-content: center;
					`}
				>
					<img src="/img/intro1.png" width="140px" alt="intro1" />
					작가는 구체적이고 투명한 정산 프로그램을 원한다!
				</div>
				<CardList
					css={css`
						display: flex;
						align-items: center;
						justify-content: center;
						gap: 1vw;
					`}
				>
					{cardData.map((el, i) => (
						<Card key={i} data={el} />
					))}
				</CardList>
			</StyledContainer>
		</>
	);
}

function Card({ data }: { data: CardType }) {
	const { desc, label } = data;
	return (
		<StyledCard>
			<div>
				<div
					css={css`
						font-size: 24px;
						text-align: center;
						margin-bottom: 50px;
						font-weight: 400;
					`}
				>
					{desc}
				</div>
			</div>
			<div
				css={css`
					font-size: 21px;
					text-align: center;
					font-weight: 700;
				`}
			>
				{label}
			</div>
		</StyledCard>
	);
}

export default Screen2;
