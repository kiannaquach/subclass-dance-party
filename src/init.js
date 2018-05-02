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

  $(document).on('click', '.pikachu', function(event) {
    
    let clickedTop = $(this).css('top');
    let clickedLeft = $(this).css('left');
    let shortestDist = 600000; //$("body").height() * $("body").width();
    let shortestDistKey = 0;
    let distance = [];
    
    if (typeof clickedTop === 'string' && typeof clickedLeft === 'string') {
      clickedTop = +clickedTop.slice(0, -2);
      clickedLeft = +clickedLeft.slice(0, -2);
    }
    
    window.dancers.forEach(function(item, idx) {
      //item.setPosition('50%', $("body").width() * Math.random());
      let currentTop = item.top;
      let currentLeft = item.left;
     

      let a = currentTop - clickedTop;
      let b = currentLeft - clickedLeft;
      
      let c = Math.sqrt(a**2 + b**2);
      distance.push(c);
     
            
    });
   
    for (var i = 0; i < distance.length; i++) {
      if (distance[i] > 3) {
        if (distance[i] < shortestDist) {
          shortestDist = distance[i];  
          shortestDistKey = i;
          
        }
      }
    }

   
    $(this).css('transform', 'scale(2)');
    let closest = dancers[shortestDistKey]; 
   
    closest.$node.css('transform', 'scale(4)');
  });
  
  $(document).on('mouseover', '.togapei', function() {
    $(this).css('background-image', 'url(images/misty.png)')
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

// c = sqrt(a^2+b^2)

//10 x 10 grid

//0,0 is bottom left

//one pika at 2,4

//another pika at 6, 8

// 6-2 = 4 = a
// 8-4 = 4 = b
// sqrt of (32)
// distance between one pika and another pika
