"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 1

   Author: jeremiah ruiz
   Date:   3-11-20
   
   Filename: bw_review.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers.
      
   lightStars(e)
      Function that colors the stars representing the user rating
      for the book.
      
   turnOffStars(e)
      Function that restores the stars to empty colors, removing
      the user rating for the book.

   updateCount()
      Updates the count of characters in the wordCountBox
      element.

   countCharacters(textStr)
      Returns the number of a non-whitespace characters
      within textStr

*/
window.onload = init;
//init function 
function init(){
   var stars = document.querySelectorAll("span#stars img");
   for(var i = 0; i < stars.length; i++){
      stars[i].style.cursor = "pointer";
      stars[i].addEventListener("mouseenter", lightStars)
   }
   document.getElementById("comment").addEventListener("keyup", updateCount);
}
//lightstars highlights the stars and aloows us to vote the amount of stars
function lightStars(e){
   var starNumber = e.target.alt;
   var stars = document.querySelectorAll("span#stars img");
   for(var i =0; i< starNumber; i++){
      stars[i].src ="bw_star2.png";
   }
   for(var j = starNumber; j < 5; j++){
      stars[j].src = "bw_star.png";
   }
   //this makes it so that when the mouse leaves the stars they unhiglight
   document.getElementById("rating").value = starNumber + " stars";
   e.target.addEventListener("mouseleave", turnOffStars);
   //when you click on the star, it removes the event listener of turn off stars which keeps the color there to see how many stars you rate the movie
   e.target.addEventListener("click", function(){
      e.target.removeEventListener("mouseleave", turnOffStars);
   })
}
//this function turns off the stars
function turnOffStars(){
   var stars = document.querySelectorAll("span#stars img");
   for(var i = 0; i<stars.length; i++){
      stars[i].src = "bw_star.png"
   }
   document.getElementById("rating").value = "";
}
  //counts the words and if goes over it will go red
function updateCount(){
   var commentText = document.getElementById("comment").value;
   var charCount = countCharacters(commentText);
   var wordCountBox = document.getElementById("wordCount");
   wordCountBox.value = charCount + "/1000";
   if(charCount > 1000){
      wordCountBox.style.background = "red";
      wordCount.style.color = "white";
   }
   else{
      wordCount.style.color = "black";
      wordCountBox.style.backgroundColor = "white";
   }
}


  
  
  
/*=================================================================*/

function countCharacters(textStr) {
   var commentregx = /\s/g;
   var chars = textStr.replace(commentregx, "");
   return chars.length;
}   