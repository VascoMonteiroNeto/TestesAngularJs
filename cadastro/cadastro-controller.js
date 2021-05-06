
angular.module('meuApp').controller('CadastroController', CadastroController);
CadastroController.$inject =['$location', 'CursoService', '$routeParams'];

    function CadastroController($location, CursoService, $routeParams) {
        vm = this;
        vm.teste2 = "Cadastro"
        vm.cliente = {}
        vm.clienteId = undefined;

        if($routeParams.clienteId){
            vm.clienteId = $routeParams.clienteId
            buscarId(vm.clienteId)
        }

        vm.navegar = function(meuPath){
            $location.path(meuPath)
        }

        vm.cadastrar = function(){
            CursoService.exec_POST(vm.cliente).then(function(resposta){
                if(resposta){
                    vm.clientes = resposta
                }
                vm.navegar("/")
            })
        }
        
        function buscarId(id){
            CursoService.exec_GET_ID(id).then(function(resposta){
                if(resposta){
                    console.log(vm.clientes)
                    console.log(resposta)
                    vm.cliente = resposta
                    
                }
            })
        }

        vm.limpar = function(){
            vm.cliente = {}
        }
        
    }
    