import styled from "styled-components";

export const ModeSwitchStyled = styled.label`
	position: relative;
	display: inline-block;
	width: 46px;
	height: 26px;
	transition: all 1s linear;

	input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: ${({ theme }) => theme.quinary};
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 34px;
	}

	.slider:before {
		position: absolute;
		content: "";
		height: 18px;
		width: 18px;
		left: 4px;
		bottom: 4px;
		background-color: ${({ theme }) => theme.primary};
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 50%;
	}

	input:checked + .slider {
		background-color: ${({ theme }) => theme.tertiary};
	}

	/* input:focus + .slider {
		box-shadow: 0 0 1px ${({ theme }) => theme.secondary};
	} */

	input:checked + .slider:before {
		-webkit-transform: translateX(20px);
		-ms-transform: translateX(20px);
		transform: translateX(20px);
	}
`;
