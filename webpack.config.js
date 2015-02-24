module.exports = {
	entry: "./apps/client/js/app/components/app.jsx",
	output: {
		filename: "main.js"
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: "jsx" },
			{ loader: "babel" }
		]
	}
};