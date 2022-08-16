/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { StyledContainer } from '../../styles/styledComponents';
import { bgSecondaryColor } from '../../styles/colors';
import { css } from '@emotion/react';

const menuList = [
	'1. 견적서 요청',
	'2. 계약 체결',
	'3. 프로그램 임대',
	'4. 세금계산서 발행',
];

const Estimate = (
	<div>
		<div>견적서 요청</div>
		<div>bookpos@gmail.com</div>
		<div>@bookpos</div>
	</div>
);

const menuContents = [Estimate];

function Screen5() {
	const [menuIdx, setMenuIdx] = useState(0);
	return (
		<StyledContainer bgcolor={bgSecondaryColor} wd="100%">
			<div
				css={css`
					display: flex;
					flex-direction: column;
					align-items: center;
				`}
			>
				<div>도입절차</div>
				<div>
					도입 절차의 각 단계에 대한 자세한 내용을 보시려면 각 버튼을
					클릭해주세요.
				</div>
				<div
					css={css`
						display: flex;
					`}
				>
					<div>
						{menuList.map((menu, i) => (
							<div
								css={css`
									background-color: white;
								`}
								onClick={() => setMenuIdx(i)}
							>
								{menu}
							</div>
						))}
					</div>
					<div
						css={css`
							background-color: white;
						`}
					>
						{menuContents[menuIdx]}
					</div>
				</div>
			</div>
		</StyledContainer>
	);
}

export default Screen5;
