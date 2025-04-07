var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

	let video = document.querySelector('video');

	video.setAttribute("autoplay", "false");
	video.setAttribute("loop", "false");
	
	if (video.getAttribute('autoplay') == 'false' && video.getAttribute('loop') == 'false') {
		console.log("Auto play is set to false");
		console.log("Loop is set to false");
	}
});

document.getElementById('play').addEventListener("click", function() {
	console.log('Play Video');
	let video = document.getElementById('player1');
	let volume = document.getElementById('volume');
	video.play();
	volume.textContent = (video.volume * 100) + '%';
});

document.getElementById('pause').addEventListener('click', function() {
	console.log('Pause Video');
	let video = document.getElementById('player1');
	video.pause();
});

document.getElementById('slower').addEventListener('click', function() {
	console.log('Slow Down Video');
	let video = document.getElementById('player1');
	video.playbackRate *= 0.9;
	console.log('Speed is', video.playbackRate);
});

document.getElementById('faster').addEventListener('click', function() {
	console.log('Speed Up Video');
	let video = document.getElementById('player1');
	video.playbackRate *= 1 / 0.9;
	console.log('Speed is', +video.playbackRate.toFixed(5));
});

document.getElementById('skip').addEventListener('click', function() {
	console.log('Skip ahead');
	let video = document.getElementById('player1');

	if (video.currentTime + 10 >= video.duration) {
        video.currentTime = 0;
    } else {
        video.currentTime += 10;
    }

    console.log("Current location:", video.currentTime.toFixed(6));
});


document.getElementById('mute').addEventListener('click', function() {
	let current_state = document.getElementById('mute').innerText;

	console.log(current_state);
	let video = document.getElementById('player1');

	if (current_state == 'Mute') {
		video.muted = true;
		document.getElementById('mute').innerHTML = 'Unmute';
	}
	else if (current_state == 'Unmute') {
		video.muted = false;
		document.getElementById('mute').innerHTML = 'Mute';
	}
});

document.getElementById('slider').addEventListener('input', function () {
    let video = document.getElementById('player1');
	console.log('The current value is', video.volume);

    let volume = document.getElementById('volume');
    let slider_val = this.value; 

    video.volume = slider_val / 100; 
    volume.textContent = slider_val + '%';

	console.log('The current value is', slider_val / 100 );
	console.log(volume);
});

document.getElementById('vintage').addEventListener('click', function () {
    let video = document.getElementById('player1');

    video.classList.add('oldSchool');  
});

document.getElementById('orig').addEventListener('click', function () {
    let video = document.getElementById('player1');

    video.classList.remove('oldSchool'); 
});
