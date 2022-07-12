import { styled } from '@mui/material/styles';

interface ContainerProps {
	bgColor?: string;
}

export const StyledContainer = styled('div')<ContainerProps>`
	height: 880px;
	padding: 4vw;
	background: ${props => (props.bgColor ? props.bgColor : 'white')};
`;
