import React, { useState } from "react";
import { ModeSwitchStyled } from "./ModeSwitch.styled";
import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "../../features/darkMode/darkModeSlice";

const ModeSwitch = () => {
	const dispatch = useDispatch();
	const darkMode = useSelector((state) => state.darkMode);
	const [darkModeChecked, setDarkModeChecked] = useState(darkMode || false);

	const handleChangeMode = () => {
		setDarkModeChecked(!darkModeChecked);
		dispatch(changeMode());
	};

	return (
		<ModeSwitchStyled>
			<input
				type="checkbox"
				onChange={() => handleChangeMode()}
				checked={darkModeChecked}
			/>
			<span className="slider" />
		</ModeSwitchStyled>
	);
};

export default ModeSwitch;
