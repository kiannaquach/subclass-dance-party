$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    console.log(dancerMakerFunction);

    // make a dancer with a random position

    /* $("body").height = x;
    x + 5% x * Math.random() - 5% of x
   
    1000px
    /10 = 100px
    Math.random */ 
    var dancer = new dancerMakerFunction(
      ($("body").height() - $("body").height()/5) * Math.random() + $("body").height()/10,
      ($("body").width() - $("body").width()/5) * Math.random() + $("body").width()/10,
      Math.random() * 1000
    );
    dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.lineUp').on('click', function(event) {
    let totalWidth = $("body").width();
    let interval = totalWidth / window.dancers.length;
    let intervalCount = 0;
    
  
    window.dancers.forEach(function(item) {
      //item.setPosition('50%', $("body").width() * Math.random());
      let currentWidth = interval * intervalCount;
      item.setPosition('75%', currentWidth);
      intervalCount++;
    });
  });


$(document).on('mouseover', '.togapei', function() {
  $(this).css('background-image', 'url(images/misty.png)')
});

$(document).on('mouseleave', '.togapei', function() {
  $(this).css('background-image', 'url(images/togapei.png)')
});
  // $('.pikachu').on('mouseover', function(event) {
  //   alert('hello!');
  // });
});

