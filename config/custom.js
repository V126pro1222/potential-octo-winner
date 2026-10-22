const observer = new MutationObserver(() => {
  const gameElements = document.querySelectorAll(".game img");
  
  gameElements.forEach((img) => {
    if (img.src.includes("LOCAL_GAME_")) {
      // Find the specific name of your game file
      const urlParts = img.src.split("LOCAL_GAME_");
      const fileName = urlParts[1].split("/")[0];
      
      // Use your template's default thumbnail background
      img.src = "./nativess.png"; 
      
      // Redirect directly to your uploaded HTML game
      img.onclick = () => {
        window.location.href = `./games/${fileName}.html`;
      };
    }
  });
});

const container = document.getElementById("gamesContainer");
if (container) {
  observer.observe(container, { childList: true, subtree: true });
}
