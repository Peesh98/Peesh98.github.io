import styled from "styled-components";

export const StyledBurger = styled.button`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 1.6rem;
	height: 1.75rem;
	background: transparent;
	border: none;
	margin: 0px 0px 0px 30px;
	padding: 0;
	cursor: pointer;
	z-index: 10;

	@media (min-width: ${({ theme }) => theme.mobile}) {
		display: none;
	}

	&:focus {
		outline: none;
	}

	div {
		width: 1.6rem;
		height: 0.2rem;
		background: ${({ theme }) => theme.secondary};
		transition: all 0.3s linear;
		transform-origin: -0.6px;

		:first-child {
			transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
		}

		:nth-child(2) {
			opacity: ${({ open }) => (open ? "0" : "1")};
			transform: ${({ open }) =>
				open ? "translateX(-20px)" : "translateX(0)"};
		}

		:nth-child(3) {
			transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
		}
	}
`;