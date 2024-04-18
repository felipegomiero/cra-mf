const { dependencies } = require("./package.json");

module.exports = {
	name: "app2",
	filename: "remoteEntry.js",
	exposes: {
		"./hello": "./src/mf/hello.tsx",
		"./AppRoutes": "./src/mf/routes.tsx",
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
