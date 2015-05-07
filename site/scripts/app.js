console.log("#MariaGonzalez: Cargo app.js");
 var modulo1=
 angular.module("reeditgam", []);
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

 //creando controlador//

modulo1.controller("mainCtrl",[
	'$scope','posts',//inyectando factory post
	function ($scope, posts){
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
		upvotes: 0});
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

