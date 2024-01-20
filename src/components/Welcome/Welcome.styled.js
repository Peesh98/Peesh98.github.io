import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
0% {
    opacity: 0;
}
100% {
    opacity: 1;
}
`;

export const StyledWelcomeDiv = styled.div`
	display: flex;
	width: 100vw;
	height: 100vh;
	justify-content: center;
	align-items: center;
	background: radial-gradient(
			75% 35% at 50% 95%,
			rgba(0, 0, 0, 0.6) 20%,
			rgba(0, 0, 0, 0) 90%
		),
		linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 80%);
	animation: 5s ${fadeIn} linear;
`;

export const StyledWelcome = styled.h1`
	font-family: Roboto, sans-serif;
	color: ${({ theme }) => theme.secondary};
	font-size: 12vw;
	text-shadow: -1px -1px 0 ${({ theme }) => theme.primary},
		1px -1px 0 ${({ theme }) => theme.primary},
		-1px 1px 0 ${({ theme }) => theme.primary},
		1px 1px 0 ${({ theme }) => theme.primary};
	text-align: center;
	animation: 5s ${fadeIn} linear;
`;
