import {drawFace} from "./graphics/drawFace.js";

export {face, exampleFace};

// This is a wrapper with handlers and examples.

function face(variables) {
	return drawFace(variables);
};

function exampleFace() {
	let variables = {
		"eyes":0.3, // Awake
		"mouth":1.0, // Happy
		"eyeBags":0.1, // A little stressed
		"cheeks":0.5 // Somewhat unhealthy
	};
	return drawFace(variables);
};
