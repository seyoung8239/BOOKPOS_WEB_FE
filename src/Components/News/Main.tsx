/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { StyledContainer } from '../../styles/styledComponents';
import NewsItem from './NewsItem';

const dummyNewsData = [
	{
		img: '/img/intro2.png',
		title: 'dsafsag',
		desc: 'asgefd',
		date: '1996-09-09',
		isOpen: false,
	},
	{
		img: '/img/intro2.png',
		title: 'dsafsag',
		desc: 'asgefd',
		date: '1996-09-09',
		isOpen: false,
	},
	{
		img: '/img/intro2.png',
		title: 'dsafsag',
		desc: 'asgefd',
		date: '1996-09-09',
		isOpen: false,
	},
];

function Main() {
	const [newsData, setNewsData] = useState(dummyNewsData);
	const toggleNthIsOpen = (i: number) => {
		setNewsData(prev => {
			console.log('asdf');
			console.log(new Date().getTime());
			prev[i] = { ...prev[i], isOpen: !prev[i].isOpen };
			return [...prev];
		});
	};

	return (
		<StyledContainer wd="100%">
			<div
				style={{
					fontSize: '3em',
					fontWeight: 700,
					textAlign: 'center',
				}}
			>
				소식
			</div>
			<div style={{ height: '50px' }}></div>
			{newsData.map((el, i) => (
				<NewsItem
					key={i}
					news={el}
					toggleNthIsOpen={toggleNthIsOpen}
					idx={i}
				/>
			))}
		</StyledContainer>
	);
}

export default Main;
