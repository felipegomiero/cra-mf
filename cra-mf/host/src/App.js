import { BrowserRouter, Routes, Route } from "react-router-dom";
import RemoteAppHandler from "./remoteApp.js";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/:remoteApp" element={<RemoteAppHandler />} />
			</Routes>
		</BrowserRouter>
	);
}
