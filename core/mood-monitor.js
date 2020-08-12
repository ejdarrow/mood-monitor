import {drawFace} from "./graphics/drawing.js";

export {face, happy, surprised, sad, angry, afraid, disgusted};

// This is a wrapper with handlers and examples.

function face(config) {
  return drawFace(config);
};

function expression(config) {
  // Do facial interpretation for expression creation
}

function happy() {
	let config = {
                "width":200, 
                "height":200,
                "eyes":0.6, 
                "mouth":0.7, 
                "eyeBags":0.1, 
                "cheeks":0.5 
        };
        return drawFace(config);
};

function surprised() {
	let config = {
                "width":200, 
                "height":200,
                "eyes":0.8, 
                "mouth":0.0, 
                "eyeBags":0.1,
                "cheeks":0.5 
        };
        return drawFace(config);
};

function sad() {
	let config = {
		"width":200, 
		"height":200, 
		"eyes":0.2, 
		"mouth":-0.5, 
		"eyeBags":0.1,
		"eyebrowFactor":-2.0,
		"cheeks":0.5  
	};
	return drawFace(config);
};

function angry() {
	let config = {
		"width":200, 
		"height":200, 
		"eyes":0.3, 
		"mouth":-0.2, 
		"eyeBags":0.1, 
		"eyebrowFactor":2.0,
		"cheeks":0.5 
	};
	return drawFace(config);
};

function afraid() {
	let variables = {
			"width":200, //TODO: Preserve aspect ratio of drawn face somehow
			"height":200,
			"eyes":"0.8", // Awake
			"mouth":"-0.2", // Happy
			"eyeBags":"0.1", // A little stressed
			"cheeks":"0.5" // Somewhat unhealthy
	};
	return drawFace(variables);
};

function disgusted() {
	let variables = {
		"width":200, //TODO: Preserve aspect ratio of drawn face somehow
		"height":200, 
		"eyes":"0.3", // Awake
		"mouth":"0.0", // Happy
		"eyeBags":"0.1", // A little stressed
		"eyebrowFactor":"2.0",
		"cheeks":"0.5" // Somewhat unhealthy
	};
	return drawFace(variables);
};


