/** @jsxImportSource @emotion/react */
import { secondaryColor } from '../../styles/colors';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import RemoveSharpIcon from '@mui/icons-material/RemoveSharp';
import { Buffer } from 'buffer';

interface News {
	image: {
		data: Buffer;
		contentType: string;
	};
	title: string;
	content: string;
	date: string;
	isOpen: boolean;
}

function ClosedNewsItem({
	news,
	isOpen,
	toggleNthIsOpen,
}: {
	news: News;
	isOpen: Boolean;
	toggleNthIsOpen: Function;
}) {
	const { image, title, content, date } = news;
	let imageString = '';
	let contentType = '';
	if (image) {
		imageString = Buffer.from(image.data).toString('ascii');
		contentType = image.contentType;
	}

	return (
		<>
			<hr />
			<div
				style={{
					display: 'flex',
					padding: '30px',
					gap: '60px',
					cursor: 'pointer',
				}}
				onClick={() => toggleNthIsOpen()}
			>
				<img
					src={`data:${contentType};base64,${imageString}`}
					width="200px"
					height="150px"
					alt=""
				/>
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
					<div>{content && content.slice(0, 150)}...</div>
				</div>
				{isOpen ? (
					<RemoveSharpIcon
						sx={{ fontSize: 30, border: '3px solid black' }}
					/>
				) : (
					<AddSharpIcon
						sx={{ fontSize: 30, border: '3px solid black' }}
					/>
				)}
			</div>
		</>
	);
}

function OpenedNewsItem({ news }: { news: News }) {
	const { image, title, content, date } = news;
	let imageString = '';
	let contentType = '';
	if (image) {
		imageString = Buffer.from(image.data).toString('ascii');
		contentType = image.contentType;
	}

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
					<img
						src={`data:${contentType};base64,${imageString}`}
						width="300vw"
						alt="intro1"
					/>
				</div>

				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '10px',
						fontSize:'21px',
						lineHeight: '30px'
					}}
				>
					<div>{content}</div>
				</div>
			</div>
		</>
	);
}

function NewsItem({
	news,
	isOpen,
	toggleNthIsOpen,
}: {
	news: News;
	isOpen: Boolean;
	toggleNthIsOpen: Function;
}) {
	return (
		<>
			<ClosedNewsItem
				news={news}
				isOpen={isOpen}
				toggleNthIsOpen={toggleNthIsOpen}
			/>
			{isOpen && <OpenedNewsItem news={news} />}
		</>
	);
}

export default NewsItem;
