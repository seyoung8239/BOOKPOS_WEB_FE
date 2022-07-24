/** @jsxImportSource @emotion/react */
import React from 'react';

import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { StyledContainer } from '../../styles/styledComponents';
import { bgPrimaryColor } from '../../styles/colors';

interface CardType {
	desc: string;
	label: string;
}

const cardData = [
	{
		desc: '캡처, 엑셀 파일이 아닌 출판사의 시스템에 맞춘 CP연계 정산을 통한 생산적인 인세 관리',
		label: '<<정산 자동화>>',
	},
	{
		desc: '판매, 취소, 오류, 취합하고 수정하는데 소요되는 시간을 절약하고 콘텐츠 분석 및 차기작 출간 연구 가능',
		label: '<<DB 통계>>',
	},
	{
		desc: '플랫폼 입금, 계산서 발행, 작가 입금 등 꼼꼼하고 효율적인 회계 처리를 통한 자산 관리',
		label: '<<경리 회계>>',
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
	background-color: ${bgPrimaryColor};
	border-radius: 20px;
	padding: 30px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

function Screen3() {
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
					<img src="/img/intro2.png" width="140px" alt="intro1" />
					출판사는 효율적인 콘텐츠 관리 및 정산 프로그램을 원한다!
				</div>
				<CardList>
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
						font-size: 21px;
						text-align: center;
						margin-bottom: 40px;
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

export default Screen3;
