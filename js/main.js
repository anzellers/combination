// The current combination:
var dial1 = 5;
var dial2 = 6;
var dial3 = 2;

$('button')
  .on('click', function() {
    // Increase the number on the dial
    $(this).text((parseInt($(this).text()) + 1) % 10);
    // Check the combination
    checkcombo();
  });

var checkcombo = function() {

var one = $('.one').text();
var two = $('.two').text();
var three = $('.three').text();

//If all numbers are correct
if ( one == dial1 && two == dial2 && three == dial3 ) { 
    $('body').css('background-color', '#bcdd4e'); 
}
//If two numbers are correct
else if (one == dial1 && two == dial2 || two == dial2 && three == dial3 || one == dial1  && three == dial3) {
  $('body').css('background-color', '#e3cb67');
}
//If one number is correct
else if (one == dial1 || two == dial2 || three == dial3) {
  $('body').css('background-color', '#e69458');
}
//If none of the numbers are correct
else {
  $('body').css('background-color', '#d27666');
}




};
