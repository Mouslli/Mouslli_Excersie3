function Image (imgUrl, tags, color) {

	this.image = imgUrl;
	this.tags = tags;
	this.color=color;
	this.display = function(){

		var container = $("<div>")
		this.tags.forEach(function(tag){
			container.addClass(tag);
		})
		container.css("background", this.color)
		container.addClass("image");

		var imageString = "";
		imageString += this.imgUrl;

		container.html(imageString)
		$(".images").prepend(container);

	} 


}

var images = [
	new Image ('<img src ="../../pics/Dorothy2.jpg"', ["house", "abandonded", "All"], "#0a3410"),
	new Image ('<img src = "../../pics/Nordegg.jpg"', ["Shack", "Concrete","abandonded","All"], "#EA4335")
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

