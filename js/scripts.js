function Image (imgUrl, tags) {

	this.image = imgUrl;
	this.tags = tags;
	this.display = function(){

		var container = $("<div>")
		this.tags.forEach(function(tag){
			container.addClass(tag);
		})
		container.addClass("image");

		var imageString = "";
		imageString += this.image;

		container.html(imageString)
		$(".images").prepend(container);

				console.log (imageString);
	} 


}



var images = [
	new Image ('<img src ="pics/Dorothy.jpg">', ["Birds", "Abandonded", "Old","All"]),
	new Image ('<img src ="pics/Dorothy1.jpg">', ["House", "Old","Sky", "Clouds", "Abandonded","All"]),
	new Image ('<img src ="pics/Dorothy2.jpg">', ["Swing","Coulees", "Abandonded",  "All"]),
	new Image ('<img src ="pics/Granum2.jpg">', ["House", "Abandonded", "All", "Grass", "Wood"]),
	new Image ('<img src ="pics/Granum2.jpg">', ["House", "Abandonded", "All", "Grass", "Wood"]),
	new Image ('<img src ="pics/Granum3.jpg">', ["House", "Abandonded", "All", "Grass", "Wood"]),
	new Image ('<img src ="pics/Mtn2.jpg">', ["Landscape", "Mountains", "Clouds","Trees", "All"]),
	new Image ('<img src ="pics/Mtn3.jpg">', ["Landscape", "Mountains", "Clouds","Sky", "All"]),
	new Image ('<img src ="pics/Nordegg.jpg">', ["House", "Abandonded","Trees", "All"]),
	new Image ('<img src ="pics/Arc.jpg">', ["Architecture", "Building","Glass", "Windows", "Sky", "All"]),
	new Image ('<img src ="pics/Arc1.jpg">', ["Architecture", "Building","Glass", "Windows", "All"]),
	new Image ('<img src ="pics/Arc2.jpg">', ["Architecture", "Building","Glass", "Windows", "Clouds", "Sky", "All"]),
	new Image ('<img src ="pics/Chrch.jpg">', ["Architecture", "Building", "Sky", "All"]),
	new Image ('<img src ="pics/Chrch1.jpg">', ["Architecture", "Sky", "All"]),
	new Image ('<img src ="pics/Chrch2.jpg">', ["Architecture", "Building", "Glass", "Windows", "All"])

]

var tagList = []
images.forEach(function(image){
	image.display();
	image.tags.forEach(function(tag){
		if(!tagList.includes(tag)){
			tagList.push(tag);
			$(".buttons").prepend("<button class = 'filter'>" +tag+ "</button>")
		}
	})

})


$(".filter").on("click", function () {

	var tag = $(this).text();
	console.log(tag);
	$("." + tag).fadeIn();
	$(".image").not("."+tag).hide();

	$(".filter").removeClass("active");
	$(this).addClass("active");


})
