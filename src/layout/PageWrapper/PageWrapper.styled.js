import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
0% {
    opacity: 0;
}

100% {
    opacity: 1;
}
`;

const slideIn = keyframes`
0% {
    top: -30px;
}

100% {
    top: 0px;
}
`;

export const StyledPageWrapper = styled.header`
	@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");

	width: 100vw;
	height: 90px;
	background-color: ${({ theme }) => theme.primary};
	display: flex;
	justify-content: center;
	align-items: center;
	padding-left: 20px;
	padding-right: 20px;
	animation: 1.5s ${slideIn} ease-out, 3s ${fadeIn} linear;
	animation-iteration-count: 1;
	animation-fill-mode: backwards;
	position: relative;
	font-family: "Lato", sans-serif;
	transition: color 0.5s linear, background-color 0.5s linear;

	nav #links {
		display: flex;
		align-items: center;
	}

	.link {
		color: ${({ theme }) => theme.secondary};
		font-size: 18px;
		text-decoration: none;
		margin-left: 40px;
		letter-spacing: 2px;
	}

	.link:hover {
		color: ${({ theme }) => theme.tertiary};
	}

	.active {
		color: ${({ theme }) => theme.tertiary};
	}

	#logo {
		display: flex;
		font-size: 25px;
		color: ${({ theme }) => theme.secondary};
		text-decoration: none;
		letter-spacing: 3px;
		align-items: center;
		margin-right: 600px;
	}

	#logo svg {
		width: 50px;
		height: 50px;
		stroke: ${({ theme }) => theme.secondary};
	}

	@media (max-width: 1169.39px) {
		justify-content: space-between;

		#logo {
			margin-right: 40px;
		}
	}

	@media screen and (max-width: ${({ theme }) => theme.mobile}) {
		nav .link {
			display: none;
		}
	}
`;
