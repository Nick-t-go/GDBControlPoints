app.controller('uploadCtrl', function ($scope, Upload, $timeout) {
    $scope.uploadPic = function(file) {
        file.upload = Upload.upload({
          url: 'https://fs-gdb10:6443/arcgis/rest/services/nicktestservices/TXTtoFC/GPServer/TextFileToFeatureClass/submitJob',
          data: {Job_Number: $scope.projNumber, TXT_File: file},
        });



        file.upload.then(function (response) {
          $timeout(function () {
            file.result = response.data;
            console.log(file);
          });
        }, function (response) {
          if (response.status > 0)
            $scope.errorMsg = response.status + ': ' + response.data;
        }, function (evt) {
          // Math.min is to fix IE which reports 200% sometimes
          file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
        });
    };
});
