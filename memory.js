//HOW DO I USE JQUERY WITHOUT THE INTERNET?
//SHOULD I WORRY ABOUT CLICK PROPAGATION!

//var coverImageTheme1 = "";  //an img src="" of the (backside of the cards/objects)
//var coverImageTheme2 = "";
//var coverImageTheme3 = "";

//var theme1 = [img1,img2,img3,img4,img5,img6];  
//var theme2 = [];  [OPTIONALITY VARIABLES]          
//var theme3 = [];  [OPTIONALITY VARIABLES]        
                    //Each will hold all possible images for their respective theme except the coverImage.
                    //Higher difficulties will retrieve more of these.
                    //The array of images is called Theme1 in anticipation of other themes.
                    


//var subset;  //num             //[Optionality Variable].  Allow user to choose
                               //the number of cards to play with.  Analogous to difficulty

//var imageSubset = [0,1,2,3,4,5];   //The subset of images chosen from "allImages"

//var duplicate = function(){};  //This function will duplicate the images from "imageSubset"
                                 //so as to have pairs of images
//var duplicatedImages = duplicate();

var coverImage = "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/NFL.png";

// var images = [0,1,2,3,4,5,6,7,0,1,2,3,4,5,6,7];
// this images variable needs to track both the path to a given card image AND 
//either a class or id you can use to reload the iamge after you flip it and hide it

// var images = [{imgUrl: "path_to_img", class: "pair-1"}]


var images = ["http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Bills.png",
              "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/49ers.png",
              "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Bears.png",
              "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Browns.png",
              "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Cardinals.png",
              "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Chiefs.png",
              "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Cowboys.png",
              "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Eagles.png",
              "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Jaguars.png",
              "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Lions.png",
              "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Panthers.png",
              "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Raiders.png",
              "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Ravens.png",
              "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Saints.png",
              "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Steelers.png",
              "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Titans.png"];  //this repeats but in later installments theyll be singles
                                                 //and be duplicated by the duplicate function
var imagesLength = images.length;
//var dupImgsLength = duplicatedImages.length;   //Merely records the original length of "imagesSubset" in 
                                                 //a variable for use in a for loop.


                                             //This will be the shuffled images array and will be
                                             //populated via the "shuffle()" function below.
var shuffledImages = new Array(images.length-1);//It assumes an undesirable form as an array of arrays.
                                             //The "shuffle()" function will repurpose it into an
                                             //array of strings.

var shuffle = function() {         //This function shuffles the "shuffledImages" array,
                                   //or the "duplicatedImages" array in further updates 
                                   //of the game.

	for (var i = 0; i <= (imagesLength - 1) ; i++) {
		shuffledImages[i] = images.splice(Math.floor(Math.random()*(images.length)),1);
    
	}                                     //In a later installment, "images" will be replaced with
                                        //"duplicated images".
	var gameImages = new Array(shuffledImages.length);

	for (var i = 0; i <= imagesLength - 1; i++) {
		gameImages[i] = shuffledImages[i][0];
	}

  shuffledImages = gameImages;
	return shuffledImages;
}
var shuffledImages = shuffle();

//Now create the (div's? maybe span's? or NO CONTAINERS AT ALL/MERELY APPEND THEM TO THE BODY?) for the
//images and assign
//to the div/spans/(JUST THE IMAGES) containing the images a position class and append them to the body.
//I think they should float left and
//perhaps even be given an absolute position at this point so that they don'tget pushed around, if that's
//a problem anyway.
for (var i = 0; i <= shuffledImages.length - 1; i++) {           //dupImgsLength in the expanded version of the program
  $("div.game-container").append($("<img>"));
  $("img").last().addClass("position-" + i);        //OMG! FINALLY thx .last()
  $("img").last().attr("src", shuffledImages[i]);
                                //HOW DO I GET THE BACKGROUND IMAGE TO LAY DIRECTLY ON TOP OF THESE IMG'S 
  // $("img").hide()
  $("img").addClass("upsideDown");               //Every iteration through the loop, is only the current
  // $("img").css("?display?", "float");            //img updated?
  
}

// $("img").css("position","absolute");  //I left this outside the above loop because otherwise they
                                         //would not float into orderly rows

                                         // I also need to make sure that simply stating
                                         //.css("position", "absolute"); actually freezes the

                                         //All this ("position", "absolute") business may not even be necessary
                                         //if the background images react to window dimensions in the same way

for (var i = 0; i <= shuffledImages.length - 1; i++) {
  //This lower end of the for loop appends the background/cover image to the page at the same positions as the
  //it's respective value side.
  $(".game-container").append($("<img>").attr("src", coverImage));
  $("img").last().addClass("rightsideUp");
  $("img.rightsideUp").last().addClass("position-" + i);
  // $("img.rightSideUp").attr("src", coverImage);           //////CAN I IDENTIFY VIA SOURCE
  //$("img").css({position of its value counterpart});       //I split these two loops because if I didn't
  //$("img").addClass("rightsideUp");                        //then I would have to position these background/
                                                             //cover objects on an absolute position value card
                                                            
   

}
//NOTE:  I didn't need .last() for the attribute line above because all attr are = anyway



var exposedArray = [];              //ex. [position-1, position-6]

$("img").click(function() {               //If an action should only happen given some other conditions
                                          //Then you should check that those conditions aren't met 
                                          //before you allow the user to continue interacting


                                
  if ($(this).hasClass("discovered")) {  //I think this relieves me of having to find a way to
                                         //to make the discovered object unclickable.  I am
                                         //thinking this will just stop the click event short of
                                         //doing anything at all, thereby having the effect of
                                         //the object unclickable.
    return
  };         


debugger

  imgSrc = $(this).attr('src')  //this will be equal to the url of the image of the clicked box.
  exposedArray.push(imgSrc); // THE CLASS I HAVE IN MIND HERE IS class="position-i"
                                            //ex. [position-1, position-6, postion-4]


  if (exposedArray.length === 3) {
    $(exposedArray[0]).toggleClass("upsideDown");     //   //exposedArray[0].toggleClass("upsideDown");//   //   
    $(exposedArray[1]).toggleClass("upsideDown");     //   //exposedArray[1].toggleClass("upsideDown");//   //   
                                    //cool animations here
    exposedArray = [];

    // classOfFirstCard = $(exposedArray[0]).attr("class");  //I don't remember why I had these,
    // classOfSecondCard = $(exposedArray[1]).attr("class"); //they don't seem necessary.  Oh, I think
                                                          //they were replaced by the two lines just 
                                                          //above.  Those two do the job I wanted.

                                                          // NICK$(".card").hasClass("pair-1") === true
    return
  }

  // debugger           
  if (exposedArray[0] == exposedArray[1]){
    console.log('success')
  }else{
    console.log('bummer')
  }

  positionClass = $(this).attr("class")       //THINK THIS SHOULD BE ... = $(THIS).ATTR("CLASS")[0]
                                              //SINCE BOTH OF THE IMAGES IN POSITION 1(i, really)
                                              //WILL HAVE MULTIPLE CLASSES AND I THINK I SHOULD 
                                              //CALL ON [0] BECAUSE I THINK IT WILL ALWAYS REMAIN
                                              //THE FIRST SPECIFIED CLASS IN THE ARRAY RETURNED BY
                                              //.attr("class").

  $(positionClass).toggleClass("upsideDown"); //shouldn't this be $(this).toggleClass("upsideDown")
                                          //NO!!!! because you need to change the class of both
  //cool animations here                  //cards in this position. One needs to become exposed
                                          //and the other needs to become covered.


   if (exposedArray[0] === exposedArray[1]) {   //I THINK THIS SHOULD BE CHECKING IF IMG SRC'S ARE EQUAL 
                                                // and therefore, i think should be as below...

   //if ($("exposedArray[0]").attr("src") === $("exposedArray[1]").attr("src")) {} 
                        //.upsideDown                        //.upsideDown


//Theres a problem with the fix(just above) to the conditional above that. The computer will think I'm
//referring to the background/covering/topside image and therefore will always confirm
//a mathcing pair.  I must find a way to refer to the (underside) image.
//A possible yet undesired fix is to add a "rightsideUp" class, this time to the background/covering/topside
//image, then toggling both the "rightsideUp" and "upsideDown" classes for both cards in the position. This
//addition would happen in the code underneath the line saying...
//$(positionClass).toggleClass("upsideDown");  The redone code would read...
//$(exposedArray[0]).toggleClass("upsideDown");
//$(exposedArray[1]).toggleClass("upsideDown");
//$(exposedArray[0]).toggleClass("rightsideUp");
//$(exposedArray[1]).toggleClass("rightsideUp");
//
//And then the conditional above should read as follows...

//if (   $(".rightsideUp.exposedArray[0]").attr("src") === $(".rightsideUp.exposedArray[1]").attr("src")  ) {}



    $(exposedArray).addClass("discovered");  //   //$(this).exposedArray[0] = "discovered";//   //
    $(exposedArray).addClass("discovered");  //   //$(this).exposedArray[1] = "discovered";//   //   

    


    return exposedArray = [];
    
  };


  

  // exposedArray.push($(this).attr("class")[0]);  //Referring to position class here! REDUNDANT & INCORRECT !?

                                           //I think this is right BUT WILL AFFECT "exposedArray"'s use
                                 //above (.i.e) might need to be defined as the object rather
                                 //than the CLASS of the object.

  //$("1").css("transform","rotateY(90deg"));
  console.log(exposedArray)
})


// var setUpGame = function() {
//   // initializes game
//   // sets up initial pair locations
//   // prompts user to start
// }

// var playGame = function() {
//   // track # of clicks
//   // store cards in array
//   // *invoke testPair to test for a match*
// }

// var checkWinner = function()  {
//   // check for # of pairs
// }

// var testPair = function() {
//   //tests class of two clicked cards to compare for a boolean
// }


