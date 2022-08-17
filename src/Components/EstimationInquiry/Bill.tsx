/** @jsxImportSource @emotion/react */
import { primaryColor } from '../../styles/colors';
import { serviceTypes } from '../../pages/EstimationInquiry';


function Bill({ idx, add }: { idx: number; add: number }) {
	return (
		<>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '10px',
					width: '25%',
				}}
			>
				<div style={{ height: '20px' }}></div>
				<div style={{ fontSize: '17px' }}>Total</div>
				<div style={{ fontSize: '36px', fontWeight: 700 }}>
					{serviceTypes[idx].name}
				</div>
				<hr />
				<div>{serviceTypes[idx].member}</div>
				<div>
					용량: 총 {serviceTypes[idx].capacity}GB + 용량 추가 가능
				</div>
				<div>계정 제한: 무제한</div>
				<div style={{ height: '5px' }}></div>
				<div style={{ fontWeight: 700 }}>
					설치비: {serviceTypes[idx].installation}원 / 최초 1회
				</div>
				<hr />
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
					}}
				>
					<div>1 개월 기본료</div>
					<div>{serviceTypes[idx].monthlyFee} 원</div>
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
					}}
				>
					<div>1 개월 추가용량 * {add}</div>
					<div>{add * 50000} 원</div>
				</div>
				<div style={{ height: '5px' }}></div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
					}}
				>
					<div>1 개월 총 이용료</div>
					<div style={{ fontSize: '21px', fontWeight: 700 }}>
						{add * 50000 + +serviceTypes[idx].monthlyFee} 원
					</div>
				</div>
				<hr />
				<div
					style={{
						backgroundColor: primaryColor,
						width: '100%',
						height: '50px',
						borderRadius: '5px',
						textAlign: 'center',
						color: 'white',
						fontSize: '24px',
						paddingTop: 'auto',
						lineHeight: '50px',
					}}
				>
					견적 및 도입 신청
				</div>
			</div>
		</>
	);
}

export default Bill;
