import React, { useState } from "react";
import { StyledPageWrapper } from "./PageWrapper.styled";
import "./styles.css"
import { NavLink, Outlet } from "react-router-dom";
import { ModeSwitch, Burger, Menu } from "../../components";
// import logo from "../../Logo.svg";

const PageWrapper = () => {
	const [darkMode, setDarkMode] = useState(false);
	const [open, setOpen] = useState(false);

	return (
		<>
			<StyledPageWrapper>
				<NavLink to="/" id="logo">
					<svg
						version="1.1"
						id="Layer_1"
						xmlns="http://www.w3.org/2000/svg"
						x="0px"
						y="0px"
						width="5669.29px"
						height="5669.29px"
						viewBox="0 0 5669.29 5669.29"
						enableBackground="new 0 0 5669.29 5669.29"
						space="preserve"
					>
						<line
							strokeWidth="100"
							strokeMiterlimit="10"
							x1="2834.646"
							y1="193.875"
							x2="2834.646"
							y2="5475.415"
						/>
						<line
							strokeWidth="100"
							strokeMiterlimit="10"
							x1="966.893"
							y1="966.892"
							x2="4702.397"
							y2="966.892"
						/>
						<line
							strokeWidth="100"
							strokeMiterlimit="10"
							x1="966.893"
							y1="971.389"
							x2="966.893"
							y2="4706.895"
						/>
						<line
							strokeWidth="100"
							strokeMiterlimit="10"
							x1="4702.397"
							y1="971.389"
							x2="4702.397"
							y2="4706.895"
						/>
						<line
							fill="none"
							strokeWidth="100"
							strokeMiterlimit="10"
							x1="966.893"
							y1="966.892"
							x2="2834.646"
							y2="4702.397"
						/>
						<line
							fill="none"
							strokeWidth="100"
							strokeMiterlimit="10"
							x1="2834.646"
							y1="4702.397"
							x2="4702.397"
							y2="971.389"
						/>
						<line
							fill="none"
							strokeWidth="100"
							strokeMiterlimit="10"
							x1="966.893"
							y1="2839.143"
							x2="4702.397"
							y2="2839.143"
						/>
						<line
							fill="none"
							strokeWidth="100"
							strokeMiterlimit="10"
							x1="966.893"
							y1="966.892"
							x2="2834.645"
							y2="2839.143"
						/>
						<line
							fill="none"
							strokeWidth="100"
							strokeMiterlimit="10"
							x1="2834.645"
							y1="2839.143"
							x2="4702.397"
							y2="966.892"
						/>
						<circle
							fill="none"
							strokeWidth="100"
							strokeMiterlimit="10"
							cx="2834.645"
							cy="2834.645"
							r="2640.77"
						/>
					</svg>
				</NavLink>
				<nav>
					<div id="links">
						<ModeSwitch
							id="modeSwitch"
							darkMode={darkMode}
							setDarkMode={setDarkMode}
						/>
						<NavLink className="link" to="/">
							Home
						</NavLink>
						<NavLink className="link" to="/about">
							About
						</NavLink>
						<NavLink className="link" to="/projects">
							Projects
						</NavLink>
						<NavLink className="link" to="/contact">
							Contact
						</NavLink>
						<Burger open={open} setOpen={setOpen} />
					</div>
				</nav>
			</StyledPageWrapper>
			<main>
				<Menu open={open} />
				<Outlet />
			</main>
			<footer></footer>
		</>
	);
};

export default PageWrapper;
