function beepBoop(userInput){
var result = [];
for (var i = 1; i <= userInput; i++){
  if (i === 1){
    result.push ("beep");
  } else if ((i % 10) === 0){
    result.push ("boop");
  } else if ((i % 3) === 0){
    result.push ("I'm sorry, Dave. I'm afraid I can't do that.");
  } else
    result.push (i);
}
return result;
}


$(document).ready(function() {
  $("form#beep").submit(function(event) {
    $("#res").empty();
    var userInput = parseInt($("input#userNumber").val());
    var result = beepBoop(userInput);
    result.forEach(function(output) {
    $("#userOutput").append("<li>" + output + "</li>");
    event.preventDefault();
  });
});
});
