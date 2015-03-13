;(function(){
    if (!navigator.getUserMedia) {
        navigator.getUserMedia =
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia;
    }

    var workbench = document.getElementById('workbench');
    if (navigator && navigator.getUserMedia) {
        var video = document.createElement('video');
        video.setAttribute('width', 640);
        workbench.appendChild(video);
    } else {
        workbench.innerHTML = 'Something is amiss';
    }
})()
