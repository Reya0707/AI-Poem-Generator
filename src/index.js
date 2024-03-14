function displayPoem(response) {

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 0.5,
    cursor:"",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions"); // Corrected selector
  let apiKey = "36c26f017e4ae34tb6a9679bb25odafe";
  let context =
    "You are an AI Poet that loves to tell short poems. The poem must be provided in HTML format with 4 lines only. Make sure the follow the user instructions. Example: <p>this is a poem</p>.";
  let prompt = `User instructions: Generate a short poem about ${instructionsInput.value}`;
  
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating Poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  
  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
