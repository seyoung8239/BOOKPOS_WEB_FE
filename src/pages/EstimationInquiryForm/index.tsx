import { StyledContainer } from '../../styles/styledComponents';
import MyInput from '../../Components/EstimationInquiryForm/MyInput';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import useStore, { FormInfo } from '../../store';

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

const estimationInfoName = [
	'company_name',
	'company_representative',
	'company_business_number',
	'company_business_category',
	'company_webpage',
	'company_addrerss',
	'company_writers',

	'manager_name',
	'manager_email',
	'manager_cell',
	'manager_phone',
	'manager_hier',

	'tax_name',
	'tax_email',

	'admin_name',
	'admin_id',
];

function EstimationInquiryForm() {
	const navigate = useNavigate();
	const store = useStore();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const formData = e.currentTarget as Element;
		const fieldValues = formData.getElementsByTagName('input');
		const estimationInfo: string[] = [];
		for (let i = 0; i < fieldValues.length; i++) {
			estimationInfo.push(fieldValues.item(i)?.value!);
		}

		const formInfo: any = {};
		estimationInfoName.forEach((el, i) => {
			formInfo[el] = estimationInfo[i];
		});

		store.setForms(formInfo as FormInfo);
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
					<Link
						to="/estimation-inquiry"
						style={{ textDecoration: 'none', color: '#3f51b5' }}
					>
						<Button variant="outlined" size="large">
							이전
						</Button>
					</Link>
					<Button variant="contained" size="large" type="submit">
						다음
					</Button>
				</div>
			</form>
		</StyledContainer>
	);
}

export default EstimationInquiryForm;
