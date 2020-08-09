# mood-monitor
Making an open-source and relatively lightweight face-mood monitoring tool for various live input

# Goals
- To make a javascript library that can be imported and instantiated quickly and easily, wiring basic variables into facial expression characteristics.
- To make a face that is racially neutral
- To make a face that is aesthetically pleasing without being "too human"

# Example
For instance:
 
	from mood-monitor import face;

	let variables = { 
		"width":100,
		"height":100,
		"mouth": "1.0", // a float between -1 and 1
		"eyes": "0.5", // a float between 0 and 1
		"eye-bags": "0.5", // a float between 0 and 1
		"cheeks": "0.5" // a float between 0 and 1
		};

	$("that-div").html(face.render(variables));


Or

	from mood-monitor import expression;
	
	let variables = {
		"width":100,
		"height":100,
		"stressed":"0.5",
		"happy":"0.3"
		};
	
	$("that-div").html(expression.render(variables));

Other variables or characteristics could be implemented as well.

# License
This should be considered open source. Beer code license applies.

# References
[Azure Facial Detection example](https://docs.microsoft.com/en-us/azure/cognitive-services/face/concepts/face-detection)

[Some other face readers](https://nordicapis.com/20-emotion-recognition-apis-that-will-leave-you-impressed-and-concerned/)

[This Readme on github pages](https://ejdarrow.github.io/mood-monitor)

[The example implementation](https://ejdarrow.github.io/mood-monitor/example.html)
