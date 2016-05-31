app.factory('fileUpload', ['$http', function ($http) {

    return {
                uploadFileToUrl: function(file, uploadUrl){
                    var fd = new FormData();
                    fd.append('file', file);
                    fd.append('f', 'pjson');
                    return  $http.post(uploadUrl, fd,{transformRequest: angular.identity,headers: {'Content-Type': undefined}});
                },

                updateControlPoints: function(params, updateUrl){
                    return  $http.get(updateUrl, {params: params});
                }
        };

}]);