
angular.module('meuApp').controller('HomeController', HomeController);
HomeController.$inject =['$location', 'CursoService'];

    function HomeController($location, CursoService) {
        vm = this;
        vm.teste = "Home teste"
        vm.clientes = ''

        vm.navegar = function(meuPath, id){
            $location.path(meuPath +'/'+ id)
        }

        vm.listarClientes = function(){
            CursoService.exec_GET().then(function(resposta){
                if(resposta){
                    vm.clientes = resposta
                }
            })
        }

        vm.excluir = function(id){
            CursoService.exec_DEL(id).then(function(resposta){
                if(resposta){
                    alert("Usuário ID: "+ id +" deletado!")
                }
            })
        }

        vm.editar = function(id){
            vm.navegar("Cadastro",id)
        }
    }