import { Routes, Route } from "react-router-dom";
import { PageWrapper } from "./layout";
import * as Pages from "./pages";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./globalStyles";
import { useSelector } from "react-redux";

function App() {
	const darkMode = useSelector((state) => state.darkMode);

	return (
		<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
			<GlobalStyles />
			<Routes>
				<Route path="/" element={<PageWrapper />}>
					<Route path="/" element={<Pages.IndexPage />} />
				</Route>
			</Routes>
		</ThemeProvider>
	);
}

export default App;
