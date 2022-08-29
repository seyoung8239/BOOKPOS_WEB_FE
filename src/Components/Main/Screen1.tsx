/** @jsxImportSource @emotion/react */
import React from 'react';

import { bgPrimaryColor, primaryColor } from '../../styles/colors';

import { css } from '@emotion/react';

import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Button, { ButtonProps } from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const RoundButton = styled(Button)<ButtonProps>(({ theme }) => ({
	width: '250px',
	height: '60px',
	borderRadius: '30px',
	marginTop: '40px',
	color: theme.palette.getContrastText(primaryColor),
	backgroundColor: primaryColor,
}));

const MainTypo = styled('div')({
	fontSize: '70px',
	fontWeight: 700,
	'@media (min-width: 1200px)': {
		fontSize: '100px',
	},
});

function Screen1() {
	return (
		<>
			<div
				css={css`
					background-color: ${bgPrimaryColor};
					padding: 50px;
					height: 650px;
					position: relative;
					z-index: -10;
				`}
			>
				<Typography variant="h4">
					국내 최초 웹소설,웹툰 정산 통계 자동화
				</Typography>
				<div style={{ height: '10px' }}></div>
				<MainTypo>작가와 출판사를 위한</MainTypo>
				<MainTypo>웹콘텐츠 관리 프로그램</MainTypo>
				<RoundButton variant="contained">
					<Typography variant="h5">데모체험 시작하기 </Typography>
					<KeyboardArrowDownIcon fontSize="large" />
				</RoundButton>
			</div>
		</>
	);
}

export default Screen1;
