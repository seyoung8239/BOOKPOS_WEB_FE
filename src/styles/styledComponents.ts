import { styled } from '@mui/material/styles';

interface ContainerProps {
	bgcolor?: string;
	wd?: string;
}

export const StyledContainer = styled('div')<ContainerProps>`
	height: ${props => (props.wd ? props.wd : '650px')};
	background: ${props => (props.bgcolor ? props.bgcolor : 'white')};
	padding: 50px;
	@media (min-width: 1200px) {
		padding: 50px 20vw;
	}
	@media (min-width: 1600px) {
		padding: 3vw 25vw;
	}
`;

export const HalfContainer = styled('div')`
	width: 50%;
	height: 100%;
`;
