function paintMixer(color1, color2) {
  /*
  Add code here that will take the two string params and
  return a value as to what those two colors would create when mixed:

  * blue and red should mix to return 'purple'
  * green and red should mix to return 'brown'
  * blue and yellow should mix to return 'green'
  * anything with unknown colors should return a result of 'unknown'.

  The order of the params should not matter.
  */
  // PLACE YOUR CODE BELOW

    // just in case, if the colors are the same, return color1
    if(color1 === color2){
        return color1;
    }
    var colors_array = [color1, color2];
    if(colors_array.indexOf('blue') != -1 && colors_array.indexOf('red') != -1){
        return 'purple';
    }else if(colors_array.indexOf('green') != -1 && colors_array.indexOf('red') != -1){
        return 'brown';
    }else if(colors_array.indexOf('blue') != -1 && colors_array.indexOf('yellow') != -1){
        return 'green';
    }else{
        return 'unknown';
    }

  // PLACE YOUR CODE ABOVE
}

paintMixer('blue', 'red') === 'purple' && console.log('First mix worked')
paintMixer('red', 'blue') === 'purple' && console.log('Second mix worked')
paintMixer('green', 'red')=== 'brown' && console.log('Third mix worked')
paintMixer('blue', 'yellow') ==='green' && console.log('Fourth mix worked')
paintMixer('apple', 'frog') ==='unknown' && console.log('Apples and frogs don\'t mix, as expected')

/*
If everything works, you should see the following on the console
when run with "node 3_logic.js":

First mix worked
Second mix worked
Third mix worked
Fourth mix worked
Apples and frogs don't mix, as expected
*/