/** @jsxImportSource @emotion/react */
import { Button, ButtonProps, styled } from '@mui/material';
import React from 'react';
import { bgPrimaryColor, primaryColor } from '../../styles/colors';
import { StyledContainer } from '../../styles/styledComponents';

const RoundButton = styled(Button)<ButtonProps>(({ theme }) => ({
	width: '200px',
	height: '50px',
	borderRadius: '10px',
	marginTop: '40px',
	color: theme.palette.getContrastText(primaryColor),
	backgroundColor: primaryColor,
	fontSize: '18px',
}));

function Screen2() {
	return (
		<>
			<StyledContainer
				style={{
					backgroundColor: bgPrimaryColor,
					padding: '80px 0px',
				}}
				wd="100%"
			>
				<div
					style={{
						fontSize: '32px',
						fontWeight: '700',
						textAlign: 'center',
					}}
				>
					북포스 데모 프로그램으로 체험해보세요.
				</div>
				<div style={{ height: '70px' }} />
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						gap: '50px',
					}}
				>
					<RoundButton variant="contained">
						출판사 관리 페이지
					</RoundButton>
					<RoundButton variant="contained">작가 페이지</RoundButton>
				</div>
			</StyledContainer>
		</>
	);
}

export default Screen2;
