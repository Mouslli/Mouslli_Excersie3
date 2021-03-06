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
		imageString += "<img>" + this.imgUrl;

		container.html(imageString)
		$(".images").prepend(container);

	} 


}

var images = [
	new Image ('<img src = "pics/Dorothy3">', ["house", "abandonded", "All"]),
	new Image ('src = "pics/Nordegg2"', ["Shack", "Concrete","abandonded","All"])
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

