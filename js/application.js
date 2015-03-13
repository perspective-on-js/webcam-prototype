;(function(){
    var workbench = document.getElementById('workbench');
    if (navigator && navigator.getUserMedia) {
	workbench.innerHTML = 'We are good to go';
    } else {
	workbench.innerHTML = 'Something is amiss';
    }
})()
