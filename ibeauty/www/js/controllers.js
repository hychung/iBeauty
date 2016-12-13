angular.module('app.controllers', [])
  
.controller('shopCtrl', ['$scope', '$stateParams', 'StoreItems', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, StoreItems) {

	$scope.items = StoreItems.getClothesItems();

	$scope.catC = function(){
		$scope.items = StoreItems.getClothesItems();
	}

	$scope.catA = function(){
		$scope.items = StoreItems.getAccessaryItems();
	}

}])
   
.controller('myCartCtrl', ['$scope', '$stateParams', 'StoreItems', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, StoreItems, $state) {

	$scope.$on("$ionicView.beforeEnter", function() {

        $scope.items = StoreItems.getSelected();

        $scope.total = StoreItems.getTotalPrice();

    });

    $scope.logout = function() {

        StoreItems.clearSelected();
        
        $state.go('login');
    }

}])
   
.controller('locationCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	var latLng = new google.maps.LatLng(22.337827, 114.181962);
 
var mapOptions = {
  center: latLng,
  zoom: 17,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};


 
$scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

google.maps.event.addListenerOnce($scope.map, 'idle', function(){

    latLng = new google.maps.LatLng(22.337827, 114.181962);
 
  var marker = new google.maps.Marker({
      map: $scope.map,
      animation: google.maps.Animation.DROP,
      position: latLng
  });      
 
  var infoWindow = new google.maps.InfoWindow({
      content: "AC Hall"
  });
 
  google.maps.event.addListener(marker, 'click', function () {
      infoWindow.open($scope.map, marker);
  });
 
});


}])
   
.controller('contactUsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
      
.controller('sliderCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('loginCtrl', ['$scope', '$stateParams','$ionicPopup', '$state',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicPopup, $state) {

    $scope.data = {};
    
    $scope.login = function() {        
        
                if (($scope.data.username==='admin')||($scope.data.username === 'customer1')){ 
                	if($scope.data.password === '123'){
                //if (($scope.data.username === LoginUser.username) && ($scope.data.password === LoginUser.password)){
                		$state.go('tabsController.shop');
                	}else{
        				$ionicPopup.alert({
                            title: data,   		
                		});
        			}

                }
                else {
        
                    $ionicPopup.alert({
                       title: data, 
                    });
                }
            
        }
     }
])
   
.controller('signupCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('settingCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

	$scope.user = {};

}])
   
.controller('itemDetailCtrl', ['$scope', '$stateParams', 'StoreItems', '$ionicHistory', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, StoreItems, $ionicHistory) {

	var results = StoreItems.getItem($stateParams.id);

    $scope.item = results;

    $scope.add = function() {

        StoreItems.shopItem($stateParams.id, $scope.item.quantity);

        $ionicHistory.goBack()

    }

    $scope.delete = function() {

        StoreItems.removeItem($stateParams.id);
    }


}])
   
.controller('aboutUsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('termsOfServiceCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('privacyPolicyCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 