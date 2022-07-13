/** @jsxImportSource @emotion/react */
import React from 'react';

import { StyledContainer } from '../../styles/styledComponents';
import { bgPrimaryColor, primaryColor } from '../../styles/colors';

import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Button, { ButtonProps } from '@mui/material/Button';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const RoundButton = styled(Button)<ButtonProps>(({ theme }) => ({
	width: '330px',
	height: '80px',
	borderRadius: '40px',
	color: theme.palette.getContrastText(primaryColor),
	backgroundColor: primaryColor,
}));

function Screen1() {
	return (
		<>
			<StyledContainer bgcolor={bgPrimaryColor}>
				<Typography variant="h3">
					국내 최초 웹소설,웹툰 정산 통계 자동화
				</Typography>
				<Typography variant="h1">작가와 출판사를 위한</Typography>
				<Typography variant="h1">웹콘텐츠 관리 프로그램</Typography>
				<RoundButton variant="contained" css={{ marginTop: '5vw' }}>
					<Typography variant="h4">데모체험 시작하기 </Typography>
					<KeyboardArrowDownIcon fontSize="large" />
				</RoundButton>
			</StyledContainer>
		</>
	);
}

export default Screen1;
