/** @jsxImportSource @emotion/react */
import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Typography } from '@mui/material';

const pages = [
	{ name: '북포스 소개', to: '/introduction' },
	{ name: '가격안내', to: '/price-guide' },
	{ name: 'NEWS', to: '/news' },
	{ name: '도입 문의', to: '/estimation-inquiry' },
];

const Appbar = styled.header`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	height: 50px;
	box-shadow: rgba(100, 100, 111, 0.1) 0px 7px 15px 0px;
	z-index: 1000;
`;

const AppbarLink = styled(Link)`
	display: flex;
	align-items: center;
	text-decoration: none;
	color: #000000;
	font-size: 1.3em;
`;

function Header() {
	return (
		<Appbar>
			<nav>
				<Link to="/">
					<img src="/img/footer_img.png" height="40px" alt="intro1" />
				</Link>
			</nav>
			{pages.map((el, idx) => (
				<nav key={idx}>
					<AppbarLink to={el.to}>
						<Typography variant="h6">{el.name}</Typography>
						<KeyboardArrowDownIcon fontSize="large" />
					</AppbarLink>
				</nav>
			))}
		</Appbar>
	);
}

export default Header;
