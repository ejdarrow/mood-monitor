import {drawFace} from "./graphics/drawing.js";

export {face, exampleFace};

// This is a wrapper with handlers and examples.

function face(variables) {
	return drawFace(variables);
};

function exampleFace() {
	let variables = {
		"width":200, //TODO: Preserve aspect ratio of drawn face somehow
		"height":200, 
		"eyes":"0.2", // Awake
		"mouth":"-0.5", // Happy
		"eyeBags":"0.1", // A little stressed
		"cheeks":"0.5" // Somewhat unhealthy
	};
	return drawFace(variables);
};
