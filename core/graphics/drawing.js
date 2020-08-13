export { drawFace };

function drawFace(config) {
  let result = `<svg width="${config.width}"
    height="${config.height}" xmlns="http://www.w3.org/2000/svg">`;
	result += drawEyes(config);
	result += drawMouth(config);
	result += drawOtherElements(config);
	result += "</svg>";
	return result;
};

function drawEyes(config) {
	const leftEyeCenterX = Math.round(config.width/4.0 + config.width/16.0);
	const rightEyeCenterX = config.width - leftEyeCenterX;
	const eyeCenterY = Math.round(2.0*config.height/5.0);
	const eyeWidth = Math.round(config.width/10.0);
  const eyeHeight = Math.round(config.eyes * config.height/6.0) + 1;

	const eyebrowCenterHeight = eyeCenterY - Math.round(3.0*eyeHeight/2.0);
  const leftEyebrowStartX = leftEyeCenterX - eyeWidth;
  const leftEyebrowEndX = leftEyeCenterX + eyeWidth;
  const eyebrowStartY = eyebrowCenterHeight - Math.round(eyeHeight/4.0) * config.eyebrowFactor;
  const eyebrowEndY = eyebrowCenterHeight + Math.round(eyeHeight/4.0) * config.eyebrowFactor;
	const rightEyebrowStartX = rightEyeCenterX + eyeWidth;
	const rightEyebrowEndX = rightEyeCenterX - eyeWidth;

	let result = drawEye(eyeCenterY, leftEyeCenterX, eyeWidth, eyeHeight);

  const drawEyebrows = (config.eyebrowFactor) ? true : false;
	if(drawEyebrows) {
		result += drawEyebrow(
      eyebrowStartY, leftEyebrowStartX, eyebrowEndY, leftEyebrowEndX);
	}

  result += drawEye(eyeCenterY, rightEyeCenterX, eyeWidth, eyeHeight);

	if(drawEyebrows) {
		result += drawEyebrow(
      eyebrowStartY, rightEyebrowStartX, eyebrowEndY, rightEyebrowEndX);
	}

	return result;
};

function drawEyebrow(startY, startX, endY, endX){
  return `<path d="M ${startX} ${startY} L ${endX} ${endY} Z"
    stroke="black" fill="transparent"/>`;
}

function drawEye(centerY, centerX, width, height){
  return `<ellipse cx="${centerX}" cy="${centerY}"
    rx="${width}" ry="${height}" fill="transparent" stroke="black" />`;
}

//Curves, for my reference are:
// 1 4
// 2 3
function drawMouth(config) {
  const startX = Math.round(config.width/4.0 + config.width/16.0);
  const endX = config.width - startX;
  let temp = config.height / 6.0;
  const y = Math.round((config.mouth > 0) ? 4*temp : 5*temp);
  temp = y + config.mouth * config.height/5.0 + 1;
  let result = `<path d="M ${startX} ${y} C ${startX} ${temp},
    ${endX} ${temp}, ${endX} ${y}" stroke="black" fill="transparent"/>`;
	return result;
};

function drawOtherElements(config) {
	return "";
};
