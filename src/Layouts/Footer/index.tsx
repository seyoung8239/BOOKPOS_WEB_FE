import { Link } from 'react-router-dom';

import { Typography } from '@mui/material';
import styled from '@emotion/styled';

const pages = [
	{ name: '북포스 소개', to: '/introduction' },
	{ name: '개인정보 처리방침', to: '/' },
	{ name: '이용약관', to: '/' },
	{ name: '가격안내', to: '/price-guide' },
	{ name: 'NEWS', to: '/news' },
	{ name: '도입 문의', to: '/estimation-inquiry' },
];

const AppbarLink = styled(Link)`
	display: flex;
	align-items: center;
	text-decoration: none;
	color: #fff;
`;

function Footer() {
	return (
		<footer
			style={{
				background: '#2C2C2C',
				color: 'white',
				padding: '40px 15px 0px',
			}}
		>
			<Typography>대구광역시 중구 공평로 59, 6층(우원빌딩)</Typography>
			<Typography>
				(주)플레이정글 ⏐ 대표이사 정영인 ⏐ 사업자등록번호 524-86-01116
			</Typography>
			<Typography>통신판매업신고번호 : 2020-대구중구-0465호</Typography>
			<Typography>Email : bookpos@gmail.com</Typography>
			<Typography>상담문의 : 카카오톡 @bookpos_(10:00-18:00)</Typography>
			<div style={{ height: '40px' }} />
			<hr />
			<div
				style={{
					display: 'flex',
                    justifyContent: 'space-between',
					alignItems: 'center',
					height: '60px',
				}}
			>
				<Typography>
					Ⓒ PlayJungle.co, LTD. All rights reserved.
				</Typography>
				<div style={{ display: 'flex', }}>
					{pages.map((el, idx) => (
						<nav key={idx}>
							<AppbarLink to={el.to}>
								<div
									style={{
										marginLeft: '10px',
										marginRight: '10px',
									}}
								>
									|
								</div>
								<Typography>{el.name}</Typography>
							</AppbarLink>
						</nav>
					))}
				</div>
			</div>
		</footer>
	);
}

export default Footer;
