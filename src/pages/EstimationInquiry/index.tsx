import { useState } from 'react';
import { StyledContainer } from '../../styles/styledComponents';
import Bill from '../../Components/EstimationInquiry/Bill';
import Service from '../../Components/EstimationInquiry/Service';

export const serviceTypes = [
	{
		name: 'BASIC',
		member: '소속 작가 50인 이하',
		capacity: '100',
		installation: '250,000',
		monthlyFee: '150000',
	},
	{
		name: 'SPECIAL',
		member: '소속 작가 300인 이하',
		capacity: '300',
		installation: '500,000',
		monthlyFee: '300000',
	},
	{
		name: 'PREMIUM',
		member: '소속 작가 300인 이상',
		capacity: '500',
		installation: '1,000,000',
		monthlyFee: '450000',
	},
];

function EstimationInquiry() {
	const [idx, setIdx] = useState(1);
	const [add, setAdd] = useState(0);

	return (
		<StyledContainer bgcolor="#EEE">
			<div style={{ display: 'flex', gap: '30px' }}>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '20px',
						width: '75%',
					}}
				>
					<div
						style={{
							backgroundColor: 'white',
							width: '90%',
							padding: '30px',
							borderRadius: '10px',
						}}
					>
						<div
							style={{
								fontSize: '21px',
								fontWeight: 900,
							}}
						>
							기본 서비스
						</div>
						<div
							style={{
								display: 'flex',
								gap: '15px',
								padding: '10px',
							}}
						>
							<Service setIdx={setIdx} />
						</div>
					</div>
					<div
						style={{
							backgroundColor: 'white',
							width: '90%',
							padding: '30px',
							borderRadius: '10px',
						}}
					>
						<div>옵션</div>
						<hr />
					</div>
				</div>
				<Bill idx={idx} add={add} />
			</div>
		</StyledContainer>
	);
}

export default EstimationInquiry;
