/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';

import { StyledContainer } from '../../styles/styledComponents';
import { bgSecondaryColor } from '../../styles/colors';

import { Typography } from '@mui/material';

interface CardType {
	title: string;
	desc: string;
	icon?: string;
}

const cardData = [
	{
		title: '내서재',
		desc: '내가 출간한 웹소설‧웹툰 작품 정보와 계약서 통합 웹콘텐츠 관리',
		icon: '',
	},
	{
		title: '수익관리',
		desc: '기존 Excel파일이 아닌 플랫폼CP를 통한 투명하고 명확한 정산 관리',
		icon: '',
	},
	{
		title: '통계',
		desc: '작품별, 월별 판매량과 수익 분석을 위한 데이터 통계',
		icon: '',
	},
	{
		title: '캘린더',
		desc: '출간일, 마감일, 미팅일 등 플래너와 리마인더',
		icon: '',
	},
	{
		title: '공지',
		desc: '출판사, 담당자의 소식과 정보를 들을 수 있는 소통의 광장',
		icon: '',
	},
	{
		title: '경리회계',
		desc: '내가 출간한 웹소설‧웹툰 작품 정보와 계약서 통합 웹콘텐츠 관리',
		icon: '',
	},
];

const CardList = styled.div`
	width: 70vw;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	row-gap: 5vw;
	margin: auto;
	justify-items: center;
`;

const StyledCard = styled.div`
	width: 10vw;
	height: 15vw;
	background-color: ${bgSecondaryColor};
	border-radius: 20px;
	padding: 30px;
`;

function Screen2() {
	return (
		<>
			<StyledContainer>
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
	const { title, desc, icon } = data;
	return (
		<StyledCard>
			<div style={{ height: '35%' }}>
				<Typography variant="h4">{title}</Typography>
			</div>
			<Typography variant="h5">{desc}</Typography>
		</StyledCard>
	);
}

export default Screen2;
