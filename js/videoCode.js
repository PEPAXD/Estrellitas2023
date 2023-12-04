document.getElementById('mute-button').addEventListener('click', function() {
    var video = document.querySelector('.background-clip');
    video.muted = !video.muted;
});
document.getElementById('mute-button').addEventListener('change', function() {
    var status = document.getElementById('status');
    if(this.checked) {
        status.textContent = 'On';
    } else {
        status.textContent = 'Off';
    }
});