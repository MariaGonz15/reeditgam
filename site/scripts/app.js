console.log("#MariaGonzalez: Cargo app.js");
 var modulo1=
 angular.module("reeditgam", []);
modulo1.controller("mainCtrl",['$scope',
	function ($scope){
		$scope.test ="Hola Angular";

		//modelo

	$scope.posts = 
[{title: "Post 1", upvotes: 5},
{title: "Post 2", upvotes:15},
{title: "Post 3", upvotes:7},
{title: "Post 4", upvotes:9},
{title: "Post 5", upvotes:3},
{title: "Post 6", upvotes:5},
];

//metodo del controlador
$scope.addPost = function (){
if(!$scope.title || $scope.title === "")
{
alert ("No se permite postear titulos vacios")
return;

}

$scope.posts.push(
	{
		title:"Nuevo Post",
		upvotes: 0});
 //two-way data binding 	
  //sirve para borrar o limpiar formulario
$scope.title = "";
 }

//metodo que incrementa el voto

//De un post en una unidad
$scope.incrementUpvotes = function (post){
post.upvotes += 1;

};

}]);

