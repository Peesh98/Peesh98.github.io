import styled from "styled-components";

export const StyledMenu = styled.nav`
	@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
	display: flex;
	flex-direction: column;
	background: ${({ theme }) => theme.background};
	height: calc(100vh - 90px);
	width: 100vw;
	text-align: left;
	position: fixed;
	top: 90px;
	left: 0px;
	transition: ${({ open }) =>
		open
			? "transform 0.3s ease-in-out, visibility 0s linear 0s"
			: "transform 0.3s ease-in-out, visibility 0s linear 0.3s"};
	transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100vw)")};
	z-index: 1;

	a {
		font-family: "Lato", sans-serif;
		font-size: 18px;
		padding: 1rem 2rem;
		letter-spacing: 2px;
		color: ${({ theme }) => theme.secondary};
		text-decoration: none;
		transition: color 0.3s linear;

		@media (max-width: ${({ theme }) => theme.mobile}) {
			font-size: 1.5rem;
			text-align: center;
		}

		&:hover {
			background: ${({ theme }) => theme.tertiary};
			color: ${({ theme }) => theme.primary};
		}
	}
`;