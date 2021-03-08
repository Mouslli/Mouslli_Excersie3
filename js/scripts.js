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

