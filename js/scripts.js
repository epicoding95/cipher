$(function() {


  var userSentence = prompt("Enter a sentence!");

  var firstLastCap = function(str){
    var firstChar = str.charAt(0).toUpperCase();
    var lastChar = str.charAt(str.length - 1).toUpperCase();
    return firstChar + lastChar;
  }


  var firstLastReverse = function(str){
    var firstChar = str.charAt(0).toUpperCase();
    var lastChar = str.charAt(str.length - 1).toUpperCase();
    return lastChar + firstChar;
  }


  alert(firstLastCap(userSentence));
  alert(firstLastReverse(userSentence));

  var thirdFunction = function(){
    return userSentence + firstLastCap(userSentence) + firstLastReverse(userSentence);
  };

  alert(thirdFunction(userSentence));

  var fourthFunction = function(str){
    var halfLength = (str.length/2 -.1).toFixed();
    return str.charAt(halfLength) + userSentence + firstLastCap(userSentence) + firstLastReverse(userSentence);
  }

  alert(fourthFunction(userSentence));

  $(".leftimage").click(function(){
    alert(userSentence);
  });

  $(".rightimage").click(function(){
    alert(fourthFunction(userSentence));
  });
});
