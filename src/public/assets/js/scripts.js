$(document).ready(function() {
    $('#phone').on('click', function() {
        var sound = new Howl({urls: ['assets/audio/jingle.mp3']}).play();
    });
});
