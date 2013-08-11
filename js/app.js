use 'strict';

function fartCtrl($scope) {
	
	var $scope.fart = function(note) {
		// bind argument to file here
		var audio = note;
		audio.play();
	}
}