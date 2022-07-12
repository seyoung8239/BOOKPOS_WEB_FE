import { FC } from 'react';
import styled from '@emotion/styled';

interface ButtonProps {
	primary?: string;
}

interface ComponentProps {
	className?: string;
	label: string;
}

interface StyledComponentProps {
	bgColor: string;
}

const Button = styled('button')<ButtonProps>`
	color: ${props => (props.primary ? 'hotpink' : 'turqioise')};
`;

const Component: FC<ComponentProps> = ({ label, className }) => (
	<div className={className}>{label}</div>
);

const StyledComponent0 = styled(Component)<StyledComponentProps>`
	color: red;
	background: ${props => (props.label ? props.bgColor : 'white')};
`;

function Header() {
	return (
		<div>
			<Button>Hello</Button>
		</div>
	);
}

export default Header;
