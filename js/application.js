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
        navigator.getUserMedia({audio: true, video: true}, function(stream) {
            video.src = window.URL.createObjectURL(stream);
        }, function(error) {
            workbench.innerHTML = 'Did not get video';
            console.log(e);
        });
    } else {
        workbench.innerHTML = 'Something is amiss';
    }
})()
