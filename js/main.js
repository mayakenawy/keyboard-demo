/* global $ */ // turn off jslint warning for $ (jQuery)

// Tell jQuery to execute the onReady function when the
// document is ready
$(function onReady() {
  
  // select the td by element and child element with class
  var keyupCell = $('table td.up');
  
  // variable to count number of keyup events
  var keyupCounter = 0;
  var before = new Data().getTime();
  
  // attach a keyup listener to the window object 
  $(window).keyup(function onKeyup(eventArgument) {
    // increment the keydownCounter by 1
    keyupCounter++;
    alert(after - before)
    if(KeyupCounter > 50) {
      
    }
   
    
    // set the text of the keyupCell
    keyupCell.text(keyupCounter);
  });

});