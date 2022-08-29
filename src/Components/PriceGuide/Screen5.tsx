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
		<div
			style={{
				display: 'flex',
				width: '250px',
				justifyContent: 'space-between',
			}}
		>
			<img
				src="/img/estimate.png"
				width="25px"
				height="25px"
				alt="intro1"
			/>
			<div style={{ fontWeight: 600, fontSize: '27px' }}>견적서 요청</div>
			<img
				src="/img/inqury.png"
				width="90px"
				height="25px"
				alt="intro1"
			/>
		</div>
		<div style={{ height: '20px' }}></div>
		<div style={{ display: 'flex' }}>
			<img src="/img/mail.png" width="25px" height="25px" alt="intro1" />
			<div style={{ width: '10px' }}></div>
			<div style={{ fontSize: '21px' }}>bookpos@gmail.com</div>
		</div>
		<div style={{ height: '20px' }}></div>
		<div style={{ display: 'flex' }}>
			<img src="/img/kakao.png" width="25px" height="25px" alt="intro1" />
			<div style={{ width: '10px' }}></div>
			<div style={{ fontSize: '21px' }}>@bookpos_</div>
		</div>
	</div>
);

const contract = (
	<div>
		<div style={{ fontSize: '18px', fontWeight: 600, marginTop: '10px' }}>
			(1) 견적확인
		</div>
		<div>
			영업일 기준 24시간 이내 메일을 통해 견적과 전자계약서를 확인하실 수
			있습니다.
		</div>
		<div style={{ fontSize: '18px', fontWeight: 600, marginTop: '10px' }}>
			(2) 계약체결
		</div>
		<div>
			견적서와 함께 받으신 전자계약서를 통해 북포스와 계약을 체결합니다.
		</div>
		<div style={{ fontSize: '18px', fontWeight: 600, marginTop: '10px' }}>
			(3) 설치비 및 선입금
		</div>
		<div>
			프로젝트 매니저가 지정되며 설치비와 선입금 확인 후 프로그램 설치를
			준비합니다.
		</div>
	</div>
);

const programRent = (
	<div style={{ fontSize: '18px', fontWeight: 600, marginTop: '10px' }}>
		결제확인 후 메일로 프로그램 계정과 사이트 주소를 라이선스와 함께 발급해
		드립니다.
	</div>
);

const taxBill = (
	<div style={{ fontSize: '18px', fontWeight: 600, marginTop: '10px' }}>
		매월 1일 세금계산서 선발행 후 월 사용료를 지불합니다.
	</div>
);

const menuContents = [Estimate, contract, programRent, taxBill];

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
				<div
					css={css`
						font-size: 44px;
						font-weight: 600;
						margin-bottom: 10px;
					`}
				>
					도입절차
				</div>
				<div
					css={css`
						margin-bottom: 40px;
						color: #555;
					`}
				>
					도입 절차의 각 단계에 대한 자세한 내용을 보시려면 각 버튼을
					클릭해주세요.
				</div>
				<div
					css={css`
						display: flex;
					`}
				>
					<div
						css={css`
							display: flex;
							flex-direction: column;
							justify-content: space-between;
							height: 300px;
						`}
					>
						{menuList.map((menu, i) => (
							<div
								css={css`
									background-color: white;
									padding: 5px;
									border-radius: 3px;
									height: 50px;
									width: 150px;
									font-weight: 600;
									display: flex;
									align-items: center;
									cursor: pointer;
									border: ${i === menuIdx
										? '1px solid black'
										: ''};
								`}
								onClick={() => setMenuIdx(i)}
								key={i}
							>
								{menu}
							</div>
						))}
					</div>
					<div style={{ width: '10px' }}></div>
					<div
						css={css`
							background-color: white;
							padding: 40px;
							border-radius: 3px;
							width: 35vw;
							@media (min-width: 1200px) {
								width: 30vw;
							}
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
