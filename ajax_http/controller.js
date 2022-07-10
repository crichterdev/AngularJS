var app = angular.module("MyFirstApp",[]);
app.controller("FirstController",function($scope, $http){
$scope.posts = [];
$scope.newPosts = {};
$http.get("https://jsonplaceholder.typicode.com/posts")
.then(function(response){
    console.log("get", response.data);
    $scope.posts = response.data;
},function(err){
    
})

$scope.addPost = function(){
    $http.post("https://jsonplaceholder.typicode.com/posts",
    {
        title: $scope.newPost.title,
        body:$scope.newPost.body,
        userId:1                                                   
    })
    .then(function(response){
    $scope.posts.push(response.data);
    $scope.newPost = {};
    console.log(response);
    }, 
    function(error){console.log(error)})   
}
});