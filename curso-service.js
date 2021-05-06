angular.module("meuApp").factory("CursoService", CursoService);
CursoService.$inject = ['$http']
    function CursoService($http){
        var service = {
            exec_GET: function(){
                return $http.get("http://localhost:3000/clientes").then(tratarResposta, tratarErro);
            },
            exec_POST: function(cliente){
                return $http.post("http://localhost:3000/clientes", cliente).then(tratarResposta, tratarErro);
            },
            exec_DEL: function(id){
                return $http.delete("http://localhost:3000/clientes/"+id).then(tratarResposta, tratarErro);
            },
            exec_GET_ID: function(id){
                return $http.get("http://localhost:3000/clientes/"+id).then(tratarResposta, tratarErro);
            }
        }

        function tratarResposta(response){
            return response.data;
        }

        function tratarErro(error){
            return error.data;
        }

        return service;
    }