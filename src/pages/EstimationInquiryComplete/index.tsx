import { Button } from '@mui/material';
import { StyledContainer } from '../../styles/styledComponents';
import { Link } from 'react-router-dom';
import Screen6 from '../../Components/PriceGuide/Screen6';

function EstimationInquiryComplete() {
	return (
		<>
			<StyledContainer wd="100%">
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						gap: '20px',
						marginBottom: '60px',
					}}
				>
					<img src="/img/check.png" width="100px" alt="intro2" />
					<div
						style={{
							fontSize: '48px',
							fontWeight: 700,
							marginTop: '50px',
						}}
					>
						도입 신청이
					</div>
					<div
						style={{
							fontSize: '48px',
							fontWeight: 700,
							marginBottom: '30px',
						}}
					>
						성공적으로 완료되었습니다.
					</div>
					<div
						style={{
							fontSize: '24px',
							marginBottom: '30px',
						}}
					>
						담당 PM을 배정하여 24시간 이내 담당자 메일로 견적서를
						보내드리겠습니다.
					</div>
					<Button variant="contained" size="large">
						<Link
							to="/"
							style={{ textDecoration: 'none', color: 'white' }}
						>
							홈페이지 메인으로 이동
						</Link>
					</Button>
				</div>

				<hr />
			</StyledContainer>
			<Screen6 />
		</>
	);
}

export default EstimationInquiryComplete;
