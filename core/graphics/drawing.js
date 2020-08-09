export { drawFace };

function drawFace(variables) {
	var result = "<svg width=\"";
	result += variables["width"];
	result += "\" height=\"";
	result += variables["height"];
	result += "\" xmlns=\"http://www.w3.org/2000/svg\">";
	result += drawEyes(variables);
	result += drawMouth(variables);
	result += drawOtherElements(variables);
	result += "</svg>";
	return result;
};

function drawEyes(variables) {
	
	var leftEyeCenterX = Math.round(variables["width"]/4.0 + variables["width"]/16.0);
	var rightEyeCenterX = variables["width"] - leftEyeCenterX;
	var eyeCenterY = Math.round(2.0*variables["height"]/5.0);
	var eyeWidth = Math.round(variables["width"]/10.0);
	var eyeHeight = Math.round(variables["eyes"] * variables["height"]/6.0) + 1;

	var eyebrowCenterHeight = eyeCenterY - Math.round(3.0*eyeHeight/2.0);
        var leftEyebrowStartX = leftEyeCenterX - eyeWidth;
        var leftEyebrowEndX = leftEyeCenterX + eyeWidth;
        var eyebrowStartY = eyebrowCenterHeight - Math.round(eyeHeight/4.0) * variables["eyebrowFactor"];
        var eyebrowEndY = eyebrowCenterHeight + Math.round(eyeHeight/4.0) * variables["eyebrowFactor"];
	var rightEyebrowStartX = rightEyeCenterX + eyeWidth;
	var rightEyebrowEndX = rightEyeCenterX - eyeWidth;

	var drawEyebrows = false;
	if(variables["eyebrowFactor"]){
		drawEyebrows = true;
	}

	// Left eye
	var result = "<ellipse ";
	result += "cx=\"";
	result += leftEyeCenterX;
	result += "\" cy=\"";
	result += eyeCenterY;
	result += "\" rx=\"";
	result += eyeWidth;
	result += "\" ry=\"";
	result += eyeHeight;
	result += "\" fill=\"transparent\" stroke=\"black\" />";	

	// Left Eyebrow
	if(drawEyebrows) {
		result += "<path d=\"M ";
		result += leftEyebrowStartX;
		result += " ";
		result += eyebrowStartY;
		result += " L ";
		result += leftEyebrowEndX;
		result += " ";
		result += eyebrowEndY;
		result += " Z\" stroke=\"black\" fill=\"transparent\"/> ";
	}

	// Right eye
	result += "<ellipse ";
        result += "cx=\"";
        result += rightEyeCenterX;
        result += "\" cy=\"";
        result += eyeCenterY;;
        result += "\" rx=\"";
        result += eyeWidth;
        result += "\" ry=\"";
        result += eyeHeight;
        result += "\" fill=\"transparent\" stroke=\"black\" />";

	// Right Eyebrow	
	if(drawEyebrows) {
		result += "<path d=\"M ";
        	result += rightEyebrowStartX;
	        result += " ";
        	result += eyebrowStartY;
	        result += " L ";
        	result += rightEyebrowEndX;
	        result += " ";
        	result += eyebrowEndY;
	        result += " Z\" stroke=\"black\" fill=\"transparent\"/> ";
	}

	return result;
};


//Curves, for my reference are:
// 1 4
// 2 3
function drawMouth(variables) {
	var result = "<path d=\"";
	var mouthX = Math.round(variables["width"]/4.0 +variables["width"]/16.0);
	var mouthEndX = variables["width"] - mouthX;


	result += "M " + mouthX;
	var mouthY =  Math.round(5.0*variables["height"]/6.0);
	if(variables["mouth"] > 0){
		mouthY -= variables["height"]/6.0;
	}
	result += " " + mouthY;
	result += " C ";
	
	result += mouthX;
	result += " ";
	result += mouthY + variables["mouth"] * variables["height"]/5.0 + 1;
	result += ", " + mouthEndX + " ";
	result += mouthY + variables["mouth"] * variables["height"]/5.0 + 1;
	result += ", ";
	result += mouthEndX + " " + mouthY;

	result += "\" stroke=\"black\" fill=\"transparent\"/>";

	return result;
};

function drawOtherElements(variables) {
	return "";
};
