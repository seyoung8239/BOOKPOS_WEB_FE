/** @jsxImportSource @emotion/react */
import React from 'react';
import { StyledContainer } from '../../styles/styledComponents';

import { css } from '@emotion/react';

const youtubeSrc = 'https://www.youtube.com/embed/iDjQSdN_ig8';

function Screen4() {
	return (
		<>
			<StyledContainer
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center'
				}}
			>
				<div
					css={css`
						font-size: 44px;
						font-weight: 700;
						@media (min-width: 1200px) {
							font-size: 64px;
						}
						text-align: center;
						margin: 60px;
					`}
				>
					WHY BOOKPOS?
				</div>
				<iframe
					title="bookpos"
					width="60%"
					height="400px"
					src={youtubeSrc}
				></iframe>
			</StyledContainer>
		</>
	);
}

export default Screen4;
