import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
	entries: [
		"./index",
	],
	outDir: "build",
	declaration: true,
	failOnWarn: false
});
