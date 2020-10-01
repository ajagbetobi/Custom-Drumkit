window.addEventListener("load", () => {
  const buttons = document.querySelectorAll(".button");
  const sounds = document.querySelectorAll(".soundbox");
  const visual = document.querySelector(".visual");
  let playingMusic = false;
  let beenClicked = false;
  const colors = [
    "#60d394",
    "#d36060",
    "#d3d160",
    "#c060d3",
    "#606bd3",
    "#60c2d3",
  ];
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      if (!playingMusic && !beenClicked) {
        makePopUps(index);
        sounds[index].currentTime = 0;
        sounds[index].play();
        playingMusic = true;
      } else if (playingMusic && beenClicked) {
        makePopUps(index);
        sounds[index].currentTime = 0;
        sounds[index].pause();
        playingMusic = false;
      } else if (!playingMusic && beenClicked) {
        makePopUps(index);
        sounds[index].currentTime = 0;
        sounds[index].play();
        playingMusic = true;
      }
      beenClicked = true;
    });
  });

  function makePopUps(index) {
    const popUp = document.createElement("div");

    popUp.style.animation = `jump 1s ease `;
    popUp.style.backgroundColor = `${colors[index]}`;
    visual.appendChild(popUp);
    console.log(visual, colors[index]);
  }
});
