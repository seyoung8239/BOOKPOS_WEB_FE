/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { StyledContainer } from '../../styles/styledComponents';
import NewsItem from './NewsItem';

const dummyNewsData = [
	{
		img: '/img/intro2.png',
		title: '와이랩, 네이버 스마트스토어에 굿즈 쇼핑몰 오픈',
		desc: '와이랩은 네이버 스마트스토어에 공식 굿즈 쇼핑몰인 ‘와이랩 스토어’를 오픈했다고 22일 밝혔다.와이랩 스토어는 매주 월요일마다 ‘스터디그룹’, ‘세상은 돈과 권력’, ‘선의의 경쟁’, ‘정글쥬스’, ‘한림체육관’ 순으로 총',
		date: '2021-11-22',
		isOpen: false,
	},
	{
		img: '/img/intro2.png',
		title: '대한민국 넘어 세계로’ 웹툰 유니버스로 글로벌 시장 공략',
		desc: `와이랩의 세계관이 글로벌에서 인정받았다.

19일 와이랩에 따르면 와이랩이 제작한 ‘슈퍼스트링’, ‘블루스트링’ 세계관을 바탕으로 제작된 작품들이 태국과 인도네시아서 1위에 등극하면서 대한민국을 넘어 북미, 유럽, 아시아 등 전세계에서 K웹툰의 우수성을 알리며 흥행을 일으키고 있다.


지난 2015년 10월 웹툰 ‘신암행어사’, ‘부활남’, ‘아일랜드’, ‘테러맨’ 등을 중심으로 슈퍼 히어로 세계관 ‘슈퍼스트링’을 처음 선보였다. 지난 2월에는 청춘들의 갈등과 성장을 담은 청춘 학원물 세계관 ‘블루스트링’을 공개해 화제를 모았다. ‘블루스트링’과 ‘슈퍼스트링’은 와이랩의 인기 웹툰 속 캐릭터들을 하나의 세계관으로 통합시킨 웹툰 유니버스다.`,
		date: '1996-09-09',
		isOpen: false,
	},
	{
		img: '/img/intro2.png',
		title: '와이랩 ‘정글쥬스’ 작가 3인방, ‘뉴욕코믹콘’ 인터뷰 공개',
		desc: '콘텐츠 제작업체 와이랩은 ‘2021 뉴욕 코믹콘’의 ‘패널앤스크리닝’ 코너에서 자사 웹툰 ‘정글쥬스’의 형은, 쥬더, 신형욱 작가의 인터뷰 영상이 공개됐다고 12일 밝혔다.‘패널앤스크리닝’ 코너는 전 세계에서 주목받는 대중문화 콘텐츠를 제작진들이 글로벌 팬들에…',
		date: '1996-09-09',
		isOpen: false,
	},
];

function Main() {
	const [newsData, setNewsData] = useState(dummyNewsData);
	const toggleNthIsOpen = (i: number) => {
		setNewsData(prev => {
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
