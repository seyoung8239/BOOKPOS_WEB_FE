import { useState } from 'react';

import { StyledContainer } from '../../styles/styledComponents';
import { Button, Radio } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function EstimationInquiryTerms() {
	const navigate = useNavigate();
	const [allTermList, setAllTermList] = useState(false);
	const [termList, setTermList] = useState([false, false, false, false]);

	const handleToggle = (i: number) => {
		setTermList(prev => {
			prev[i] = !prev[i];
			return [...prev];
		});

		if (termList.some(el => el)) setAllTermList(true);
		else setAllTermList(false);
	};

	const handleAllToggle = () => {
		console.log(allTermList, termList);
		setTermList(prev => {
			const newTermList = prev.map(el => !allTermList);
			return newTermList;
		});
		setAllTermList(!allTermList);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!termList[0] || !termList[1] || !termList[3]) {
			alert('필수 항목은 모두 동의해 주세요.');
			return;
		}
		navigate('/estimation-inquiry-complete');
	};

	return (
		<StyledContainer>
			<form
				onSubmit={handleSubmit}
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '80px',
					marginTop: '150px',
				}}
			>
				<div style={{ display: 'flex', gap: '30px' }}>
					<div style={{ width: '20%', fontSize: '27px' }}>
						서비스 약관 동의
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							width: '60%',
							gap: '15px',
							fontWeight: 600,
							fontSize: '18px',
						}}
					>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								fontSize: '20px',
								marginBottom: '30px',
								fontWeight: 700,
							}}
						>
							<Radio
								checked={termList[0]}
								onClick={handleAllToggle}
								sx={{
									'& .MuiSvgIcon-root': {
										fontSize: 28,
									},
								}}
							/>
							<div>서비스 약관 동의 (전체) {' >'}</div>
						</div>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<Radio
								checked={termList[0]}
								onClick={() => handleToggle(0)}
								sx={{
									'& .MuiSvgIcon-root': {
										fontSize: 28,
									},
								}}
							/>
							<div>
								서비스 이용약관에 동의합니다. (필수) {' >'}
							</div>
						</div>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<Radio
								checked={termList[1]}
								onClick={() => handleToggle(1)}
								sx={{
									'& .MuiSvgIcon-root': {
										fontSize: 28,
									},
								}}
							/>
							<div>
								개인 정보 수집 및 이용에 동의합니다. (필수){' '}
								{' >'}
							</div>
						</div>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<Radio
								checked={termList[2]}
								onClick={() => handleToggle(2)}
								sx={{
									'& .MuiSvgIcon-root': {
										fontSize: 28,
									},
								}}
							/>
							<div>
								마케팅 수집, 활용, 수신에 동의합니다. (이벤트,
								프로모션 제공), (선택) {'>'}
							</div>
						</div>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<Radio
								checked={termList[3]}
								onClick={() => handleToggle(3)}
								sx={{
									'& .MuiSvgIcon-root': {
										fontSize: 28,
									},
								}}
							/>
							<div>서비스 이용약관에 동의합니다.(필수) {'>'}</div>
						</div>
					</div>
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						gap: '30px',
					}}
				>
					<Button variant="outlined" size="large">
						<Link
							to="/estimation-inquiry-form"
							style={{ textDecoration: 'none', color: '#3f51b5' }}
						>
							뒤로가기
						</Link>
					</Button>
					<Button variant="contained" size="large" type="submit">
						도입신청
					</Button>
				</div>
			</form>
		</StyledContainer>
	);
}

export default EstimationInquiryTerms;
