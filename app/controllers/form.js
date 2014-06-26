// handle form updates and submission
angular.module( 'waitstaff' )
.controller( 'formController', function( $scope, $attrs, $rootScope ) {
	// intialise
	function init() {
		$scope.data = {};
	}
	// onready
	init();
	// onreset
	$scope.$on( 'reset', init );


	// handle submission
	$scope.calculateMealCharges = function() {
		var base, tax, subtotal;

		base = $scope.data.mealPrice;
		tax = Math.round( $scope.data.mealPrice * $scope.data.taxRate ) / 100;
		subtotal = base + tax;

		charge = {
			subtotal: subtotal,
			tip: Math.round( subtotal * $scope.data.tipPercentage ) / 100
		}

		$rootScope.$broadcast( 'charge', charge );
	};
});
