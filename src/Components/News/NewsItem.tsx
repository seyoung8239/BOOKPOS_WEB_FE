/** @jsxImportSource @emotion/react */
import { secondaryColor } from '../../styles/colors';

interface News {
	img: string;
	title: string;
	desc: string;
	date: string;
	isOpen: boolean;
}

function ClosedNewsItem({
	news,
	toggleNthIsOpen,
	idx,
}: {
	news: News;
	toggleNthIsOpen: Function;
	idx: number;
}) {
	const { img, title, desc, date, isOpen } = news;
	return (
		<>
			<hr />
			<div style={{ display: 'flex', padding: '40px', gap: '40px' }}>
				<img src={img} width="140px" alt="intro1" />
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '10px',
					}}
				>
					<div style={{ color: secondaryColor, fontSize: '44px' }}>
						{title}
					</div>
                    aslfegrkjfeasgdhlfej;fsdghklesghrdfkjdwoefahl
					<div>{date}</div>
					<div>{desc}</div>
				</div>
				<button onClick={() => toggleNthIsOpen(idx)}>
					{isOpen ? '-' : '+'}
				</button>
			</div>
		</>
	);
}

function OpenedNewsItem({
	news,
	toggleNthIsOpen,
	idx,
}: {
	news: News;
	toggleNthIsOpen: Function;
	idx: number;
}) {
	const { img, title, desc, date, isOpen } = news;
	return (
		<>
			<hr />
			<div style={{ display: 'flex', padding: '40px', gap: '40px' }}>
				<img src={img} width="140px" alt="intro1" />
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '10px',
					}}
				>
					<div style={{ color: secondaryColor, fontSize: '44px' }}>
						{title}
					</div>
					<div>{date}</div>
					<div>{desc}</div>
				</div>
				<button onClick={() => toggleNthIsOpen(idx)}>
					{isOpen ? '-' : '+'}
				</button>
			</div>
		</>
	);
}

function NewsItem({
	news,
	toggleNthIsOpen,
	idx,
}: {
	news: News;
	toggleNthIsOpen: Function;
	idx: number;
}) {
	const { isOpen } = news;
	return (
		<>
			{isOpen ? (
				<ClosedNewsItem
					news={news}
					toggleNthIsOpen={toggleNthIsOpen}
					idx={idx}
				/>
			) : (
				<OpenedNewsItem
					news={news}
					toggleNthIsOpen={toggleNthIsOpen}
					idx={idx}
				/>
			)}
		</>
	);
}

export default NewsItem;
