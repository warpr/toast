const success = document.querySelector('.success');
const warning = document.querySelector('.warning');
const error = document.querySelector('.error');
const info = document.querySelector('.info');

let toastContainer;

function generateToast({
  message = '👊 You got this, kid! 👊',
  background = '#00214d',
  color = '#fffffe',
  length = '5000ms',
}){
  toastContainer.insertAdjacentHTML('beforeend', `<p class="toast" 
    style="background-color: ${background};
    color: ${color};
    animation-duration: ${length}">
    ${message}
  </p>`)
  const toast = toastContainer.lastElementChild;
  toast.addEventListener('animationend', () => toast.remove())
}

(function initToast(){
  document.body.insertAdjacentHTML('afterbegin', `<div class="toast-container"></div>`);
  toastContainer = document.querySelector('.toast-container');
})()

success.addEventListener('click', (e) => {
  generateToast({
    message: e.currentTarget.dataset.message,
    background: "hsl(171 100% 46.1%)",
    color: "hsl(171 100% 13.1%)",
    length: "7000ms",
  })
})

info.addEventListener("click", () => {
  generateToast({
    message: "✍️ Write this down… ✍️",
    background: "hsl(51 97.8% 65.1%)",
    color: "hsl(51 97.8% 12.1%)",
    length: "8000ms",
  });
});

warning.addEventListener("click", () => {
  generateToast({
    message: "⚠️ You're burning the food! ⚠️",
    background: "hsl(350 100% 66.5%)",
    color: "hsl(350 100% 13.5%)",
  });
});

error.addEventListener("click", () => {
  generateToast({
    message: "⚠️ Ya sure about that? ⚠️",
    background: "hsl(350 100% 66.5%)",
    color: "hsl(350 100% 13.5%)",
  });
});

