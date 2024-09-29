// Main Variables
let theInput = document.querySelector(".repos input");
let reposButton = document.querySelector(".repos .button");
let data = document.querySelector(".data");

reposButton.onclick = function () {
  gitRepos();
};
// Get Repos Function
function gitRepos() {
  // If Value Is Empty
  if (theInput.value == "") {
    data.innerHTML = "<span>Please Write Github Username.</span>";
  } else {
    fetch(`https://api.github.com/users/${theInput.value}/repos`)
      .then((respo) => respo.json())
      .then((repos) => {
        // Empty The Container
        data.innerHTML = "";
        // Loop On Repositories
        repos.forEach((repo) => {
          // Create The Main Div Element
          let mainDiv = document.createElement("div");
          // Create Repo Name Text
          let repoText = document.createTextNode(repo.name);
          // Append The Text To Main Div
          mainDiv.appendChild(repoText);
          // Create Repo URL
          let repoURL = document.createElement("a");
          // Create Repo Url Text
          let urlText = document.createTextNode("visit");
          // Append The Repo Url Text To Anchor Tag
          repoURL.appendChild(urlText);
          // Add Thje Hypertext Reference "href"
          repoURL.href = `https://github.com/${theInput.value}/${repo.name}`;
          // Set Attribute Blank
          repoURL.setAttribute("target", "_blank");
          // Append Url Anchor To Main Div
          mainDiv.appendChild(repoURL);
          // Create Stars Count Span
          let starSpan = document.createElement("span");
          // Create The Stars Count Text
          let startext = document.createTextNode(
            `Starts ${repo.stargazers_count}`
          );
          // Add Stars Count Text To Stars Span
          starSpan.appendChild(startext);
          // Append Stars Count Span To Main Div
          mainDiv.appendChild(starSpan);
          // Add Class On Main Div
          mainDiv.className = "box";
          // Append The Main Div To Container
          data.appendChild(mainDiv);
        });
      });
  }
}
