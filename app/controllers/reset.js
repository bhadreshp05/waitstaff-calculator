angular.module( 'waitstaff' )
.controller( 'resetController', function( $scope, $attrs, $rootScope ) {

	// handle submission
	$scope.reset = function() {
		$rootScope.$broadcast( 'reset' );
	};
});
