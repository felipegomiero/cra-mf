import { Routes, Route, Link } from "react-router-dom";

export default function AppRoutes() {
	return (
		<div>
			<div>App 2</div>

			<Link to="route1">link 1</Link>
			<Link to="route2">link 2</Link>
			<div style={{ color: "red" }}>
				<Routes>
					<Route index element={<div>App 2Home</div>} />
					<Route path="/route1" element={<div>App 2Route 1</div>} />
					<Route path="/route2" element={<div>App 2Route 2</div>} />
				</Routes>
			</div>
		</div>
	);
}
