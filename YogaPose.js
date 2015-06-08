var adjectives = ["happy", "half", "Lord of the", "flimsy", "public", "curious","downward", "half", "tired", "dancing", "smiling", "sleeping", "prancing", "inside out", "twisted", "reclining", "balanced", "safe", "leaping", "pouty", "thinking", "seated","simple", "upward", "extended"];

var nouns = ["cat", "mouse", "sun", "bush","halibut","armadillo" ,"donkey" , "moon", "sun", "butterfly", "crocodile", "badger","mosquito", "banana","strawberry","turtle","umbrella", "lizzard", "octopus","potato","meerkat", "lioness","owl","horse", "puffin","elephant","hare","tigress"];

function randomPoseGenerator(noun) {
	var randomAdjective = adjectives[Math.floor(Math.random()*adjectives.length)];
  console.log(Math.floor(Math.random()*adjectives.length));
 	var yogaPose = capitalizeFirstLetter(randomAdjective) +" "+ capitalizeFirstLetter(noun);
	return yogaPose;
}

function randomNoun(){
  return nouns[Math.floor(Math.random()*nouns.length)];
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function displayGiphyImage(searchTerm){
  var giphySearch = $.get("http://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC&limit=20");
  var giphyResponse;
  giphySearch.done(function(giphyResponse){
    var generatedImage = giphyResponse.data[Math.floor(Math.random()*giphyResponse.data.length)].images.downsized.url;
    $("#generatedImage").replaceWith("<img id='generatedImage' src='" + generatedImage + "'>");});
  }

var generatedPose = document.getElementById("generatedPose");

document.getElementById("generateButton").onclick = function() {
	    //generatedPose.innerText = yogaPose;
      var noun = randomNoun();
	    generatedPose.innerText = randomPoseGenerator(noun);
      displayGiphyImage(noun);
    };
