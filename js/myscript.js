$(document).ready(function(){
	for(i=1; i < 2; i++){
		load()
	}
	function load() {
		for(i = 0; i < movies.length; i++){
		$(".row").append("<div class='col-lg-6'><div class='movieblock'><img src='"+movies[i].img+"'><div class='text'<p><h1>"+movies[i].title+"</h1></p><p>Price: "+movies[i].price+" USD</p><p>Length: "+movies[i].length+" min</p><p>Starring: "+movies[i].stars+"</p></div><div class='rigth'><button class='btn' name='"+i+"'>Like<i class='fa fa-thumbs-up'></i></button><div class='faszombat"+i+"' id='elemer'>"+movies[i].like+"</div></div></div></div>")
	};
	}
	

$(".btn").on("click", function() {
		like(this.name);
	});

	function like(x){
		movies[x].like++;
		$(".faszombat"+x).text(movies[x].like);
		console.log(movies)
		return
	}
$(".arrow-down").on("click", function(){
	sort(movies)
})

function swap(x, y){
    var temp = movies[y];
    movies[y] = movies[x];
    movies[x] = temp;
};


function sort(movies){
	var f = movies.length;
	for(j=0; j<f; j++){
		for (i=0; i < (f-1); i++){
    	if(movies[i].like < movies[i+1].like){
    		swap(i, i+1);
    		
    	}
    }
	}

	

	$(".col-lg-6").remove();
	console.log(movies)
	load()
}

	/*function sort() {
		for(j=0; j < movies.length; j++){
			if(movies[j].like > movies[j+1].like){
				break
			}else{
				var c = movies[j];
				var d = movies[j+1];

			}
		}
	}*/
})