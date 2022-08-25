/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { priceData } from '../PriceGuide/Screen1';

function Service({ setIdx, idx }: { setIdx: Function; idx: number }) {
	return (
		<>
			{priceData.map((pd, i) => (
				<ProductBox
					key={i}
					data={pd}
					setIdx={() => setIdx(i)}
					isSelected={i === idx}
				/>
			))}
		</>
	);
}

interface productBoxType {
	title: string;
	tcolor: string;
	desc: string;
	price: string;
	options: options;
}

interface options {
	capacity: string;
	initialPrice: string;
}

const ProductBox: React.FC<{
	data: productBoxType;
	setIdx: Function;
	isSelected: Boolean;
}> = ({ data, setIdx, isSelected }) => {
	const { title, tcolor, desc, price, options } = data;
	return (
		<button
			css={css`
				background-color: ${isSelected ? tcolor : 'white'};
				width: 220px;
				border: none;
				border-radius: 20px;
				padding: 20px;
				font-size: 17px;
				box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
				${isSelected && 'color: white;'};
				cursor: pointer;
			`}
			onClick={() => setIdx()}
		>
			<div
				css={css`
					color: ${!isSelected && tcolor};
					font-weight: 700;
					font-size: 1.6em;
					margin-bottom: 20px;
				`}
			>
				{title}
			</div>
			<div
				css={css`
					font-size: 0.9em;
				`}
			>
				{desc}
			</div>
			<div style={{ height: '10px' }} />
			<div
				css={css`
					color: #aaa;
					font-size: 0.8em;
				`}
			>
				약정 1년 단위
			</div>
			<div style={{ height: '25px' }} />
			<div>
				월
				<span
					css={css`
						font-size: 1.3em;
						font-weight: 700;
					`}
				>
					{price}원
				</span>
			</div>
			<div style={{ height: '10px' }} />
			<div
				css={css`
					font-size: 0.8em;
				`}
			>
				{options.capacity}
			</div>
			<div style={{ height: '10px' }} />
			<div
				css={css`
					font-size: 0.8em;
				`}
			>
				설치비: {options.initialPrice}원/최초 1회
			</div>
			<div style={{ height: '10px' }} />
			<div
				css={css`
					font-size: 0.8em;
				`}
			>
				계정 제한: 무제한
			</div>
		</button>
	);
};

export default Service;
