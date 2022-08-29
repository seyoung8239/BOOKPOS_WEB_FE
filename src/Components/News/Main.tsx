/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import axios from 'axios';

import { baseDir } from '../../constant';

import { StyledContainer } from '../../styles/styledComponents';
import NewsItem from './NewsItem';

function Main() {
	const [newsData, setNewsData] = useState([]);
	const [newsOpenList, setNewsOpenList] = useState<boolean[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get(`${baseDir}/api/news`);
			const n = res.data.length;
			setNewsData(res.data);
			setNewsOpenList(new Array(n).fill(false));
		};
		fetchData();
	}, []);

	const toggleNthIsOpen = (i: number) => () => {
		setNewsOpenList(prev => {
			prev[i] = !prev[i];
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
					isOpen={newsOpenList[i]}
					toggleNthIsOpen={toggleNthIsOpen(i)}
				/>
			))}
		</StyledContainer>
	);
}

export default Main;
