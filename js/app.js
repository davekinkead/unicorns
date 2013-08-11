'use strict';

function fartCtrl($scope) {
	
	$scope.fart = function(note) {
		console.log('farting ' + note);
		// bind argument to file here
		var rand = Math.floor(Math.random()*3)+1;
		var audio = document.getElementById("fart"+rand);
    audio.load();
		audio.play();
	}
}