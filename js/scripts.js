function beepBoop(userInput){
var result = [];
for (var i = 1; i <= userInput; i++){
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
