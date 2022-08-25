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
		member: '소속 작가 300인 이하',
		capacity: '500',
		installation: '1,000,000',
		monthlyFee: '450000',
	},
];

function EstimationInquiry() {
	const [idx, setIdx] = useState(1);
	const [add, setAdd] = useState(0);

	return (
		<StyledContainer bgcolor="#EEE" wd="100%">
			<div style={{ display: 'flex', gap: '30px', padding: '3vw 0px' }}>
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
								marginBottom: '10px'
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
							<Service setIdx={setIdx} idx={idx} />
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
						<div style={{ fontSize: '21px', marginBottom: '10px' }}>
							옵션
						</div>
						<hr />
						<div
							style={{
								display: 'grid',
								gridTemplateColumns: '0.7fr 2fr 3fr 2fr',
								rowGap: '20px',
								marginTop: '10px',
								fontSize: '17px',
							}}
						>
							<div></div>
							<b>용량추가</b>
							<b>개수</b>
							<b>총합</b>
							<div></div>
							<div>ㄴ100GB 용량</div>
							<div
								style={{
									display: 'flex',
									gap: '10px',
									alignItems: 'center',
								}}
							>
								50,000원 / 월
								<div
									style={{
										width: '60px',
										border: '1px solid black',
										height: '18px',
										borderRadius: '10px',
										padding: '0px 10px',
										display: 'flex',
										justifyContent: 'space-between',
									}}
								>
									<div
										style={{ cursor: 'pointer' }}
										onClick={() =>
											add > 0 && setAdd(prev => prev - 1)
										}
									>
										-
									</div>
									<input
										type="text"
										value={add + ''}
										onChange={e => setAdd(+e.target.value)}
										style={{
											border: 'none',
											width: '14px',
										}}
									/>
									<div
										style={{ cursor: 'pointer' }}
										onClick={() => setAdd(prev => prev + 1)}
									>
										+
									</div>
								</div>
							</div>
							<div>{(add * 50000).toLocaleString()}원</div>
						</div>
					</div>
				</div>
				<Bill idx={idx} add={add} />
			</div>
		</StyledContainer>
	);
}

export default EstimationInquiry;
