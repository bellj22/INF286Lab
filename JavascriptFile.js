function submitButton() {
	let webpage = document.getElementById("SB");
}

function largeNumber() {
	let max = [1,2,3,4,5,6,7];
	// find largest number in list
	return Math.max(max);
}

function htjs() {
	let xhr = new XMLHttpRequest();

	// 2. Configure it w/ GET request
	xhr.open('GET', https://api.weather.gov/gridpoints/TOP/31,80/forecast');

	xhr.responseType = 'json';
	xhr.send();

	xhr.onload= function(); {
		let repsonseObj= xhr.response;
		alert(responseObj.message);

	xhr.onload = function() {
		if (xhr.status !- 200) {
			alert(`Error ${xhr.status}: ${xhr.statusText}`);
		} else {
		alert(`Done, got $xhr.response.length} bytes`);
		}
	};

	xhr.onprogress = function(event)
	if (event.lengthComputable) {
		alert(`Received ${event.loaded} of ${event.total} bytes`);
	  } else {
		alert(`Received ${event.loaded} bytes`); // no Content-Length
	  }

	};

	xhr.onerror = function() {
	  alert("Request failed");
	};
}