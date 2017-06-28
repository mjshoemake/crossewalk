// Main Service
angular.module('app').service('appService', function() {

    // Example: bootstrapAlert('info', '<message>')
    // Example: bootstrapAlert('error', '<message>')
    // Example: bootstrapAlert('success', '<message>')
    this.mainAlert = function (type, message) {
        $('#alertHome').html('<div class="alert alert-' + type + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + message + '</div>')
    }

    this.loginAlert = function (type, message) {
        $('#loginAlert').html('<div class="alert alert-' + type + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + message + '</div>')
    }

    this.bootstrapAlert = function (type, message, timeout) {
        $('#alertHome').html('<div class="alert alert-' + type + '">' + message + '</div>')
        if (timeout || timeout === 0) {
            setTimeout(function() {
                $('#alertHome').alert('close');
            }, timeout);
        }
    }

    this.hideAlert = function() {
        var alert = $(".alert");
        if (alert != null) {
            alert.remove();
        }
    }

});

// Main App Controllers
angular.module('app').controller('AppController', function ($scope, $rootScope, $route, $location, appService) {
	$scope.$route = $route;
    $rootScope.headerDisplay = "display: blocked;";
    //$rootScope.bodyClass = "login";
    $rootScope.lastPage = '/downloads';

    $scope.showLogin = function() {
        $rootScope.headerDisplay = "display: none;";
        $rootScope.bodyClass = "login";
        $scope.password = '';
        $location.path('/login');
    }

    $scope.logout = function () {
        loginService.logout();
        $scope.showLogin();
        appService.setStatusBarText("You were logged out successfully.");
        appService.hideAlert();
        appService.mainAlert("success", "You were logged out successfully.  Login again to continue working.");
    };

    $scope.setup = function () {
        loginService.logout();
        $scope.showLogin();
    };

    $rootScope.goto = function (path) {
        appService.hideAlert();
        $rootScope.lastPage = path;
        
        // Close the hamburger menu when changing pages.
        $("#bs-example-navbar-collapse-1").attr('class', 'navbar-collapse collapse');
        
        //if (loginService.sessionExpired()) {
        //    appService.bootstrapAlert('info', 'Your session has timed out. Please login again.');
        //    $scope.showLogin();
        //} else {
        //    $rootScope.headerDisplay = "display: blocked;";
        //    $rootScope.bodyClass = "main";
            $location.path(path);
        //}
	};

    $rootScope.gotoLast = function() {
        //$rootScope.headerDisplay = "display: blocked;";
        //$rootScope.bodyClass = "main";
        //$('#alertHome').alert('close');
        $location.path($rootScope.lastPage);
    };

    //$scope.setup();

});
