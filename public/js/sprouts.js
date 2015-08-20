// YOUR CODE GOES HERE
var page = 1
$(".more-sprouts").on("click", function(event) {
  event.preventDefault();
  page++
  $.get("/tweets.json?page=" + parseInt(page), function(newTweets) {

    for (var i = 0; i < newTweets.length; i++) {
    $('ul.tweets').append( "<li class='tweet'><div class='body'>" + newTweets[i]["text"] + "</div><div class='user'>" + newTweets[i]["username"] + "</div></li>" );
  };

    });
});
