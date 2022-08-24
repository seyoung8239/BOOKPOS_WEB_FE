/** @jsxImportSource @emotion/react */
import React from 'react';
import { StyledContainer } from '../../styles/styledComponents';
import { bgPrimaryColor } from '../../styles/colors';

import { css } from '@emotion/react';

import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Screen6() {
	return (
		<>
			<StyledContainer
				bgcolor={bgPrimaryColor}
				wd="160px"
				style={{
					margin: '200px 0px',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-around',
					alignContent: 'center',
				}}
			>
				<div
					css={css`
						text-align: center;
						font-size: 32px;
						font-weight: 700;
					`}
				>
					북포스와 고객사의 다양한 소식을 확인하세요!
				</div>
				<div
					css={css`
						margin: 0px auto;
					`}
				>
					<Link
						to="/news"
						style={{
							textDecoration: 'none',
						}}
					>
						<Button
							color="secondary"
							variant="outlined"
							size="large"
						>
							BOOKPOS NEWS
						</Button>
					</Link>
				</div>
			</StyledContainer>
		</>
	);
}

export default Screen6;
