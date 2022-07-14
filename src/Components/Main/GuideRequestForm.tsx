/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled, Radio } from '@mui/material';

interface formStateType {
	company: string;
	name: string;
	phoneNumber: string;
	email: string;
	member: string;
	product: string;
}

function GuideRequestForm() {
	const [state, setState] = useState<formStateType>({} as formStateType);
	const [agreed, setAgreed] = useState<boolean | undefined>(false);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setState(prev => {
			return {
				...prev,
				[e.target.name]: e.target.value,
			};
		});
	};

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		console.log(state);
	};

	const StyledButton = styled(Button)({
		height: '50px',
		fontSize: '24px',
	});

	return (
		<form
			onSubmit={handleSubmit}
			css={{
				height: '100%',
				paddingLeft: '50px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-around',
			}}
		>
			<TextField
				label="회사명"
				name="company"
				value={state.company}
				onChange={handleChange}
				fullWidth
				variant="filled"
			/>
			<TextField
				label="이름"
				name="name"
				value={state.name}
				onChange={handleChange}
				fullWidth
				variant="filled"
			/>
			<TextField
				label="전화번호"
				name="phoneNumber"
				value={state.phoneNumber}
				onChange={handleChange}
				fullWidth
				variant="filled"
			/>
			<TextField
				label="이메일"
				name="email"
				value={state.email}
				onChange={handleChange}
				fullWidth
				variant="filled"
			/>
			<TextField
				label="보유 작가 수"
				name="member"
				value={state.member}
				onChange={handleChange}
				fullWidth
				variant="filled"
			/>
			<TextField
				label="문의상품"
				name="product"
				value={state.product}
				onChange={handleChange}
				fullWidth
				variant="filled"
			/>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<Radio
					checked={agreed}
					onClick={() => {
						setAgreed(prev => !prev);
					}}
					value={agreed}
					name="radio-buttons"
					inputProps={{ 'aria-label': 'B' }}
				/>
				<div css={{ fontSize: '17px', fontWeight: 400 }}>
					<span style={{ color: 'blue' }}>개인정보 수집 및 이용</span>
					에 동의합니다.
				</div>
			</div>
			<StyledButton type="submit" variant="contained">
				사용가이드 다운로드
			</StyledButton>
		</form>
	);
}

export default GuideRequestForm;
