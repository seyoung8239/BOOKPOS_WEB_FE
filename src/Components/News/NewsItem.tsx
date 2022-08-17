/** @jsxImportSource @emotion/react */
import { secondaryColor } from '../../styles/colors';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import RemoveSharpIcon from '@mui/icons-material/RemoveSharp';

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
			<div style={{ display: 'flex', padding: '30px', gap: '60px' }}>
				<img src={img} width="200px" height="150px" alt="intro1" />
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '10px',
						width: '100%',
					}}
				>
					<div style={{ color: secondaryColor, fontSize: '27px' }}>
						{title}
					</div>
					<div>{date}</div>
					<div>{desc.slice(0, 150)}...</div>
				</div>
				{isOpen ? (
					<RemoveSharpIcon
						onClick={() => toggleNthIsOpen(idx)}
						sx={{ fontSize: 30, border: '3px solid black' }}
					/>
				) : (
					<AddSharpIcon
						onClick={() => toggleNthIsOpen(idx)}
						sx={{ fontSize: 30, border: '3px solid black' }}
					/>
				)}
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
	const { img, title, desc, date } = news;
	return (
		<>
			<hr />
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					padding: '30px',
					gap: '30px',
				}}
			>
				<div style={{ fontSize: '36px' }}>{title}</div>
				<div>{date}</div>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<img src={img} width="300vw" alt="intro1" />
				</div>

				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '10px',
					}}
				>
					<div>{desc}</div>
				</div>
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
			<ClosedNewsItem
				news={news}
				toggleNthIsOpen={toggleNthIsOpen}
				idx={idx}
			/>
			{isOpen && (
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
