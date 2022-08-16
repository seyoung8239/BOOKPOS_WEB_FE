/** @jsxImportSource @emotion/react */
import { StyledContainer } from '../../styles/styledComponents';

const queryData = [
	{ desc: '작가 이용가이드 다운로드', img: '/img/query1.png' },
	{ desc: '출판사 이용가이드 다운로드', img: '/img/query2.png' },
	{ desc: '작가 데모체험', img: '/img/query3.png' },
	{ desc: '출판사 데모체험', img: '/img/query4.png' },
];

function Screen6() {
	return (
		<StyledContainer>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
				}}
			>
				<div
					style={{
						fontWeight: 700,
						fontSize: '2.5em',
						textAlign: 'center',
					}}
				>
					궁금한 점이 더 있으신가요?
				</div>
				<div style={{ height: '100px' }}></div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						gap: '20px',
					}}
				>
					{queryData.map((el, i) => (
						<div
							style={{
								width: '150px',
								backgroundColor: '#EFEFEF',
								padding: '20px',
								borderRadius: '10px',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
							}}
							key={i}
						>
							<img src={el.img} width="100px" alt="" />
							<div style={{ height: '20px' }}></div>
							<div
								style={{
									textAlign: 'center',
									fontSize: '21px',
								}}
							>
								{el.desc}
							</div>
						</div>
					))}
				</div>
			</div>
		</StyledContainer>
	);
}

export default Screen6;
