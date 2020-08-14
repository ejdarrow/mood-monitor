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
  const w = Math.round(1/10 * config.width);
  let h = Math.round(1/6 * config.eyes * config.height) + 1;
  let y = Math.round(2/5 * config.height);
  const leftX = Math.round(5/16 * config.width);
  const rightX = config.width - leftX;

  // Draw eyes
  let result = drawEye(y, leftX, w, h);
  result += drawEye(y, rightX, w, h);

  // Draw eyebrows
  if (config.eyebrowFactor) {
    y -= Math.round(3/2 * h);
    h = Math.round(1/4 * h * config.eyebrowFactor);
    result += drawEyebrow(y - h, leftX - w, y + h, leftX + w);
    result += drawEyebrow(y - h, rightX + w, y + h, rightX - w);
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
  const startX = Math.round(config.width/4 + config.width/16);
  const endX = config.width - startX;
  let temp = config.height / 6;
  const y = Math.round((config.mouth > 0) ? 4*temp : 5*temp);
  temp = y + config.mouth * config.height/5 + 1;
  let result = `<path d="M ${startX} ${y} C ${startX} ${temp},
    ${endX} ${temp}, ${endX} ${y}" stroke="black" fill="transparent"/>`;
  return result;
};

function drawOtherElements(config) {
  return "";
};
