console.log("Today we're making an About Me Page!")
// Javascript story - 

//image is shown on page because the class has a "block" 
// you want to "hide" the image, then display the next image.

// Images need to loop like this
// 0 > 1
// 1 > 2
// 2 > 3
// 3 > 4
// 4 > 0

//animations for when an image enters and exits  slide - going to the next slide

//Do I need a function for the whole slideshow?



//querySelectorAll is going to grab all elements with the same class ".slide" - not using 'All' would only grab the 1st element with that class.
let $images = document.querySelectorAll('.slide');
console.log($images);

let $currentImage = 0 //this starts the slideshow at 0 (1st image)


function imageCounter(){
	
	let $oldImage = $currentImage 

	$currentImage++;
	console.log('this counter is going up by one' + $currentImage)

	if ($currentImage >= $images.length){// if the counter is greater than or equal the image length then....
		$currentImage = 0 // the image counter will start back at 0
	}


	if ($currentImage){
		$images[$currentImage].style.display = "block" // within my array of $images grab the current image and add these styles to it
	}

	if($oldImage){
		$images[$oldImage].style.display = "none" // within my array of $images grab the old image and add these styles to it
	}
}


//ORGANIZE ORGANIZE ORGANIZE!!!


//Now I have to create entrance and exit animations for each slide
// Entry animation for slide 0
//exit for slide 0
// Entry animation for slide 1
//exit for slide 1 ... and so on 

let tl = new TimeLineMax(); 

	//ENRTY SLIDE ANIMATIONS -- Plceholders while the animation trys to work

	if ($currentImage === 0){ //if the image is on the first slide then grab all of these elements...

		let animation = $images[$currentImage].querySelector('.animation');
		let $brain = document.querySelector('.brain1'); //this will grab the brain png in this div
		let $heart = document.querySelector('.heart1'); //this will grab the heart png in this div

		//now we create animations for each variabe or picture

		let tl_thinkjazz = NewTimeLineMax(); //these will all be animations for when my slide enters the show
			
		tl_thinkjazz
			.to($brain, 1 {rotation:50})
			.to($heart, 1 {opactity:0.3})
		}

		else if ($currentImage === 1){ //if the image is on the second slide then grab all of these elements...

		let animation = $images[$currentImage].querySelector('.animation');
		let $game = document.querySelector('.game1'); //this will grab the game png in this div
		let $book = document.querySelector('.book1'); //this will grab the book png in this div

		//now we create animations for each variabe or picture

		let tl_runjazz = NewTimeLineMax(); //these will all be animations for when my slide enters the show
		tl_runjazz
			.to($game, 1 {rotation:50})
			.to($book, 1 {opactity:0.3})
		}

		else if ($currentImage === 2){ //if the image is on the third slide then grab all of these elements...

		let animation = $images[$currentImage].querySelector('.animation');
		let $light = document.querySelector('.light1'); //this will grab the light png in this div
		let $magnify = document.querySelector('.magnify1'); //this will grab the magnify png in this div

		//now we create animations for each variabe or picture

		let tl_lovejazz = NewTimeLineMax(); //these will all be animations for when my slide enters the show
		tl_lovejazz
			.to($light, 1 {rotation:50})
			.to($magnify, 1 {opactity:0.3})
		}

		else if ($currentImage === 3){ //if the image is on the fourth slide then grab all of these elements...

		let animation = $images[$currentImage].querySelector('.animation');
		let $brain2 = document.querySelector('.brain2'); //this will grab the brain png in this div
		let $heart2 = document.querySelector('.heart2'); //this will grab the heart png in this div

		//now we create animations for each variabe or picture

		let tl_thinkjazz = NewTimeLineMax(); //these will all be animations for when my slide enters the show
			.to($brain2, 1 {rotation:50})
			.to($heart2, 1 {opactity:0.3})

		}
	


		//EXIT SLIDE ANIMATIONS

		// let $oldImage = $currentImage?

		if ($oldImage === 0){ //if the image is on the first slide then grab all of these elements...

		let animation = $images[$currentImage].querySelector('.animation');
		let $brain = document.querySelector('.brain1'); //this will grab the brain png in this div
		let $heart = document.querySelector('.heart1'); //this will grab the heart png in this div

		//now we create animations for each variabe or picture

		let tl_thinkjazz = NewTimeLineMax(); //these will all be animations for when my slide enters the show
			
		tl_thinkjazz
			.fromTo($brain, 1 {rotation:50}, {rotation:0})
			.fromTo($heart, 1 {opactity:0} {opactity:1})
		}

		else if ($oldImage === 1){ //if the image is on the second slide then grab all of these elements...

		let animation = $images[$currentImage].querySelector('.animation');
		let $game = document.querySelector('.game1'); //this will grab the game png in this div
		let $book = document.querySelector('.book1'); //this will grab the book png in this div

		//now we create animations for each variabe or picture

		let tl_runjazz = NewTimeLineMax(); //these will all be animations for when my slide enters the show
		tl_runjazz
			.fromTo($game, 1 {rotation:50}, {rotation:0})
			.fromTo($book, 1 {opactity:0} {opactity:1})
		}

		else if ($oldImage === 2){ //if the image is on the third slide then grab all of these elements...

		let animation = $images[$currentImage].querySelector('.animation');
		let $light = document.querySelector('.light1'); //this will grab the light png in this div
		let $magnify = document.querySelector('.magnify1'); //this will grab the magnify png in this div

		//now we create animations for each variabe or picture

		let tl_lovejazz = NewTimeLineMax(); //these will all be animations for when my slide enters the show
		tl_lovejazz
			.fromTo($light, 1 {rotation:50}, {rotation:0})
			.fromTo($magnify, 2 {opactity:0} {opactity:1})
		}

		else if ($oldImage === 3){ //if the image is on the fourth slide then grab all of these elements...

		let animation = $images[$currentImage].querySelector('.animation');
		let $brain2 = document.querySelector('.brain2'); //this will grab the brain png in this div
		let $heart2 = document.querySelector('.heart2'); //this will grab the heart png in this div

		//now we create animations for each variabe or picture

		let tl_thinkjazz = NewTimeLineMax(); //these will all be animations for when my slide enters the show
			.fromTo($brain2, 1 {rotation:50}, {rotation:0})
			.fromTo($heart2, 2 {opactity:0} ,{opactity:1})

		}



imageCounter();
setInterval(imageCounter, 3000);

console.log($currentImage);


//Create a slideshow out of Jasmin Images then add animation on a timeline with each image
// depending on the 

// Possible way to do it! #1
// let imageChange = function (){

// 	//jasmin photos in an array
// 	let $jasminPhotos = [
// 	"/dist/img/thinkjazz.png",
// 	"url(/dist/img/lovejazz.png",
// 	"url(/dist/img/runjazz.png",
// 	"url(/dist/img/jazzhands.png",
// 	"url(/dist/img/handsup.png",
// 	]

// 	let jasminImages = document.querySelector('.slideshowside');

// 	let counter = 0;

// 	// generate jasmin images
// 	let generateJasmin = function (){

// 		let oldJasmin = document.querySelector(".slideshowside img");

// 		if (oldJasmin){
// 			jasminImages.removeChild(oldJasmin)
// 		}
// 		else{
// 			console.log ("there is not slide here")
// 		}
// 	}

// 	// create my images - if there weren't any images in my html.
// 	let createImage = document.createElement('img');

// 	jasminImages.appendChild(createImage);

// 	createImage.setAttribute('src', $jasminPhotos[counter] );

// 	counter ++; //up by one

// }

// generateJasmin();
// 