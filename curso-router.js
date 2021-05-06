angular.module('meuApp').config(function($routeProvider){
    $routeProvider.when('/Cadastro/:clienteId?', {
        templateUrl: 'cadastro/cadastro.html',
        controller: 'CadastroController as vm'
    })
    .otherwise({
        templateUrl: 'home/home.html',
        controller: 'HomeController as vm'
    })
})