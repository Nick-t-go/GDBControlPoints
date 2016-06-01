app.controller('uploadCtrl', function ($scope, Upload, $timeout, fileUpload) {


    
    $scope.uploadFile = function(){
        $scope.confirmationMessage = "";
        var file = $scope.myFile;
        var uploadUrl = "https://fs-gdb10:6443/arcgis/rest/services/nicktestservices/TXTtoFC/GPServer/uploads/upload";
        fileUpload.uploadFileToUrl(file, uploadUrl)
        .then(function(response){
            var params = {TXT_File:{itemID: response.data.item.itemID}, Job_Number: $scope.projNumber};
            var updateUrl = "https://fs-gdb10:6443/arcgis/rest/services/nicktestservices/TXTtoFC/GPServer/TextFileToFeatureClass/submitJob";
            fileUpload.updateControlPoints(params, updateUrl)
            .then(function(response){
                $scope.confirmationMessage = "Success";
            });
        });
    };
});
