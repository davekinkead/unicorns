'use strict';

function fartCtrl($scope) {
	
	$scope.fart = function(note) {
		console.log('farting');
		// bind argument to file here
		var audio = document.getElementById("test");
    audio.load();
		audio.play();
	}
}