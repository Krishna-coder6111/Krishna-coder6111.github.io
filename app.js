const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelector("h2").onmouseover = event => {
  let iterations = 0;
  
  const interval = setInterval(() => {
  event.target.innerText = event.target.innerText.split("")
  .map((letter, index) => {
    if(index < iterations){
      return event.target.dataset.value[index];
    }
      return letters[Math.floor(Math.random() * 26)]
    })
  .join("");
    
    if(iterations >= event.target.dataset.value.length) {clearInterval(interval);
                                                        }
    iterations+=1/2;
    
}, 30);
}

const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const menuItems = document.getElementById('menu-items');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
});