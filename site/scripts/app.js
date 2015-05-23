console.log("#MariaGonzalez: Cargo app.js");

 //inyectando el modulo de ui-router
 //como parametro del arreglo de objetos 

 //del modulo
 var modulo1=
 angular.module("reeditgam", ['ui.router','hSweetAlert']);
//configurando las rutas
//recibe un arreglo de elementos
modulo1.config(
	['$stateProvider', 
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider){
		//inciando rutina de configuracion
		$stateProvider.state('home', {
			//definiendo estado como un objeto 
			url:"/home", //url que define el estado 
			templateUrl:"/home.html",//platilla base para el estado
			controller: 'mainCtrl' 
					});

//creando ruta +de visualizacion 
// de post
$stateProvider.state('posts',{
	url:"/posts/{id}",
	templateUrl:"/posts.html",
	controller:"postsCtrl"
});


		//url por defecto 
		$urlRouterProvider.otherwise('home');
	}]);


 //creando un servicio del tipo factory
 modulo1.factory('posts',[function(){
 	//cuerpo del factory llamado post
 	var o = {
 		posts : [
 		{
 	    title: "Post 1", upvotes: 15,
 		comments: [
 		{author: "Karina", body:"Esto esta de pelos", upvotes:3},
 		{author: "Gamaliel",body:"Esto es basura" , upvotes:0}]
 	},
 	{
 	    title: "Post 2", upvotes: 4,
 		comments: [
 		{author: "Coco", body:"Esta asombroso", upvotes:5},
 		{author: "Cristian",body:"Esto esta aburrido" , upvotes:1}]
 	}
 		]
 	};
 	//retornando objeto de datos persistentes
return o;
 }]);

 //creando controlador
 //dependency 

modulo1.controller("mainCtrl",[
	'$scope','posts','sweet',//inyectando factory post
	function ($scope, posts, sweet){
		$scope.test ="Hola Angular";

		//modelo al cual se le asigna 
		//el resultado del factory

	$scope.posts = posts.posts;

//metodo del controlador
$scope.addPost = function (){
if(!$scope.title || $scope.title === "")
{
alert ("No se permite postear titulos vacios")
return;

}

$scope.posts.push(
	{
		title:$scope.title,
link: $scope.link,
		upvotes: 0,
		comments : [{
			author : "Gustavo",
			body : "Me gusta ese link.",
			upvotes : 0},
			 {
            author : "Keila",
			body : "Awesome link.",
			upvotes : 2 }]
	});


 //two-way data binding 	
  //sirve para borrar o limpiar formulario
$scope.title = "";
$scope.link = "";
 };

//metodo que incrementa el voto

//De un post en una unidad
$scope.incrementUpvotes = function (post){
post.upvotes += 1;

};

}]);

//creando el controlador postsCtrl
modulo1.controller("postsCtrl",['$scope', 
	'$stateParams',
	'posts',
	function($scope, $stateParams, posts)
	{
		$scope.incrementUpvotes = function (comment){
			comment.upvotes += 1;

		};
//cuerpo del controlador
//obteniendo el parametro id de los 
//parametros del estado de la ruta
//y pasandolo como argumentos 
// al objeto del factory 
$scope.post = posts.posts[$stateParams.id];

	}]);





