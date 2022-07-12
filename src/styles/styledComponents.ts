import styled from '@emotion/styled';

interface ContainerProps {
	bgColor?: string;
}

export const StyledContainer = styled.div<ContainerProps>`
	width: 100%;
	height: 780px;
    padding: 150px 0px 50px 100px;
	background: ${props => (props.bgColor ? props.bgColor : 'white')};
`;
