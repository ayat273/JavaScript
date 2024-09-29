const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "http://api.quotable.io/random";
async function getQuote(url) {
  const response = await fetch(url);
  var date = await response.json();
  quote.innerHTML = date.content;
  author.innerHTML = date.author;
}
getQuote(api_url);
function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      " --by " +
      author.innerHTML,
      "Tweet Window",
      "width=600, height=300"
  );
}
