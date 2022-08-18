import { StyledContainer } from '../../styles/styledComponents';
import MyInput from '../../Components/EstimationInquiryForm/MyInput';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const corpInfo = [
	'상호명',
	'대표자명',
	'사업자 등록번호',
	'업태 / 종목',
	'회사 사이트(URL)',
	'사업자 주소',
	'소속작가 수',
];

const managerInfo = [
	'담당자명',
	'이메일',
	'휴대전화',
	'유선전화',
	'직급',
	'세금계산서 담당자명',
	'세금계산서 담당자 이메일',
];

const bookPosManagerInfo = ['북포스 관리자명', '등록하고 싶은 관리자 ID'];

const estimationInfoName = corpInfo
	.concat(managerInfo)
	.concat(bookPosManagerInfo);

interface Obj {
	[key: string]: string;
}

function EstimationInquiryForm() {
	const navigate = useNavigate();
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const formData = e.currentTarget as Element;
		const fieldValues = formData.getElementsByTagName('input');
		const estimationInfo: string[] = [];
		for (let i = 0; i < fieldValues.length; i++) {
			estimationInfo.push(fieldValues.item(i)?.value!);
		}

		const obj: Obj = {};
		estimationInfoName.forEach((el, i) => {
			obj[el] = estimationInfo[i];
		});
		console.log(obj);
		navigate('/estimation-inquiry-terms');
	};

	return (
		<StyledContainer wd="100%">
			<form
				onSubmit={handleSubmit}
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '80px',
					marginTop: '150px',
				}}
			>
				<div style={{ display: 'flex', gap: '30px' }}>
					<div style={{ width: '20%', fontSize: '32px' }}>
						회사정보
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							width: '60%',
							gap: '15px',
						}}
					>
						{corpInfo.map(name => (
							<MyInput key={name} name={name} />
						))}
					</div>
				</div>
				<div style={{ display: 'flex', gap: '30px' }}>
					<div style={{ width: '20%', fontSize: '32px' }}>
						담당자 정보
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							width: '60%',
							gap: '15px',
						}}
					>
						{managerInfo.map(name => (
							<MyInput key={name} name={name} />
						))}
					</div>
				</div>
				<div style={{ display: 'flex', gap: '30px' }}>
					<div style={{ width: '20%', fontSize: '27px' }}>
						북포스 관리자 정보
					</div>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							width: '60%',
							gap: '15px',
						}}
					>
						{bookPosManagerInfo.map(name => (
							<MyInput key={name} name={name} />
						))}
					</div>
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						gap: '30px',
					}}
				>
					<Button variant="outlined" size="large">
						<Link
							to="/estimation-inquiry"
							style={{ textDecoration: 'none', color: '#3f51b5' }}
						>
							이전
						</Link>
					</Button>
					<Button variant="contained" size="large" type="submit">
						다음
					</Button>
				</div>
			</form>
		</StyledContainer>
	);
}

export default EstimationInquiryForm;
