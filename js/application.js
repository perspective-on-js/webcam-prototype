;(function(){
    if (!navigator.getUserMedia) {
	navigator.getUserMedia =
	    navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
	    navigator.msGetUserMedia;
    }

    var workbench = document.getElementById('workbench');
    if (navigator && navigator.getUserMedia) {
	workbench.innerHTML = 'We are good to go';
    } else {
	workbench.innerHTML = 'Something is amiss';
    }
})()
