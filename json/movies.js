$(document).ready(function(){
	for(i = 0; i < movies.length; i++){
		$(".movie").append("<div><p>Name: "+movies[i].title+"</p><p>Price: "+movies[i].price+"</p><p>Length: "+movies[i].length+"</p><p>Star: "+movies.stars"</p></div>")
	}
})