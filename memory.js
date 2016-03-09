//
//
// THIS PROBLEM WAS FIXED BUT KEEPING HERE TO ASK SOMEONE LATER!!!
// Left off trying to put all functions in pullSubset function.  Seemed like it was working,
// but then .click() wasn't registering on the dynamically created img elements.  The first 
// possible solution to check is to replace .click() with .on("click",...,...)


// I fixed the above problem.  the last step in the solution was to make shuffledImages a global
// variable on line 194.  I don't know why that was necessary since I defined shuffled images 
// originally "outside" of both the keypress and shuffle functions

// The same problem as above arose when trying to push into revealImages within the custom
// theme section of the code.  Upon trying to push a url into revealImages, the computer
// alerted that revealImages was undefined.  OH WAIT! I FIXED IT MERELY BY SPECIFYING THAT
// revealImages WILL BE AN ARRAY (var revealImages = [];) as opposed to what it was before
// (var revealImages;).  MAYBE SOMETHING SIMILAR COULD HAVE FIXED THE PROBLEM I HAD WITH
// shuffledImages


var nflBackgroundImage = "http://wallpapercave.com/wp/32xzfWZ.jpg";

var nflCoverImage = "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/NFL.png";

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
                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Lions.png",
                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Panthers.png",
                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Raiders.png",
                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Ravens.png",
                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Saints.png",
                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Steelers.png",
                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Titans.png",
                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Broncos.png",
                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Buccaneers.png",
                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Chargers.png",
                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Colts.png",
                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Dolphins.png",
                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Falcons.png",
                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Jets.png",
                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Packers.png",
                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Patriots.png",
                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Rams.png",
                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Redskins.png",
                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Seahawks.png",
                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Texans.png",
                       "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Vikings.png"]

//1.) Add other scoring standards besides time, such as knowable match percentage.  This means
//    if you've come across the same image on different attempts, then what proportion of the 
//    time do you match them correctly, the next time one of that same image is uncovered again.
//    As for how to do this, consider an array that records all src's flipped throughout the whole
//    game, then the number of excess src's beyond 2 (per src) will tell me how poorly the player
//    played.  This measure could be called mistake.  ACTUALLY THIS COULD BE MERELY THE NUMBER OF
//    CLICKS FOR THE WHOLE GAME.  THESE CLICKS, HOWEVER, CANNOT BE COUNTED AT THE BEGINNING OF 
//    THE CLICK FUNCTION, BECAUSE IN THAT CASE, CLICKING THE SAME IMAGE TWICE IN A ROW WOULD ADD
//    TO THE CLICK COUNT WHICH I DON'T THINK IS DESIRABLE FOR ME

//1.a)Another scoring standard this one for burning burgers is use the double triple rule to
//    derive an expression for the amount of time alloted for the player to find all matches.

//2.)ADD SOUNDS BITCH!

//3.) Consider putting the themes and their associated images into an object
//    like so; memory = {theme1 : ["http://wallpapercave.com/wp/32xzfWZ.jpg",
//                                 "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/NFL.png",
//                                  ["http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Bills.png",
//                                   "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/49ers.png",
//                                   "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Bears.png",
//                                   "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Browns.png",
//                                   "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Cardinals.png",
//                                   "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Chiefs.png",
//                                   "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Cowboys.png",
//                                   "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Eagles.png",
//                                   "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Bengals.png",
//                                   "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Jaguars.png",
//                                   "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Bills.png",
//                                   "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/49ers.png",
//                                   "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Bears.png",
//                                   "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Browns.png",
//                                   "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Cardinals.png",
//                                   "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Chiefs.png",
//                                   "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Cowboys.png",
//                                   "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Eagles.png",
//                                   "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Bengals.png",
//                                   "http://www.iconeasy.com/icon/png/Sport/NFL%20Teams/Jaguars.png"]]
//                         theme2 : ..., 
//                         theme3 : ... }    

//4.) Looks like as the number of cards played with is doubled, the time it takes to complete
//    the game triples. Rough estimate based on a few trials.  Wow!  this was nailed on the head with
//    113sec for subset = 15 and 338sec for subset = 31

//6.) Afford the user the ability to play an incremental mode, where subset automatically increases by one
//    every "round".  So for the case of the nfl images, they would play 31 rounds where on the i'th round
//    has subset = i

//8.) Add a button that merely re-covers and reshuffles using the same image setup chosen

//http://iconeasy.com/icon/128/Nature/Planets/Earth.png
//var kitchenBackgroundImage = "";
//var kitchenCoverImage = "";
//var kitchenRevealImage = "";

var emoticonBackgroundImage = "http://fondosblackberry.com/user-content/uploads/wall/o/66/wallpaper1_234.jpg";
var emoticonCoverImage = "http://iconeasy.com/icon/png/Emoticon/Yolks/Have%20a%20nice%20day.png";
var emoticonRevealImages = ["http://iconeasy.com/icon/png/Emoticon/Emoticons%202/agressive.png",
                            "http://iconeasy.com/icon/png/Emoticon/Emoticons%202/bite%20myself.png",
                            "http://iconeasy.com/icon/png/Emoticon/Emoticons%202/cant%20believe%20it.png",
                            "http://iconeasy.com/icon/png/Emoticon/Emoticons%202/cheer.png",
                            "http://iconeasy.com/icon/png/Emoticon/Emoticons%202/contrite.png",
                            "http://iconeasy.com/icon/png/Emoticon/Emoticons%202/cool.png",
                            "http://iconeasy.com/icon/png/Emoticon/Emoticons%202/cry%20mouth.png",
                            "http://iconeasy.com/icon/png/Emoticon/Emoticons%202/cry.png",
                            "http://iconeasy.com/icon/png/Emoticon/Emoticons%202/dont%20know.png",
                            "http://iconeasy.com/icon/png/Emoticon/Emoticons%202/drool.png",
                            "http://iconeasy.com/icon/png/Emoticon/Emoticons%202/eat.png",
                            "http://iconeasy.com/icon/png/Emoticon/Emoticons%202/gape.png",
                            "http://iconeasy.com/icon/png/Emoticon/Emoticons%202/glad.png",
                            "http://iconeasy.com/icon/png/Emoticon/Emoticons%202/grimace.png",
                            "http://iconeasy.com/icon/png/Emoticon/Emoticons%202/grumpy.png",
                            "http://iconeasy.com/icon/png/Emoticon/Emoticons%202/headache.png",
                            "http://iconeasy.com/icon/png/Emoticon/Emoticons%202/hey%20come%20on.png",
                            "http://iconeasy.com/icon/png/Emoticon/Emoticons%202/in%20love.png",
                            "http://iconeasy.com/icon/png/Emoticon/Emoticons%202/kiss%20me.png",
                            "http://iconeasy.com/icon/png/Emoticon/Emoticons%202/look.png",
                            "http://iconeasy.com/icon/png/Emoticon/Emoticons%202/love%20glad.png",
                            "http://iconeasy.com/icon/png/Emoticon/Emoticons%202/love%20heart.png",
                            "http://iconeasy.com/icon/png/Emoticon/Emoticons%202/love%20rose.png",
                            "http://iconeasy.com/icon/png/Emoticon/Emoticons%202/monster.png",
                            "http://iconeasy.com/icon/png/Emoticon/Emoticons%202/nerved.png",
                            "http://iconeasy.com/icon/png/Emoticon/Emoticons%202/oh%20no.png",
                            "http://iconeasy.com/icon/png/Emoticon/Emoticons%202/pfffrt.png",
                            "http://iconeasy.com/icon/png/Emoticon/Emoticons%202/please%20no.png",
                            "http://iconeasy.com/icon/png/Emoticon/Emoticons%202/powerless.png",
                            "http://iconeasy.com/icon/png/Emoticon/Emoticons%202/psssst.png",
                            "http://iconeasy.com/icon/png/Emoticon/Emoticons%202/sacred.png",
                            "http://iconeasy.com/icon/png/Emoticon/Emoticons%202/sheepish.png",
                            "http://iconeasy.com/icon/png/Emoticon/Emoticons%202/smile.png",
                            "http://iconeasy.com/icon/png/Emoticon/Emoticons%202/stupid.png",
                            "http://iconeasy.com/icon/png/Emoticon/Emoticons%202/too%20much.png",
                            "http://iconeasy.com/icon/png/Emoticon/Emoticons%202/uuups.png",
                            "http://iconeasy.com/icon/png/Emoticon/Emoticons%202/weep.png",
                            "http://iconeasy.com/icon/png/Emoticon/Emoticons%202/welcome.png",
                            "http://iconeasy.com/icon/png/Emoticon/Emoticons%202/why%20me.png",
                            "http://iconeasy.com/icon/png/Emoticon/Emoticons%202/wink.png"];

  
//var burgerTheme = []; [OPTIONALITY VARIABLES]          
//var thirdTheme = [];  [OPTIONALITY VARIABLES] 

                        //Each will hold all possible revealImages for their respective theme except the coverImage.
                        //Higher difficulties will retrieve more of these.
var backgroundImage;

var coverImage;         //This should be set via the option box the user chooses

var revealImages = []; 

var subset; 

var shuffledImages;


//re-consider putting the following keypress function inside of a function called pull subset, since the
//undefined-shuffledImages-issue was fixed via making shuffled images a global variable.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var pullSubset = function() {  
  $("input.subset").keypress(function(e) {
    if (e.which === 13) {
      console.log("enter was pressed");

      if (
          parseInt($("input.subset").val()) > revealImages.length  ||
          parseInt($("input.subset").val()) < 1                        
         ) 
      {
        alert("Must choose a number specified in the input box. Try again.");
        $("input.subset").val("");
      } 

      else {
            subset = parseInt($("input.subset").val());
            console.log(subset);
            $("input.subset").hide();
            var subArray = function(arrayToChooseFrom) {
            var array = []; 
            for (var i = 0; i <= (subset - 1); i++) {
              array[i] = arrayToChooseFrom.splice(Math.floor(Math.random()*(arrayToChooseFrom.length)),1);
            };

            var gameImages = new Array(array.length);

            for (var i = 0; i <= subset - 1; i++) {
              gameImages[i] = array[i][0];
            };

            array = gameImages;
            return array;

          };                                     

          revealImages = subArray(revealImages); 
                                                       
                                                 


          var revealImagesLength = revealImages.length;

          var duplicate = function(arrayToBeDuplicated){ //This function will duplicate the revealImages from 
                                                         //"imageSubset" so as to have pairs of revealImages
            //var arrayToBeDuplicatedLength = arrayToBeDuplicated.length;

            for (var i = revealImagesLength; i <= (revealImagesLength)*2 - 1; i++) {
              
              arrayToBeDuplicated[i] = arrayToBeDuplicated[i-revealImagesLength];
              
            };
            
            return arrayToBeDuplicated;
          }; 

          revealImages = duplicate(revealImages);

                                                           //this repeats but in later installments theyll be singles
                                                           //and be duplicated by the duplicate function
          revealImagesLength = revealImages.length;
          //var dupImgsLength = duplicatedImages.length;   //Merely records the original length of "revealImagesSubset" in 
                                                           //a variable for use in a for loop.


                                                                //This will be the shuffled revealImages array and will be
                                                                //populated via the "shuffle()" function below.
          shuffledImages = new Array(revealImages.length-1);//It takes on an undesirable form as an array of arrays.
                                                                //The "shuffle()" function will also repurpose it into an
                                                                //array of strings.

          var shuffle = function(arrayToBeShuffled) {    //This function shuffles the "shuffledImages" arrayToBeShuffled, or the "duplicatedImages" arrayToBeShuffled in further updates 
                                        //of the game.
            for (var i = 0; i <= (revealImagesLength - 1) ; i++) {
              shuffledImages[i] = arrayToBeShuffled.splice(Math.floor(Math.random()*(arrayToBeShuffled.length)),1);  
            };                                     //In a later installment, "array" will be replaced with
                                                  //"duplicated array".
            var gameImages = new Array(shuffledImages.length);

            for (var i = 0; i <= revealImagesLength - 1; i++) {
              gameImages[i] = shuffledImages[i][0];
            };

            shuffledImages = gameImages;
            return shuffledImages;
          };

          shuffledImages = shuffle(revealImages);



          var shuffledImagesObject = {};

          var objectifyArrayWithPositionKeys = function(arrayToBeTurnedIntoObject) {
            for (var i = 0; i <= arrayToBeTurnedIntoObject.length - 1; i++) {
              shuffledImagesObject["position-" + i] = arrayToBeTurnedIntoObject[i];
            }
            return shuffledImagesObject;
          };

          shuffledImages = objectifyArrayWithPositionKeys(shuffledImages);  


          for (var i = 0; i <= (Object.keys(shuffledImages).length - 1); i++) {           //dupImgsLength in the expanded version of the program
            $("div.game-container").append($("<img>"));
            // $("img").addClass("disappeared"); 
            $("img").last().addClass("position-" + i);        //OMG! FINALLY thx to .last()
            $("img").last().attr("src", coverImage);  
          };
          // $("body").css('background-image', 'url(' + backgroundImage + ')'); 
          // $("body").css('background-size', "stretch");

      };
      
    };
  })  
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var setUpPage = function() {
  console.log("begin setup");
  // alert("Choose a default theme or create your own.")

  $("select").change(function() {

    if (  $("select").val() === "nflTheme"  ) {
                                               console.log("nfl selected");
                                               backgroundImage = nflBackgroundImage;
                                               coverImage = nflCoverImage; 
                                               revealImages = nflRevealImages;                                                    
                                              }
                                               
    else if (  $("select").val() === "kithenTheme"  ) {
                                                       console.log("registered theme 2");
                                                       revealImages = theme2
                                                       coverImage = theme2;
                                                       revealImages = theme2;                                                       
                                                      }

    else if (  $("select").val() === "emoticonTheme"  ) {
                                                      console.log("registered emoticon theme");
                                                      backgroundImage = emoticonBackgroundImage;
                                                      coverImage = emoticonCoverImage;
                                                      revealImages = emoticonRevealImages;
                                                    }

    else if (  $("select").val() === "customTheme"  ) {
                                                       $("input.backgroundImage").css("visibility", "visible");
                                                      }   
    if ( $("select").val() !== "customTheme") {
      $("body").css('background-image', 'url(' + backgroundImage + ')'); 
      // $("body").css('background-size', "stretch");
       
      $("input.subset").css({"visibility": "visible", "width": "50em"});
      $("input.subset").attr("placeholder", "Choose the number of images to play with. Pick a number between 1 and " + revealImages.length + " and press enter.");
      $("h3").css({"background-color": "rgb(0,0,0,0)", "visibility": "visible"});
      pullSubset();
    }
    $("select").hide();
  })                                              
};
setUpPage();

$("input.backgroundImage").keypress(function(e) {
  if (e.which === 13) {
    backgroundImage = $("input.backgroundImage").val();
    $("body").css('background-image', 'url(' + backgroundImage + ')');
    $("input.backgroundImage").css("visibility", "hidden");
    $("input.coverSideImage").css("visibility", "visible");
  }
});

$("input.coverSideImage").keypress(function(e) {
  if (e.which === 13) {
    coverImage = $("input.coverSideImage").val();
    $("input.coverSideImage").css("visibility", "hidden");
    $("input.images").css("visibility", "visible");
    $("button.done").css("visibility", "visible")
  }
});

$("input.images").keypress(function(e) {
  if (e.which === 13) {
    revealImages.push($("input.images").val());
    $("<li>").appendTo("ul");
    $("li").css({"background-color": "black", "color": "white"});
    $("li").last().text($("input.images").val());
    $("input.images").val(""); 
  }
});

$("button.done").click(function () {
  $("input.images").css("visibility", "hidden");
  $("button.done").css("visibility", "hidden");

  $("input.subset").css({"visibility": "visible", "width": "50em"});
  $("input.subset").attr("placeholder", "Choose the number of images to play with. Pick a number between 1 and " + revealImages.length + " and press enter.");
  $("h3").css({"background-color": "black", "visibility": "visible"});
  $("ul").hide();
  pullSubset();
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var exposedArray = [];  //ex. [position-1, position-6].  


                            //This particular array is 
                            //defined and utilized merely
var exposedClassArray = []; //for match checking. If the two dom elements clicked have
                            //the same postiion class(because the same dom element was 
                            //clicked twice consecutively), then this will be used to block the 
                            //computer from registering a match.
var win = 0;
var timeElapsed = 0;

var numberOfClicks = 0;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var uponClick = function() {
  $("body").on('click', "img", function()  {  //If user inter-action should only happen given some other conditions are met, then 
                                            // place code for prohibiting user interaction at the beginning of code
                              
    console.log("click detected");                              
    if (timeElapsed === 0) {
      myInterval = setInterval(function(){
        timeElapsed++
        $("h3.clock").text(timeElapsed/10);
      },100);
    }

    $("input").css("visibility","hidden");

    if ($(this).hasClass("discovered")) {return};

    
    if (exposedArray.length === 2) {
        
      $("img[src$='"+exposedArray[0]+"']" ).attr("src", coverImage);       
      $("img[src$='"+exposedArray[1]+"']" ).attr("src", coverImage);    

      if (  $(this).attr("class") != exposedClassArray[0]  &&  $(this).attr("class") != exposedClassArray[1]  ) {
                 var positionIndex = $(this).attr("class");
                 var teamURL = shuffledImages[positionIndex];
                 var changeURL = $(this).attr( "src", teamURL);   //This block of code not only pushes the url into exposed array,
                 var newSource = $(changeURL).attr("src");        //but also changes the url of the dom element in the current position
                 
                 exposedArray.push(newSource); 
                 exposedClassArray.push($(this).attr("class"))
                 numberOfClicks++;
                 $("h3.clicks").text(numberOfClicks);
      }

    exposedArray.splice(0,2);
    exposedClassArray.splice(0,2)
    return;
    };

    if (  $(this).attr("class") === exposedClassArray[0]  ||
          $(this).attr("class") === exposedClassArray[1]    
       ) 
          {                              ////this conditional prevents effects upon repeating clicks on first flipped card
           return                        ////It's important that this comes after the above case of two cards flipped over.
          };                             ////This conditional is checked after first checking if number of exposed "cards"
                                         ////is 2

    if (exposedArray.length <= 1) {           //// '<= 1' because this is what we want to do  as long as none of the other 
      var positionIndex = $(this).attr("class");//// conditions above were met first.
      var teamURL = shuffledImages[positionIndex];
      var changeURL = $(this).attr( "src", teamURL);   //This block of code NOT ONLY pushes the url into exposed array,
      var newSource = $(changeURL).attr("src");        //but also changes the url of the dom element in the current position
      exposedArray.push(newSource);                    //to reveal the team.  This was something I did not expect js to do.

      exposedClassArray.push($(this).attr("class"));
      numberOfClicks++;
      $("h3.clicks").text(numberOfClicks);
    }                                      
      //cool animations here                                                       

    if (   exposedArray[0] === exposedArray[1]  ) {
      $("img[src$='"+exposedArray[0]+"']" ).addClass("discovered");
      $("img[src$='"+exposedArray[1]+"']" ).addClass("discovered");     
       exposedArray = [];
       exposedClassArray = [];
       win += 1;
       if (win === subset) {
        clearInterval(myInterval);
        $("img").hide();
        $("<h2>").appendTo("body");
        $("h2").text("You Win!").addClass("winner");
        $("h2").css({"padding": "2em", "text-align": "center", "color": "white"});
        // $("<button type='submit' class='reshuffle'>Re-shuffle and play again</button>").appendTo("body");
        $("<button type='submit' class='refresh'>Play Again?</button>").appendTo("body");
       }
    };                                    
      //$("1").css("transform","rotateY(90deg"));
  });
};
uponClick();

$("body").on("click", "button.reshuffle", function () {

})

$("body").on("click", "button.refresh", function() {
  location.reload(true);
});
//this.classList





