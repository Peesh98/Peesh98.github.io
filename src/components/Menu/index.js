import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import { NavLink } from "react-router-dom";

const Menu = ({ open }) => {
	return (
		<StyledMenu open={open}>
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
		</StyledMenu>
	);
};

Menu.propTypes = {
	open: bool.isRequired
};

export default Menu;