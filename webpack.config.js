module.exports = {
	output: {
		filename: "main.js"
	},
	module: {
		loaders: [
			{ loader: "jsx" },
			{ loader: "babel" }
		]
	}
};