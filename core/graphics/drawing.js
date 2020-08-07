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
	// Left eye
	var result = "<ellipse ";
	result += "cx=\"";
	result += Math.round(variables["width"]/4.0 + variables["width"]/16.0);
	result += "\" cy=\"";
	result += Math.round(variables["height"]/5.0);
	result += "\" rx=\"";
	result += Math.round(variables["width"]/10.0);
	result += "\" ry=\"";
	result += Math.round(variables["eyes"] * variables["height"]/6.0) + 1;
	result += "\" fill=\"transparent\" stroke=\"black\" />";	

	// Right eye
	result += "<ellipse ";
        result += "cx=\"";
        result += Math.round((3.0*variables["width"])/4.0 -(3.0 * variables["width"])/16.0);

        result += "\" cy=\"";
        result += Math.round(variables["height"]/5.0);
        result += "\" rx=\"";
        result += Math.round(variables["width"]/10.0);
        result += "\" ry=\"";
        result += Math.round(variables["eyes"] * variables["height"]/6.0) + 1;
        result += "\" fill=\"transparent\" stroke=\"black\" />";
	return result;
};


//Curves, for my reference are:
// 1 4
// 2 3
function drawMouth(variables) {
	var result = "<path d=\"";
	var mouthX = Math.round(variables["width"]/4.0 +variables["width"]/16.0);
	var mouthEndX = Math.round((3.0*variables["width"])/4.0 -(3.0 * variables["width"])/16.0);


	result += "M " + mouthX;
	var mouthY =  Math.round(2.0*variables["height"]/3.0);
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
