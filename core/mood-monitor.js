import {drawFace} from "./graphics/drawing.js";

export {face, exampleBoredSadFace, exampleHappyAwakeFace};

// This is a wrapper with handlers and examples.

function face(config) {
  return drawFace(config);
};

function expression(config) {
  // Do facial interpretation for expression creation
}

function exampleBoredSadFace() {
  let config = {
    "width": 200, //TODO: Preserve aspect ratio of drawn face somehow
    "height": 200,
    "eyes": 0.2, // Awake
    "mouth": -0.5, // Happy
    "eyeBags": 0.1, // A little stressed
    "eyebrowFactor": -2.0,
    "cheeks": 0.5 // Somewhat unhealthy
  };
  return drawFace(config);
};

function exampleHappyAwakeFace() {
  let config = {
    "width": 200, //TODO: Preserve aspect ratio of drawn face somehow
    "height": 200,
    "eyes": 0.8, // Awake
    "mouth": 0.7, // Happy
    "eyeBags": 0.1, // A little stressed
    "cheeks": 0.5 // Somewhat unhealthy
  };
  return drawFace(config);
};
