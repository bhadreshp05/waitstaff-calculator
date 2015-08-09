wsApp.controller('wsCtrl', function($rootScope, $scope){

	function init () {
		$scope.data = {
			charge: {
				subTotal: 0,
				tipInDollars: 0,
				total: 0
			},
			earnings: {
				tipTotal: 0,
				mealCount: 0,
				avgTip: 0
			}
		}
	}

	init(); // Initial Values

	$scope.submit = function() {
		console.log('Form Submitted');
    if($scope.detailsForm.$valid) {
    	// Calculate Charges
    	$scope.data.charge.subTotal = $scope.data.price + $scope.data.price * $scope.data.tax /	100;
    	$scope.data.charge.tipInDollars = $scope.data.charge.subTotal * $scope.data.tip / 100;
    	$scope.data.charge.total = $scope.data.charge.subTotal + $scope.data.charge.tipInDollars;

    	// Calculate Earnings
    	$scope.data.earnings.tipTotal+= $scope.data.charge.tipInDollars;
    	$scope.data.earnings.mealCount++;
    	$scope.data.earnings.avgTip = $scope.data.earnings.tipTotal / $scope.data.earnings.mealCount;
    }
	}	

	// Reset Entire Application
	$scope.reset = function() {
		console.log('Form Reset');
		init();
	}
});