import { Suspense } from "react";
import { useParams } from "react-router-dom";
import useFederatedComponent from "mf-cra";

const remoteApps = [
	{
		remoteUrl: "http://localhost:3001/remoteEntry.js",
		moduleToLoad: "./AppRoutes",
		remoteName: "app1",
		localRoute: "app1",
	},
	{
		remoteUrl: "http://localhost:3002/remoteEntry.js",
		moduleToLoad: "./AppRoutes",
		remoteName: "app2",
		localRoute: "app2",
	},
];

function RemoteApp({ app }) {
	const { Component: RemoteComponent } = useFederatedComponent(app);

	return (
		<Suspense fallback="loading...">
			{RemoteComponent && <RemoteComponent />}
		</Suspense>
	);
}

export default function RemoteAppHandler() {
	const { remoteApp } = useParams();
	const appToLoad = remoteApps.find((app) => app.localRoute === remoteApp);

	if (!appToLoad) return <div>App not found</div>;

	return <RemoteApp app={appToLoad} />;
}
