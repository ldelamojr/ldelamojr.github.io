//"http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Bills.png",
//                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/49ers.png",
//                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Bears.png",
//                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Browns.png",
//                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Cardinals.png",
//                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Chiefs.png",
//                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Cowboys.png",
//                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Eagles.png",
//                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Bengals.png",
//                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Jaguars.png",
//                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Lions.png",
//                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Panthers.png",
//                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Raiders.png",
//                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Ravens.png",
//                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Saints.png",
//                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Steelers.png",
//                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Titans.png",
//                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Broncos.png",
//                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Buccaneers.png",
//                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Chargers.png",
//                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Colts.png",
//                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Dolphins.png",
//                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Falcons.png",
//                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Jets.png",
//                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Packers.png",
//                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Patriots.png",
//                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Rams.png",
//                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Redskins.png",
//                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Seahawks.png",
//                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Texans.png",
//                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Vikings.png"
//1.)MUST ACCOUNT FOR THE USER CLICKING THE SAME CARD TWICE IN A ROW AND THE 
//COMPUTER REGISTERING THAT AS A MATCH

//2.) I'M CURIOUS IF SOME OF THE FAST CLICK HACKING ALLOWED IS DUE TO THE "DOUBLE CLICKING HACK"

//3.) NEED TO CHECK IF "exposedClassArray" FIXED THE "DOUBLE CLICKING HACK"

//4.) I DON'T THINK THIS CODE SCALES TO ACCOMODATE REPEATED IMAGES (I.E 4 OF THE SAME)
//    I THINK A PROBLEM WILL ARISE AT THE "PREVENT THREE FUNCTION" SINCE IMG SRC'S AND
//    CLASS POSITIONS ARE NOT IN ONE TO ONE CORRESPONDENCE(MAYBE)

//5.) I want to add conditions to the game so that If a player has two unmatched cards
//    then when they click on a third hidden card, then the previous two flip over
//    and the currently flipped card REVEALS itself.

//6.) Looks like as the number of cards played with is doubled, the time it takes to complete
//    the game triples. Rough estimate based on a few trials.

//7.) Add a "you win" message.

var nflBackgroundImage = "http://wallpapercave.com/wp/32xzfWZ.jpg";

var nflCoverImage = "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/NFL.png";  //an img src="" of the "cover image" 

var nflRevealImages = ["http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Bills.png",
                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/49ers.png",
                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Bears.png",
                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Browns.png",
                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Cardinals.png",
                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Chiefs.png",
                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Cowboys.png",
                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Eagles.png",
                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Bengals.png",
                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Jaguars.png",
                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Bills.png",
                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/49ers.png",
                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Bears.png",
                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Browns.png",
                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Cardinals.png",
                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Chiefs.png",
                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Cowboys.png",
                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Eagles.png",
                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Bengals.png",
                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Jaguars.png"];


//var kitchenBackgroundImage = "";
//var kitchenCoverImage = "";
//kitchenRevealImage = "";

//var thirdThemeCoverImage = "";

  

//var burgerTheme = []; [OPTIONALITY VARIABLES]          
//var thirdTheme = [];  [OPTIONALITY VARIABLES] 

                        //Each will hold all possible revealImages for their respective theme except the coverImage.
                        //Higher difficulties will retrieve more of these.

var backgroundImage;// = nflBackgroundImage;

var coverImage;// = nflCoverImage;         //This should be set via the option box the user chooses

var revealImages;// = nflRevealImages;  

var subset;  //num [need invalid input message then .hide() after keypress(enter)]             //[Optionality Variable].  Allow user to choose
                               //the number of cards to play with.  Analogous to difficulty

if (  $("select").val() === "nflTheme"  ) {
  backgroundImage = nflBackgroundImage;
  coverImage = nflCoverImage; 
  revealImages = nflRevealImages;
  console.log("select attribute")
}
else if (  $("select").choice === 2  ) {revealImages = theme2}
else if (  $("select").choice === 3  ) {revealImages = theme3}



var randomSubArray = function(array) {
  var imageSubset = []; //= [0,1,2,3,4,5];   //The subset of revealImages chosen from "allImages"

  for (i = 0; $("input.subset").val() - 1; i++) {
    imageSubset[i] = revealImages.splice(Math.floor(Math.random()*(revealImages.length)),1);
  }
}



var duplicate = function(){ //This function will duplicate the revealImages from "imageSubset"
                            //so as to have pairs of revealImages

}; 
var duplicatedImages = duplicate();



                                                 //this repeats but in later installments theyll be singles
                                                 //and be duplicated by the duplicate function
var revealImagesLength = revealImages.length;
//var dupImgsLength = duplicatedImages.length;   //Merely records the original length of "revealImagesSubset" in 
                                                 //a variable for use in a for loop.


                                             //This will be the shuffled revealImages array and will be
                                             //populated via the "shuffle()" function below.
var shuffledImages = new Array(revealImages.length-1);//It assumes an undesirable form as an array of arrays.
                                             //The "shuffle()" function will repurpose it into an
                                             //array of strings.

var shuffle = function() {    //This function shuffles the "shuffledImages" array, or the "duplicatedImages" array in further updates 
                              //of the game.

	for (var i = 0; i <= (revealImagesLength - 1) ; i++) {
		shuffledImages[i] = revealImages.splice(Math.floor(Math.random()*(revealImages.length)),1);
    
	}                                     //In a later installment, "revealImages" will be replaced with
                                        //"duplicated revealImages".
	var gameImages = new Array(shuffledImages.length);

	for (var i = 0; i <= revealImagesLength - 1; i++) {
		gameImages[i] = shuffledImages[i][0];
	}

  shuffledImages = gameImages;
	return shuffledImages;
}
var shuffledImages = shuffle();





  var shuffledImages2 = {};

  for (i = 0; i <= shuffledImages.length - 1; i++) {
    shuffledImages2["position-" + i] = shuffledImages[i];
  }
  shuffledImages = shuffledImages2;

// shuffledImages = objectifyArray();


for (var i = 0; i <= (Object.keys(shuffledImages).length - 1); i++) {           //dupImgsLength in the expanded version of the program
  $("div.game-container").append($("<img>"));
  // $("img").addClass("disappeared"); 
  $("img").last().addClass("position-" + i);        //OMG! FINALLY thx .last()
  $("img").last().attr("src", coverImage);
  
}
$("body").css('background-image', 'url(' + backgroundImage + ')'); 
$("body").css('background-size', "stretch");

var exposedArray = [];  //ex. [position-1, position-6].  

var exposedClassArray = []; //This particular array is 
                            //defined and utilized merely
                            //for match checking. If the two dom elements clicked have
                            //the same postiion class(because the same dom element was 
                            //clicked twice), then this will be used to block the computer
                            //from registering a match.
var win = 0;
$("img").click(function()  {  //If user inter-action should only happen given some other conditions are met, then 
                              //conditions aren't met before you allow the user to continue interacting you should check that those


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  if ($(this).hasClass("discovered")) {return}; 


  if (exposedArray.length === 2 && 
       ( 
         $(this).attr("class") === exposedClassArray[0] || 
         $(this).attr("class") === exposedClassArray[1] 
       )
     )  
        {  
           console.log("detected 3rd click in one of prev two positions")
           $("img[src$='"+exposedArray[0]+"']" ).attr("src", coverImage);       
           $("img[src$='"+exposedArray[1]+"']" ).attr("src", coverImage);
           exposedArray = [];
           exposedClassArray = [];
           return
  }                                          //The block of code between these /bars attempts to tweak the
                                             //whether third unmatched cards flip or not.  
  else if (exposedArray.length === 2 &&
            (
              $(this).attr("class") != exposedClassArray[0]  &&  
              $(this).attr("class") != exposedClassArray[1]  
            ) 
          )
              {
                 console.log("detected 3rd click but not on one of prev two clicked positions")
                 var positionIndex = $(this).attr("class");
                 var teamURL = shuffledImages[positionIndex];
                 var changeURL = $(this).attr( "src", teamURL);   //This block of code not only pushes the url into exposed array,
                 var newSource = $(changeURL).attr("src");        //but also changes the url of the dom element in the current position
                 
                 console.log(exposedArray)
                 $("img[src$='"+exposedArray[0]+"']" ).attr("src", coverImage);       
                 $("img[src$='"+exposedArray[1]+"']" ).attr("src", coverImage);
                 exposedArray = [];
                 exposedClassArray = [];

                 exposedArray.push(newSource); 

                 exposedClassArray.push($(this).attr("class"))
                 console.log(exposedArray)
                 console.log(exposedClassArray)
                 return
  };

            // I FOUND THIS SELECTOR ON STACK EXCHANGE WHEN I SEARCHED FOR "src selector"
  if ($(this).attr("class") === exposedClassArray[0] ) {return};
  
  
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  

 // if (  $(this).attr("class") === exposedClassArray[0]  ||
 //       $(this).attr("class") === exposedClassArray[1]    
 //     ) 
 //       {
 //        return
 //       };

          
 


  if (exposedArray.length <= 2) {
    console.log("pushing")
  var positionIndex = $(this).attr("class");
  var teamURL = shuffledImages[positionIndex];
  var changeURL = $(this).attr( "src", teamURL);   //This block of code not only pushes the url into exposed array,
  var newSource = $(changeURL).attr("src");        //but also changes the url of the dom element in the current position
  exposedArray.push(newSource);                    //to reveal the team.  This was something I did not expect js to do.

  exposedClassArray.push($(this).attr("class"));

  }
                                          ///////////////////////////////////////////////////////////////////////////////////////////////
  if (exposedArray.length === 3) {        /////////////////////////I THINK I SHOULD MAKE THIS AN ELSE IF CONTINUED WITH THE IF FROM ABOVE
    console.log("exposedArray has length 3");////////////////////////////////////////////////////////////////////////////////////////////
    $("img[src$='"+exposedArray[0]+"']" ).attr("src", coverImage);       
    $("img[src$='"+exposedArray[1]+"']" ).attr("src", coverImage); // I FOUND THIS SELECTOR ON STACK EXCHANGE WHEN I SEARCHED FOR "src selector"
    $("img[src$='"+exposedArray[2]+"']" ).attr("src", coverImage); 
                                    //cool animations here
    exposedArray = [];
    exposedClassArray = [];
    return;
  };
                                    
  //cool animations here                                                       

if (   exposedArray[0] === exposedArray[1]  ) {
    $("img[src$='"+exposedArray[0]+"']" ).addClass("discovered");           ///NEEDS FIXING!!!!
    $("img[src$='"+exposedArray[1]+"']" ).addClass("discovered");     
    exposedArray = [];
    exposedClassArray = [];
    win += 1;
    if (win === 3) {
      $("div.game-container").text("You win").css({"color": "white", "font-size": "6em", "text-align":"center"});
      // $("h1").text("You win!");
      console.log("win = "+win);
    }
  };                                    
  //$(this).css("transform","rotateY(90deg"));
});
//this.classList