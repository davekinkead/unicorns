'use strict';

function fartCtrl($scope) {
	
	$scope.fart = function(note) {
		console.log('farting');
		// bind argument to file here
		var audio = 'audio/test.ogg';
		audio.play();
	}
}