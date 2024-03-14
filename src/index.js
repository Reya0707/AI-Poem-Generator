function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem-response", {
    strings: "Your Poem will be generated here ✍",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);