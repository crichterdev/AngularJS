var app = angular.module("MyFirstApp", [])

    .controller("FirstController", function ($scope) {
        $scope.nombre = "DOG";
        $scope.nuevoComentario = {};
        $scope.comentarios = [
            {
                comentario: "Buen tutorial",
                username: "codigofacilito"
            },
            {
                comentario: "Malísimo el tutorial",
                username: "otro_usuario"
            }
        ];
        $scope.agregarComentario = function () {
            $scope.comentarios.push($scope.nuevoComentario);
            $scope.nuevoComentario = {}
        }
        });