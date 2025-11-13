//your JS code here. If required.
function allMethods() {
	const methods=Object.getOwnPropertyNames(Math)
	.filter(prop=>typeof Math[prop]==="function");

	return methods.join(", ");
}

alert(allMethods());
