app.directive('upload', function () {

    return {
        restrict: 'E',
        templateUrl: './client/views/upload.directive.html',
        scope: {map:'='},
        controller: 'uploadCtrl'
    };

});