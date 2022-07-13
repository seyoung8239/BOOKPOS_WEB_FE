import { styled } from '@mui/material/styles';

interface ContainerProps {
	bgColor?: string;
}

export const StyledContainer = styled('div')<ContainerProps>`
	height: 880px;
	padding: 8vw 5vw 5vw 5vw;
	background: ${props => (props.bgColor ? props.bgColor : 'white')};

	@media (max-width: 1500px) {
		
	}
`;
