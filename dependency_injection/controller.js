var app = angular.module("MyFirstApp", [])

    .controller("FirstController", ["$scope" ,function (s) {
        s.nombre = "DOG";
        s.nuevoComentario = {};
        s.comentarios = [
            {
                comentario: "Buen tutorial",
                username: "codigofacilito"
            },
            {
                comentario: "Malísimo el tutorial",
                username: "otro_usuario"
            }
        ];
        s.agregarComentario = function () {
            s.comentarios.push(s.nuevoComentario);
            s.nuevoComentario = {}
        }
        }]);