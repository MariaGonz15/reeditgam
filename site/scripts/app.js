console.log("#MariaGonzalez: Cargo app.js");
 var modulo1=
 angular.module("reeditgam", []);
modulo1.controller("mainCtrl",['$scope',
	function ($scope){
		$scope.test ="Hola Angular";

		//modelo

	$scope.posts = 
	
	["Post 1 Hola",
		 "Post 2",
		 "Post 3",
		 "Post 4",
		 "Post 5",
		 "Post 6"];
[{title: "Post 1", upvotes: 5},
{title: "Post 2", upvotes:15},
{title: "Post 3", upvotes:7},
{title: "Post 4", upvotes:9},
{title: "Post 5", upvotes:3},
{title: "Post 6", upvotes:5},
]

 	}]); 

//metodo del controlador
$scope.addPost = function (){
$scope.posts.push({title:"Nuevo Post",upvotes: 0});
 };

}]);