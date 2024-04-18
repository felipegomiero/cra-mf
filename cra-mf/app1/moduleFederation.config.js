const { dependencies } = require("./package.json");

module.exports = {
	name: "app1", // names: "app1", "app2" & "shell_app"
	filename: "remoteEntry.js",
	exposes: {
		"./AppRoutes": "./src/routes.js",
	},
	remotes: {},
	shared: {
		...dependencies,
		react: {
			singleton: true,
			import: "react",
			shareScope: "default",
			requiredVersion: dependencies.react,
		},
		"react-dom": {
			singleton: true,
			requiredVersion: dependencies["react-dom"],
		},
		"react-router-dom": {
			singleton: true,
			requiredVersion: dependencies["react-router-dom"],
		},
	},
};
