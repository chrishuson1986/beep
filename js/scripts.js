$(document).ready(function() {
  $("form#puzzle").submit(function(event) {
    event.preventDefault();
    var wordsToScramble = $("input#userSentence").val()
    var splitSentence = wordsToScramble.split("")
console.log(splitSentence);
for (var i = 0; i < splitSentence.length; i += 1) {

  if ((splitSentence[i] === "a") || (splitSentence[i] === "e") || (splitSentence[i] === "i") || (splitSentence[i] === "o") || (splitSentence[i] === "u")) {
    splitSentence[i] = "-";
  }
}

var newSentence = splitSentence.join("");

$("#output").text(newSentence);
$("#results").show();
  });
});
